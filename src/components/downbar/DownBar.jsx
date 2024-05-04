import "./DownBar.css"

import {useNavigate} from "react-router-dom";


const DownBar = () => {

        /* useNavigate instance to navigate to channels page. */
    const navigate = useNavigate();


  return(
      <>
          <div className="downBarContainer">
              <div className="leftBar">
                    <h2> Home </h2>
              </div>
              <div className="middleBar">
                  <h2> Canary Hutch </h2>
              </div>
              <div className="rightBar" onClick={() => {navigate("/home/channels")}}>
                  <h2> Channels </h2>
              </div>
          </div>
      </>

  );
}


export default DownBar;