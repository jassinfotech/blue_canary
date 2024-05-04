import "./MidSection.css"
import Friends from "../friends/Friends";
import UserActivity from "../userActivity/UserActivity";
const MidSection = ({ lodigData }) => {
    console.log("lodigDataytyty", lodigData)
    return (
        <>
            <div className="midContainer">
                <div className="userSection">
                    <UserActivity lodigData={lodigData}/>
                </div>
                <div className="friendsSection">
                    <div className="friendsSectionTitle">
                        <h1> Friends </h1>
                    </div>
                    <hr className="hrLine" />
                    <div className="friendsListSection">
                        <div className="listSection">
                            <div className="listItems">
                                <Friends />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default MidSection;