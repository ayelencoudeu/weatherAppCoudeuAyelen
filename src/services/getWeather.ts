/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ajax } from '../tools/ajax'

export const getWeather = async (cityCode: string) => {
  const options = {
    method: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/weather',
    params: {
      q: cityCode ?? 'Buenos Aires',
      appid: 'f8566f641f0eac5880a1581f255344e6',
      units: 'metric'
    }
  }
  return await ajax(options)
}
