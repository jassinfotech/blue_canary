import "./Posts.css";

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Posts = () => {
    const [likes, setLikes] = useState(1);
    const [dislikes, setDislikes] = useState(1);
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const [posts, setPosts] = useState([]);
    const postid = "1"
    const handleLike = () => {
        const postId = postid;
        const userId = '1';
        axios.post(`http://localhost:8000/posts/${postId}/like`, { userId })
            .then(response => {

                console.log('Post liked!', response.data);
            })
            .catch(error => {
                console.error('Error liking post:', error);
            });
        if (!liked) {
            setLikes(likes + 1);
            setLiked(true);
            if (disliked) {
                setDislikes(dislikes - 1);
                setDisliked(false);
            }
        }
    };

    const handleDislike = () => {
        const postId = postid;
        const userId = '1'; // Replace with the actual user ID

        axios.post(`http://localhost:8000/posts/${postId}/dislike`, { userId })
            .then(response => {
                // Handle the successful dislike action
                console.log('Post disliked!', response.data);
            })
            .catch(error => {
                // Handle any errors that occur during the dislike action
                console.error('Error disliking post:', error);
            });
        if (!disliked) {
            // Make an API call to the dislike endpoint
            // Update the dislikes count and set the disliked state
            setDislikes(dislikes + 1);
            setDisliked(true);

            // If the post was liked, update the likes count and reset the liked state
            if (liked) {
                setLikes(likes - 1);
                setLiked(false);
            }
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/get-posts');
                const data = response.data.result;
                setPosts(data); // Store the fetched data in component state
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    console.log("postsfffffffffffffffff-> ", posts)
    return (
        <div className="postsMainContainer">
            {posts.map((post) => (

                <div key={post.id} className="post_ariya">
                    <div className="postsArea">
                        <img src={post.imagelink} alt="Like" />
                    </div>
                    <div className="postsDownBar">
                        <span onClick={handleLike}>
                            <img src="https://static.thenounproject.com/png/1012954-200.png" alt="Like" />
                            {liked ? 'Liked' : 'Like'}
                        </span>
                        <span onClick={handleDislike}>
                            <img src="https://cdn-icons-png.flaticon.com/512/6902/6902047.png" alt="Dislike" />
                            {disliked ? 'Disliked' : 'Dislike'}
                        </span>


                    </div>
                    <div className="commentsSection">
                        <p>This is comments section.</p>
                    </div>
                </div>
            ))}

        </div>

    );

};

export default Posts;