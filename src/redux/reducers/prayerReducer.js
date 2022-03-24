import {PRAYER_TYPE} from "../types/prayerType";
import {useState} from "react";


// this.state = {
//     currentTime: time
// }

let today = new Date(),
    //     date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    //     time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    time = today.getHours(),
    minutes = today.getMinutes(),
    date = today.getDate()

const initialState = {
    prayer: [],
    weather : [],
    datee: date - 1,
    soat: time,
    daqiqa: minutes
}


export const prayerReducer = (state = initialState, action) => {
    if (action.types = PRAYER_TYPE) {
        return {
            ...state,
            ...action.payload
        }
    }
    return state
}
