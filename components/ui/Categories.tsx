
type Props = {
  cats: string[]
  inline: boolean
}

const Categories = (props: Props) => {
  const { cats, inline } = props
  return cats ? (
    <div className='not-prose'>
      <ul className={ inline ? 'flex' : ''}>
        { cats.map( cat => <li className='pr-2'>{cat}</li>)}
      </ul>
    </div>
  ): (<></>)
}

export default Categories