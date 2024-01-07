/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useEffect, useState } from 'react'
import { getForecaste } from '../services/getForcaste'
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
export const useGetForcaste = (city: string) => {
  const [forecast, setForecaste] = useState<ForecastData[]>()
  useEffect(() => {
    void (async () => {
      const response = await getForecaste(city)
      const next5DaysForecast = response.list.filter((data: ForecastData) =>
        data.dt_txt.includes('00:00:00')
      )
      setForecaste(next5DaysForecast)
    })()
  }, [city])

  return { forecast }
}
