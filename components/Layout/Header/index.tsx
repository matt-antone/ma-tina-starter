import Container from "../Container"
import Link from "next/link"

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="py-12">
      <Container>
      <Link href="/">
          <a>Home</a>
        </Link>
        {' | '}
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </Container>
    </header>
  )
}

export default Header