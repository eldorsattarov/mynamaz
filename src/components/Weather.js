import React, {useEffect, useState} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {updatePrayer,getPrayer,getWeather} from "../redux/actions/prayerAction";
import axios from "axios";

const Weather = (props) => {
const [xavo,setXavo] = useState([]);
    useEffect(()=>{
        props.getPrayer();
        props.getWeather();
        axios.get("https://api.openweathermap.org/data/2.5/weather?q=tashkent&appid=f00bcd94f6285c257d672c9b844280f6")
            .then((res)=>{
               xavo.push(res.data);
            })
    },[]);

    // console.log(xavo.main.temp - 274.15)
    return (
        <div className="weather">
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5 text-center">
                        <h1>Ob-havo ma’lumotlari</h1>
                        {props.prayer.map((item, index) => {
                            if (props.datee === index) {
                                return (
                                    <p key={index}>{item.date.gregorian.weekday.en} - {item.date.gregorian.day} {item.date.gregorian.month.en}</p>
                                )
                            }
                        })}
                    </div>
                    <div className="col-12 d-flex justify-content-center mt-3">

                                <div className="card cardOne">
                                    <div className="card-body d-flex align-items-center justify-content-between">
                                        {xavo.map((item,index)=>{
                                            while (index < 1){
                                                return(
                                                    <div>
                                                        <h2 className="">{(item.main.temp - 274.15).toString().slice(0,3)}
                                                            <sup><img src="./images/Ellipse 8.png"/></sup></h2>
                                                        <span>O‘zbekiston, Toshkent</span>
                                                    </div>
                                                )
                                            }
                                        })}
                                        <div className="imgDiv">
                                            <img src="./images/Group 7.png"/>
                                        </div>
                                        <img src="./images/Group 7.png" className="imgg"/>
                                    </div>
                                </div>
                    </div>
                    {/*<div className="col-12 d-flex justify-content-center mt-3">*/}
                    {/*    <div className="card">*/}
                    {/*        <div className="card-body">*/}

                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        prayer: state.prayer.prayer,
        weather: state.prayer.weather,
        datee: state.prayer.datee,
        soat: state.prayer.soat,
        daqiqa: state.prayer.daqiqa,
    }
}
export default connect(mapStateToProps,{updatePrayer,getPrayer,getWeather})(Weather);
