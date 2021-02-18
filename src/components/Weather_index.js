import react, {useState, useEffect} from 'react'
import '../static/css/style.css'
import {TextField} from '@material-ui/core'


function Weather_index(){
    const[city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect( () => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=7e39b19a3c2b13a6216d184de655eae0`
            const response = await fetch(url);
            const json_response = await response.json();
            console.log(json_response.main);
            setCity(json_response.main);
        };
        fetchApi();
    }, [search] )

    return(
        <>
            <div className="main">
                <div className="sub-main">
                    <div className="container">
                        <div className="input">
                            <input type="text"  onChange={(event) => {setSearch(event.target.value)}} className="form-input my-3" placeholder="Enter City to search"/>
                        </div>
                    </div>
                    {
                        !city ? (
                            <p>Data not found</p>
                        ) : (
                            <div>
                                <div className="info">
                                    <div className="place">
                                    </div>
                                    <div className="temp">
                                        <h2>City Name : {search}</h2>
                                        <h3>Current Temp : {city.temp}</h3>
                                        <h3>Humidity : {city.humidity}</h3>
                                        <h4>Max Temp. : {city.temp_max} Min Temp : {city.temp_min} </h4>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Weather_index;