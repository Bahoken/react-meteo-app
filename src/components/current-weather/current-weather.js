import './current-weather.css';

const CurrentWeather = ({ data }) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-description">{data.weather[0].description}</p>
                </div>
                <img src={`icons/${data.weather[0].icon}.svg`} alt="weather" className="weather-icon" />
            </div>
            <div className="bottom">
                <span className="temperature">{Math.round(data.main.temp)}°C</span>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label" id="detail">
                            Details
                        </span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">
                            Feels like
                        </span>
                        <div className="parameter-row">
                            <span className="parameter-value">
                                {data.main.feels_like} °C
                            </span>
                        </div>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">
                            Wind
                        </span>
                        <div className="parameter-row">
                            <span className="parameter-value">
                                2 m/s
                            </span>
                        </div>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">
                            Humidity
                        </span>
                        <div className="parameter-row">
                            <span className="parameter-value">
                            {data.main.humidity}%
                            </span>
                        </div>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <div className="parameter-row">
                            <span className="parameter-value">{data.main.pressure}hPa</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;