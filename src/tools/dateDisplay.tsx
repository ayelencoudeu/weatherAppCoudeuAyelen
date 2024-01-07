/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
interface DateDisplayProps {
  dateString: string
}

const DateDisplay = ({ dateString }: DateDisplayProps) => {
  const formatDateString = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: 'numeric'
    }
    const date = new Date(dateString)
    return date.toLocaleDateString(undefined, options)
  }

  return (
      <div>
        <p>{formatDateString(dateString)}</p>
      </div>
  )
}

export default DateDisplay
