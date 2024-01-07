/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ajax } from '../tools/ajax'

export const getCountries = async () => {
  const options = {
    method: 'GET',
    url: 'https://restcountries.com/v3.1/all'
  }
  return await ajax(options)
}
