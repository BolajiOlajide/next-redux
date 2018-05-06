import Head from './head'
import Link from 'next/link'

const links = [
  { href: '/about', label: 'About' },
  { href: 'https://github.com/BolajiOlajide/next-redux', label: 'Github' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
      </li>
      <ul>
        {links.map(
          ({ key, href, label }) => (
            <li key={key}>
              <Link href={href}>
                <a>{label}</a>
              </Link>
            </li>
          )
        )}
      </ul>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;
        padding: 0;
        height: 100vh;
        width: 100vw;
      }
      nav {
        text-align: center;
        background: #0b0b0b;
      }
      ul {
        display: flex;
        justify-content: space-between;
        padding: 0;
        margin: 0;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: papayawhip;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
)

export default Nav
