import Link from 'next/Link'
export default function Header() {
  return (
    <header className="site-container py-5">
      <nav className="space-x-4">
        <Link href="/">
          <a>Hakkımda</a>
        </Link>
        <Link href="/blog">
          <a>Yazılar</a>
        </Link>
      </nav>
    </header>
  )
}
