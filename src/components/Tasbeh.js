import React, {useState} from 'react';
import Header from "./Header";

const Tasbeh = (props) => {
    const [count , setCount] = useState(0);

    const counter = () =>{
        setCount(count + 1);
    }
    return (
        <div className="tasbeh">
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5 text-center">
                        <h1>Tasbeh</h1>
                        <p className="tasbeh1 mb-0 mt-2">{(count > 33 && count <= 66) ? "Alhamdulillah" : ((count > 66 && count <=99) ? "Allohu akbar" : "Subhanallah")}</p>
                        <p className="tasbeh2 mb-0 mt-2">{(count > 33 && count <= 66) ? "Allohu akbar" : ((count > 66 && count <=99) ? "Subhanallah" : "Alhamdulillah")}</p>
                        <p className="tasbeh3 mb-0 mt-2">{(count > 33 && count <= 66) ? "Subhanallah" : ((count > 66 && count <=99) ? "Alhamdulillah" : "Allohu akbar")}</p>
                    </div>
                    <div className="col-12 d-flex justify-content-center mt-5">
                        <div>
                            <div className="card">
                                <div className="card-body d-flex align-items-center justify-content-end">
                                    <h2 className="text-end">{count}</h2>
                                </div>
                            </div>
                            <div className="clear" onClick={()=>setCount(0)}>
                                <img src="./images/circle.png"/>
                                <span>Tozalash</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 text-center mt-4">
                        <button type="button" className="btn" onClick={counter}>Sanash</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tasbeh;
