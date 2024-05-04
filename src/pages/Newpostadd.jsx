import "./Home.css";
import TopBar from "../components/topbar/TopBar";
import DownBar from "../components/downbar/DownBar";
import MidSection from "../components/midsection/MidSection";
import axios from "axios";
import { useState } from "react";

const Newpostadd = () => {
    const isLogoin = localStorage.getItem('Islogin');
    var lodigData = JSON.parse(isLogoin)
    console.log("isLogoin", lodigData)
    var username  = lodigData.username

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [imagelink, setImagelink] = useState('');
    const [error, setError] = useState('');


    const handleAddPost = (e) => {
        e.preventDefault();
        const postData = {
            title,
            content,
            imagelink,
            username,
        };

        axios.post('http://localhost:8000/posts', postData)
            .then(response => {
                console.log('New post added!', response.data);
            })
            .catch(error => {
                console.error('Error adding new post:', error);
                setError('Failed to add new post');
            });
    };
    return (
        <>
            <div className="home">
                <TopBar lodigData={lodigData} />
                <div className="post_from">
                    <form onSubmit={handleAddPost} >
                        <input type="text" className="from_input" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <input type="text" className="from_input" placeholder="imagelink" value={imagelink} onChange={(e) => setImagelink(e.target.value)} />
                        <textarea className="from_input" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
                        <button className="add_post_bt" type="submit">Add New Post</button>
                    </form>
                    {error && <p>{error}</p>}
                </div>
            </div>
        </>

    );
}


export default Newpostadd;