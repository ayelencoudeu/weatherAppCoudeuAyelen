/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import DateDisplay from '../tools/dateDisplay'

interface ForecastData {
  dt_txt: string
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

interface WeatherForecastListProps {
  forecastData: ForecastData[] | undefined
}

export const RenderWeatherForcaset = ({ forecastData }: WeatherForecastListProps) => {
  return (
    <div className="d-flex justify-content-between col-12 mt-2 mb-5">
      {(forecastData != null)
        ? (
            forecastData.map(forecastItem => (
            <div className="card" style={{ borderRadius: '35px' }} key={forecastItem.dt_txt}>
              <div className="card-body p-4">
                <div key={forecastItem.dt_txt}>
                  <DateDisplay dateString={forecastItem.dt_txt} />
                  <p>Temperatura: {forecastItem.main.temp}</p>
                  <p>Min: {forecastItem.main.temp_min}°C</p>
                  <p>Max: {forecastItem.main.temp_max}°C</p>
                  <p>{forecastItem?.weather[0].main}</p>
                </div>
              </div>
            </div>
            ))
          )
        : (
          <p>No hay datos de pronóstico disponibles</p>
          )}
    </div>
  )
}
