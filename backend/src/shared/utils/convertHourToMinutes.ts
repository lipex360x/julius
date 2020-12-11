interface Request {
  time: string
}

export default function convertHourToMinute ({ time }:Request): number {
  const [hour, minute] = time.split(':').map(Number)

  const timeInMinutes = (hour * 60) + minute

  return timeInMinutes
}
