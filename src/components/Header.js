import React from 'react';
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="row w-100">
                    <div className="col-12 d-flex align-items-center justify-content-between">
                           <Link to="/" className="navbar-brand d-flex align-items-center">
                               <img src="./images/Vector (13).png"/>
                               <span className="">MyNamaz</span>
                           </Link>
                        <div className="">
                            {/*<Link to="/qibla" className="pageLink">Qibla</Link>*/}
                            <Link to="/tasbeh" className="pageLink">Tasbeh</Link>
                            <Link to="/weather" className="pageLink">Ob-havo</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;
