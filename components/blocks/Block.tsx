import themes from "./_block-themes"
import { Container } from "@components/layout/Container"
import { Section } from "@components/layout/Section"

type Props = {
  data
  parentField?
  children
}

const Block = (props: Props) => {
  const { data, parentField, children } = props
  //console.log(data)
  return (
    <Section 
      className={`${themes[data.theme]?.section} ${data.paddingTopOff ? 'pb-12' : 'py-12'}`}
    >
      <Container
        data-tinafield={`${parentField}.body`}
      >
        { children }
      </Container>
    </Section>
  )
}

export default Block