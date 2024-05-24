import { useEffect, useState } from "react";
import axios from "axios";

export default function Form({setInfo, setState}){
    const [city, setCity] = useState("");
    
    const handleChange = async () => {
        const api = "9d1ac5812be0cacc2f09b5e1a51d9fa1";
        const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=tr`;
        await axios(baseUrl).then(res => setInfo(res.data));
        setState(true);
    }


    return(
        <div>
            <h1>Hava Durumu</h1>
            <form onSubmit={(e) =>{e.preventDefault(); handleChange()}}>
                <div className="form">
                    <input value={city} onChange={(e) => setCity(e.target.value)} className="inputText" type="text" placeholder="Şehri Giriniz"/>
                </div>
                <div className="btnDiv">
                    <button type="submit" className="btn">verileri getir</button>
                </div>
            </form>
        </div>
    )
}