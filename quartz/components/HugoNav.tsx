// @ts-ignore
import darkmodeScript from "./scripts/darkmode.inline"
import darkmodeStyles from "./styles/darkmode.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { i18n } from "../i18n"

const HugoNav: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  return (
    <nav class="nav" aria-label="Site">
      <div class="logo">
        <a href="/">Ben Kolligs</a>
        <div class="logo-switches">
          <button class="darkmode" aria-label={i18n(cfg.locale).components.themeToggle.darkMode}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="nightIcon"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="dayIcon"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>
        </div>
      </div>
      <ul id="menu">
        <li>
          <a href="/projects/"><span>Projects</span></a>
        </li>
        <li>
          <a href="/blog/"><span>Blog</span></a>
        </li>
        <li>
          <a href="/notes/"><span class="active">Notes</span></a>
        </li>
        <li>
          <a href="/about/"><span>About</span></a>
        </li>
      </ul>
    </nav>
  )
}

HugoNav.beforeDOMLoaded = darkmodeScript
HugoNav.css = darkmodeStyles + `
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

body > header.header .logo-switches {
  display: inline-flex;
  margin: auto 4px;
  flex-wrap: inherit;
}

body > header.header .darkmode {
  width: 24px;
  height: 60px;
  position: static;
  margin: 0 4px;
  font: inherit;
}

body > header.header .darkmode svg {
  position: static;
  display: inline;
  width: 24px;
  height: 18px;
  top: auto;
  fill: none;
  stroke: var(--dark);
  vertical-align: -2px;
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
