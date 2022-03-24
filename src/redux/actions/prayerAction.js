import {PRAYER_TYPE} from "../types/prayerType";
import axios from "axios";
import {API_PATH} from "../../tools/constants";

export function updatePrayer(data) {
    return {
        type: PRAYER_TYPE,
        payload: data
    }
}


export const getPrayer = () => (dispatch) => {
    axios.get(API_PATH)
        .then((res) => {
            // console.log(res)
            dispatch(updatePrayer({prayer: res.data.data}));
        })
}
export const getWeather = () => (dispatch) =>{
    axios.get("https://api.openweathermap.org/data/2.5/weather?q=tashkent&appid=f00bcd94f6285c257d672c9b844280f6")
        .then((res)=>{
            console.log(res)
            dispatch(updatePrayer({weather: res.data.weather}));
        })
}
