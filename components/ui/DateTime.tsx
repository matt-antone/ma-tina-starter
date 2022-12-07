import { format, formatDistance, formatRelative, subDays } from 'date-fns'

type Props = {
  dateString: string
}


const DateTime = (props: Props) => {
  const isValidDate = (d) => {
    console.log("d",d)
    return d instanceof Date && !isNaN(Number(d));
  }

  const { dateString } = props
  const date = dateString ? new Date(dateString) : new Date();

  return isValidDate(date) ? (
    <div>{ format(date,  'MMMM dd, yyyy') }</div>
  ) : null
}

export default DateTime