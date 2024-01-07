/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type ChangeEvent, useEffect, useState } from 'react'

import { SelectCountry } from './selectCountry'
import { SelectCity } from './selectCity'
import { getCities } from '../services/getCities'
import { getWeather } from '../services/getWeather'

import { useGetForcaste } from '../hooks/useGetForcaste'
import { useGetLocation } from '../hooks/useGetLocation'
import { useGetCountries } from '../hooks/useGetCountries'

import { RenderCityTemperature } from './renderCityTemperature'
import { RenderWeatherForcaset } from './renderWeatherForcaset'
import SpinnerRender from './spinnerRender'

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

export const WeatherApp = () => {
  const { location } = useGetLocation()
  const { countries } = useGetCountries()
  const [cities, setCities] = useState<CityInfo[]>([])
  const [city, setCity] = useState<string>('')
  const renderForecast = useGetForcaste(city)
  const [viewData, setViewData] = useState<boolean>(false)
  const [weather, setWeather] = useState<WeatherInfo>()
  const [ver, setVer] = useState<boolean>(false)

  useEffect(() => {
    if ((location.length > 0) && !ver) {
      setCity(location)
      setVer(true)
    }
    void (async () => {
      const response = await getWeather(city)
      setWeather(response)
      setViewData(true)
    })()
  }, [city, location])

  const handleCountryChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    const citiesResponse = await getCities(e.currentTarget.value)
    const sortedCities = citiesResponse.sort((a: CityInfo, b: CityInfo) => a.name.localeCompare(b.name))
    if ((Boolean(sortedCities)) && sortedCities !== undefined) {
      setCities(sortedCities)
    };
  }
  const handleCityChange = (selectedCity: string) => {
    setCity(selectedCity)
  }
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          {!viewData
            ? (
            <SpinnerRender />
              )
            : (
            <>
              <SelectCountry title='Choose a country' countries={countries} onCountryChange={handleCountryChange} />
              <SelectCity title='Choose a city' cities={cities} onCityChange={handleCityChange} />
              <RenderCityTemperature city={city} weather={weather} />
              <RenderWeatherForcaset forecastData={renderForecast.forecast} />
            </>
              )
          }
        </div>
      </div>
    </section>
  )
}
