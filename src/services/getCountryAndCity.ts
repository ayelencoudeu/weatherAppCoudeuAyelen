/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ajax } from '../tools/ajax'
interface Location {
  latitude: number
  longitude: number
}

export const getCountryAndCity = async (location: Location) => {
  const options = {
    method: 'GET',
    url: 'https://nominatim.openstreetmap.org/reverse',
    params: {
      format: 'json',
      lat: location.latitude,
      lon: location.longitude
    }
  }
  return await ajax(options)
}
