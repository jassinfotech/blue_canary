import "./TopBar.css";
import Login from "../../pages/Login";
import {Search} from "@material-ui/icons";
import {Link} from "react-router-dom";

const TopBar = ({lodigData}) => {
  return(
      <div className="topBarBody">
              <div className="topBarLeft">
                  <div className="searchBar">
                      <input className="search" type="search" placeholder="Search"/>
                      <Search className="searchIcon" />
                  </div>
                  <span className="navLinks">
                        <Link to='/Newpostadd' className="newPost" type="button">New Post</Link>
                        <Link to='/Newpostadd' className="newPost" type="button">Profile</Link>
                        <Link to='/Newpostadd' className="newPost" type="button">Setting</Link>
                   
                  </span>
                </div>
              <div className="topBarRight">
                  <div>
                      <p> Blue Canary</p>
                  </div>
                  <div>
                      <img src="assets/canary_icon.jpeg" alt="canary_icon"/>
                  </div>

              </div>
      </div>
  );
}

export default TopBar;