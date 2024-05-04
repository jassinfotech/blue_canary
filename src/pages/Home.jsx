import "./Home.css";
import TopBar from "../components/topbar/TopBar";
import DownBar from "../components/downbar/DownBar";
import MidSection from "../components/midsection/MidSection";


const Home = () => {
    const isLogoin = localStorage.getItem('Islogin');
    var lodigData = JSON.parse(isLogoin)
    console.log("isLogoin", lodigData)
    return (
        <>
            <div className="home">
                <TopBar lodigData={lodigData}/>
                <MidSection lodigData={lodigData} />
                <DownBar />

            </div>
        </>

    );
}


export default Home;