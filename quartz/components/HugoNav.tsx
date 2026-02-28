import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const HugoNav: QuartzComponent = (_props: QuartzComponentProps) => {
  return (
    <nav class="nav" aria-label="Site">
      <div class="logo">
        <a href="/">Ben Kolligs</a>
      </div>
      <ul id="menu">
        <li>
          <a href="/projects/"><span>Projects</span></a>
        </li>
        <li>
          <a href="/blog/"><span>Blog</span></a>
        </li>
        <li>
          <a href="/notes-kb/"><span class="active">Notes</span></a>
        </li>
        <li>
          <a href="/about/"><span>About</span></a>
        </li>
      </ul>
    </nav>
  )
}

HugoNav.css = `
body > header.header {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 18px;
}

body > header.header .nav {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: calc(1024px + var(--gap) * 2);
  margin-inline-start: auto;
  margin-inline-end: auto;
  line-height: 60px;
}

body > header.header .nav a {
  display: block;
  color: var(--secondary);
}

body > header.header .logo,
body > header.header #menu {
  display: flex;
  margin: auto var(--gap);
}

body > header.header .logo {
  flex-wrap: inherit;
}

body > header.header .logo a {
  font-size: 24px;
  font-weight: 700;
}

body > header.header #menu {
  list-style: none;
  word-break: keep-all;
  overflow-x: auto;
  white-space: nowrap;
  padding: 0;
}

body > header.header #menu li {
  line-height: inherit;
}

body > header.header #menu li + li {
  margin-inline-start: var(--gap);
}

body > header.header #menu a {
  font-size: 16px;
  font-weight: 400;
}

body > header.header #menu a:hover,
body > header.header #menu a:focus-visible,
body > header.header .logo a:hover,
body > header.header .logo a:focus-visible {
  color: var(--dark);
}

body > header.header #menu .active {
  border-bottom: 2px solid currentColor;
}

@media (max-width: 768px) {
  body > header.header {
    --gap: 14px;
  }
}
`

export default (() => HugoNav) satisfies QuartzComponentConstructor
