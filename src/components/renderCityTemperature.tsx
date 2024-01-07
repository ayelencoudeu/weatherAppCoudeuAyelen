/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
interface WeatherDisplayProps {
  city?: string
  weather?: {
    main: {
      temp: number
      temp_min: number
      temp_max: number
    }
    weather: Array<{
      icon: string
      main: string
      description: string
    }>
  }
}

export const RenderCityTemperature = ({ city, weather }: WeatherDisplayProps) => {
  return (
    <div className="d-flex justify-content-center mt-5 mb-5" >
      <div className="col-md-8 col-lg-6 col-xl-4">
        <div className="card" style={{ borderRadius: '35px' }}>
          <div className="card-body p-4">
            <div className="d-flex">
              <h6 className="flex-grow-1" style={{ color: '#1c469b', fontWeight: 'bold' }}>
                City: {city}
              </h6>
            </div>
            <div className="d-flex flex-column text-center mt-3 mb-4">
              <div className="d-flex align-items-start justify-content-center">
                <h6 className="display-4 mb-0" style={{ color: '#132e64', fontWeight: 'bold' }}>
                  {weather?.main.temp}
                </h6>
                <span style={{ fontSize: '1.2rem' }}>°C</span>
              </div>
              <div>
                <span className="small" style={{ color: '#868B94' }}>
                  {weather?.weather[0].main}
                  <br />
                  {weather?.weather[0].description}
                </span>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="flex-column text-start" style={{ fontSize: '1rem' }}>
                <div>
                  <p className="mb-1" style={{ color: '#3a3a3a', fontWeight: 'bold' }}>
                    Max: {weather?.main.temp_max}°C
                  </p>
                </div>
                <div>
                  <p className="mb-1" style={{ color: '#3a3a3a', fontWeight: 'bold' }}>
                    Min: {weather?.main.temp_min}°C
                  </p>
                </div>
              </div>
              <div>
                <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt='icon'
                  width="100px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
