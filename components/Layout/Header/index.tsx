import Container from "../Container"
import Link from "next/link"
import useSettings from "@hooks/useSettings"
import CloudImage from "@components/CloudImage"

type Props = {}

const Header = (props: Props) => {
  const settings = useSettings()
  return (
    <header className="py-12">
      <Container>
        <div className="flex justify-between items-center w-full">
          <div className="w-48">
            <Link href="/">
              <a title="Go to the home page">
                { settings.site.logo ? (
                  <CloudImage
                    src={settings.site.logo}
                    width={350}
                    height={200}
                    className="block w-full h-auto"
                    alt={`${settings.site.name} Logo`}
                  />
                ) : null }
                {settings.site.showName ? settings.site.name : null}
              </a>
            </Link>
          </div>
          <div className="col-span-9">
            <Link href="/">
              <a>Home</a>
            </Link>
            {' | '}
            <Link href="/posts">
              <a>Posts</a>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header