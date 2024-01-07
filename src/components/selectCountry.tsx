/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/react-in-jsx-scope */
interface CountrySelectorProps {
  countries: Array<{ cca2: string, name: { common: string } }>
  onCountryChange: (selectedCountry: never) => void
  title: string
}

export const SelectCountry = ({ countries, onCountryChange, title }: CountrySelectorProps) => {
  return (
    <div className="w-50 justify-content-center mt-5 mb-5" >
      <h6 className="text-start" style={{ color: '#fff' }}>{title}</h6>
      <select className="form-select" onChange={onCountryChange}>
        <option value="">Seleccionar Pais</option>
        {
          countries?.map((country) =>
            <option value={country.cca2} key={country.cca2}>{country.name.common}</option>
          )
        }
      </select>
    </div>
  )
}
