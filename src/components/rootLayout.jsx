import {Link, Outlet} from "react-router-dom";


function rootLayout() {
    return (
        <div>
            <nav>
                <Link to="/recoverpassword">Forgot Password</Link> <br/>
                <Link to="/signUp"> Sign Up </Link>
                <Link to="/login"> Log in  </Link>
                <Link to="/home">Home</Link>
                    <Link to="/home/channels">Channels</Link>
            </nav>
        </div>,
            <main> <Outlet/> </main>
    );
}

export default rootLayout;