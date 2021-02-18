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
            <div className="main ">
                <div className="sub-main">
                    <div className="container">
                        <div className="input">
                            <input type="text"  onChange={(event) => {setSearch(event.target.value)}} className="form-control my-3" placeholder="Enter City to search"/>
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
                                    <div className="temp font-mono lg:text-xl md:text-sm md:max-w-xl">
                                        <h2 className="py-1"><span className="lg:text-3xl font-semibold text-gray-400	">City Name:</span> <span className="font-sans lg:text-3xl">{search}</span></h2>
                                        <h3 className="py-1"><span className="lg:text-3xl md:leading-3 font-semibold text-gray-400">Current Temp:</span> <span className="lg:text-3xl font-sans">{((city.temp) -273.1).toPrecision(4)} °C</span>
                                            
                                        </h3>
                                        <h3 className="py-1"><span className="lg:text-3xl font-semibold text-gray-400">Humidity:</span> <span className="lg:text-2xl font-sans">{city.humidity}</span></h3>
                                        <h4 className="py-1"><span className="lg:text-2xl font-mono font-semibold text-gray-400">Max Temp.:</span> {(city.temp_max - 273.1).toPrecision(4)} °C   <span className="text-gray-400 lg:text-2xl font-mono font-semibold">Max Temp.:</span> {(city.temp_min - 273.1).toPrecision(4)} °C </h4>
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