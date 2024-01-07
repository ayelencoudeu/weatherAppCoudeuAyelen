/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useEffect, useState } from 'react'
import { getCountryAndCity } from '../services/getCountryAndCity'

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
export interface CityInfo {
  id: string
  name: string
}
export interface WeatherInfo {
  weather: Array<{
    id: number
    main: string
    description: string
    icon: string
  }>
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
}
export interface Location {
  latitude: number
  longitude: number
}
export const useGetLocation = () => {
  const [location, setlocation] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      if (navigator.geolocation) {
        try {
          const position = await new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject)
          })

          if (position) {
            const currentLocation: Location = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            }
            const response = await getCountryAndCity(currentLocation)
            setlocation(response.address.county)
          } else {
            console.error('La posición no está disponible.')
          }
        } catch (error) {
          console.error('Error getting location:', error)
        }
      }
    }
    void fetchData()
  }, [])
  useEffect(() => {

  }, [])

  return { location }
}
