/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'

interface CitySelectorProps {
  cities: Array<{ id: string, name: string }>
  onCityChange: (city: string) => void
  title: string
}

export const SelectCity = ({ cities, onCityChange, title }: CitySelectorProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCity = e.target.value
    onCityChange(selectedCity)
  }

  return (
    <div className="w-50 justify-content-center mt-5 mb-5" >
      <h6 className="text-start" style={{ color: '#fff' }}>{title}</h6>
      <select className="form-select" onChange={handleChange}>
        <option value="">Seleccionar ciudad</option>
        {
            cities.map((city) =>
                <option value={city.name} key={city.id}>{city.name}</option>
            )
        }
      </select>
    </div>
  )
}
