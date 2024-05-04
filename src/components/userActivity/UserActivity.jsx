import "./UserActivity.css";
import "../profilePic.webp";
import { AuthContext } from "../../context/authContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Posts from "../posts/Posts";

const UserActivity = ({ lodigData }) => {

    const [error, setError] = useState(null);
    const img1 = "https://t4.ftcdn.net/jpg/01/15/54/97/360_F_115549789_UxeJewo8VMYF9J1qzNdcZ4NvmuWECTxW.jpg";
    const { currentUser, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const logoutClickHandler = async (e) => {
        e.preventDefault();

        try {
            await logout();
            navigate("/")
            alert("Successfully logged out!");
        }
        catch (err) {
            setError(err.response.data);
            alert(error);
        }
    };



    return (
        <div className="userActivityCont">
            <div className="userInfoCont">
                <span id="userInfoSpan1">
                    <img src={img1} />
                    {lodigData?.username}
                </span>
                <span>

                </span>
            </div>
            <div className="userActivityPosts">
                <Posts lodigData={lodigData}/>
            </div>


        </div>
    )

}

export default UserActivity;