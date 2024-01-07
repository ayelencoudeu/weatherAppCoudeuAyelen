/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useEffect, useState } from 'react'
import { getCountries } from '../services/getCountries'

interface RenderWeatherProps {
  countries: Array<{ cca2: string, name: { common: string } }>
  cities?: Array<{ id: string, name: string }>
  cityHandler: (selectedCountry: never) => void
  titleCountry: string
  titleCity: string
  viewData: boolean
  city: string
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
export interface CountryInfo {

  name: {
    common: string
    official: string
    nativeName: {
      eng: {
        official: string
        common: string
      }
    }
  }
  cca2: string

}
export const useGetCountries = () => {
  const [countries, setCountries] = useState<RenderWeatherProps['countries']>([])
  useEffect(() => {
    void (async () => {
      const countriesResponse = await getCountries()
      const sortedCountries = countriesResponse.sort((a: CountryInfo, b: CountryInfo) => a.name.common.localeCompare(b.name.common))
      setCountries(sortedCountries)
    })()
  }, [])
  return {
    countries
  }
}
