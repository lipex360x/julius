import { parseISO, format } from 'date-fns'

export default function (dateTime) {
  // if(typeof dateTime === 'string') {
  //   const [,minute] = dateTime.split(' ')

  //   if(!minute) dateTime = dateTime + " 00:00:00"
  // }

  // const date = new Date(dateTime)
  const parsedDate = parseISO(dateTime)

  const formattedDate = format(parsedDate, 'dd/MM/yyyy')

  return formattedDate
}