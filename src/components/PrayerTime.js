import React, {useEffect, useState} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {updatePrayer, getPrayer} from "../redux/actions/prayerAction";
import Progressbar from 'react-js-progressbar';
import {Progress} from "reactstrap";
import {Paper, Grid, Typography} from "@material-ui/core";
import SemiCircleProgressBar from "react-progressbar-semicircle";

const PrayerTime = (props) => {

    useEffect(() => {
        props.getPrayer();
    }, []);

    const [percentage, setPercentage] = useState(0);

    const change_progressbar_input = () => {
        setPercentage(50);
    };

    // let bomdod  = "";
    // let quyosh  = "";
    // let peshin  = "";
    // let asr  = "";
    // let shom  = "";
    // let xufton  = "";
   // let asr = props.prayer[0].timings.Fajr;
   //  console.log(props.prayer[props.datee].date.readable);
    // let asrNumber = parseInt(asr.substr(0,2));

    return (
        <div className="prayerTime">
            <Header/>
    {/*<h4 className="text-white">{asrNumber}</h4>*/}
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5 text-center">
                        <h1>Toshkent shahri uchun namoz vaqti</h1>
                        {props.prayer.map((item, index) => {
                            if (props.datee === index) {
                                return (
                                    <p key={index}>{item.date.gregorian.date} - {item.date.gregorian.weekday.en}</p>
                                )
                            }
                        })}
                    </div>

                    <div className="col-12 progg">
                        <div className="proggg d-flex justify-content-center">
                            <SemiCircleProgressBar
                                percentage={87}
                                // color="#24BB77"
                                className=""
                            />
                        </div>
                        <div className="row namozVaqtii text-center">
                            <div className="col-12 text-center w-100">
                                <p className="text-center">Namoz vaqti :</p>
                            </div>
                               <div className="col-6">
                                   <h2>{props.soat}</h2>
                                   <p>Soat</p>
                               </div>
                               <div className="col-6">
                                   <h2>{props.daqiqa}</h2>
                                   <p>Daqiqa</p>
                               </div>

                        </div>
                    </div>

                </div>
                {props.prayer.map((item,index)=>{
                    if (props.datee === index){
                        return(
                            <div className="row mt-5 prayers" key={index}>
                                <div className="col-12 d-flex align-items-center justify-content-center">
                                    <span>{item.date.hijri.day} {item.date.hijri.month.en}, {item.date.hijri.year}</span>
                                </div>
                                <div className="col-2 text-center">
                                    <div className="prayerImgg">
                                        <img src="./images/Vector (14).png"/>
                                    </div>
                                    <h6>Bomdod</h6>
                                    <h5>{item.timings.Fajr}</h5>
                                </div>
                                <div className="col-2 text-center">
                                    <div className="prayerImgg">
                                        {/*<img src="./images/Vector (15).png"/>*/}
                                        <img src="./images/Vector (1).svg"/>
                                    </div>
                                    <h6>Quyosh chiqishi</h6>
                                    <h5>{item.timings.Sunrise}</h5>
                                </div>
                                <div className="col-2 text-center">
                                    <div className="prayerImgg">
                                        <img src="./images/Vector (19).png"/>
                                    </div>
                                    <h6>Peshin</h6>
                                    <h5>{item.timings.Dhuhr}</h5>
                                </div>
                                <div className="col-2 text-center">
                                    <div className="prayerImgg">
                                        <img src="./images/Vector (16).png"/>
                                    </div>
                                    <h6>Asr</h6>
                                    <h5>{item.timings.Asr}</h5>
                                </div>
                                <div className="col-2 text-center">
                                    <div className="prayerImgg">
                                        <img src="./images/Vector (17).png"/>
                                    </div>
                                    <h6>Shom</h6>
                                    <h5>{item.timings.Maghrib}</h5>
                                </div>
                                <div className="col-2 text-center">
                                    <div className="prayerImgg">
                                        <img src="./images/Vector (18).png"/>
                                    </div>
                                    <h6>Xufton</h6>
                                    <h5>{item.timings.Isha}</h5>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        prayer: state.prayer.prayer,
        datee: state.prayer.datee,
        soat: state.prayer.soat,
        daqiqa: state.prayer.daqiqa,
    }
}

export default connect(mapStateToProps, {updatePrayer, getPrayer})(PrayerTime);
