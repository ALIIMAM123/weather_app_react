import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [inputCity, setInputCity] = useState("");

  const apiKey = "38b6f1376544a95a0574c327c6d35ec0";

  const getWeatherDetails = (cityName) => {
    if (!cityName) return;
    const apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    axios
      .get(apiUrl)
      .then((res) => {
        console.log("response", res.data);

        setData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const inputChangeHandler = (event) => {
    console.log(event.target.value);
    setInputCity(event.target.value);
  };

  const handleSearch = () => {
    getWeatherDetails(inputCity);
  };

  // useEffect(() => {
  //   getWeatherDetails("mumbai");
  // }, []);

  return (
    <div className="bg-container">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="heading text-center mt-3">Weather app</h1>
          </div>

          <div className="col-xs-4">
            <label htmlFor="ex3"></label>
            <input
              className="form-control text-center"
              id="ex3"
              type="text"
              placeholder="....Enter City Name  to check Weather.... "
              onChange={inputChangeHandler}
              value={inputCity}
            />
          </div>
          <div className="col-12">
            <button
              className="btn-secondary d-flex justify-content-center align-items-center m-auto mt-3"
              type="button"
              onClick={handleSearch}
            >
              Click Here
            </button>
          </div>
          {Object.keys(data).length > 0 && (
            <div className="col-12 weather-container d-flex m-auto mt-5">
              <div className=" weatherResultBox text-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKE-me4dB9PCRxWBfKtaqFF58vmrHsCrLAbQ&usqp=CAU"
                  className="weather-image" alt = "image-1"
                />
                <h5 className="city-name mt-3">{data?.name}</h5>
                <h6 className="temp">
                  {(data?.main?.temp - 273.15).toFixed(2)} °C
                </h6>
                {/* min temp */}

                <div className="temp-details">
                  <div className="container bg-container-2">
                    <div className= "row">
                    <div className="col-6 col-md-2  text-color"  >
                      <h7 className="country">
                        {" "}
                        Country : {data?.sys?.country}
                      </h7>
                    </div>
                    <div className="col-6 col-md-2 text-color">
                      <h7 className="country">
                        {" "}
                        <h8 className = "min-temp"> Min Temp : {} {( (data?.main?.temp_min -273.15).toFixed(2))}</h8>
                      </h7>
                    </div>
                    <div className="col-6 col-md-2 text-color">
                      <h7 className="country">
                        {" "}
                        <h8 className = "min-temp"> Max Temp : {} {( (data?.main?.temp_max -273.15).toFixed(2))}</h8>
                      </h7>
                    </div>
                    <div className="col-6 col-md-2 text-color">
                      <h7 className="humidity">
                        {" "}
                        <h8 className = "min-temp"> Humidity : {} {( (data?.main?.humidity).toFixed(2))}</h8>
                      </h7>
                    </div>
                    <div className="col-6 col-md-2 text-color">
                      <h7 className="humidity">
                        {" "}
                        <h8 className = "min-temp"> Pressure : {} {( (data?.main?.pressure).toFixed(2))}</h8>
                      </h7>
                    </div>
                    <div className="col-6 col-md-2 text-color">
                      <h7 className="humidity">
                        {" "}
                        <h8 className = "min-temp"> Wind Speed : {} {( (data?.wind?.speed))} , {( (data?.wind?.deg)) }deg</h8>
                      </h7>
                    </div>
                    </div>
                  </div>
                </div>
            
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
