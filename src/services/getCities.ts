/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ajax } from '../tools/ajax'

export const getCities = async (countryCode: string) => {
  const options = {
    method: 'GET',
    url: 'https://spott.p.rapidapi.com/places',
    headers: {
      'X-RapidAPI-Key': '70084f0026mshccb25ae3df469ffp1e4e6ajsnb74c3d32186a',
      'X-RapidAPI-Host': 'spott.p.rapidapi.com'
    },
    params: {
      limit: 100,
      type: 'CITY',
      country: countryCode ?? 'BA'
    }
  }

  return await ajax(options)
}
