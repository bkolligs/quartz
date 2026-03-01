const STORAGE_KEYS = {
  shared: "pref-theme",
  legacy: "theme",
} as const

const userPref = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"

const getStoredTheme = (): "light" | "dark" | null => {
  const sharedTheme = localStorage.getItem(STORAGE_KEYS.shared)
  if (sharedTheme === "light" || sharedTheme === "dark") return sharedTheme

  const legacyTheme = localStorage.getItem(STORAGE_KEYS.legacy)
  if (legacyTheme === "light" || legacyTheme === "dark") {
    localStorage.setItem(STORAGE_KEYS.shared, legacyTheme)
    return legacyTheme
  }

  return null
}

const setStoredTheme = (theme: "light" | "dark") => {
  // Shared key used by Hugo PaperMod pages.
  localStorage.setItem(STORAGE_KEYS.shared, theme)
  // Backward compatibility for existing Quartz-only key.
  localStorage.setItem(STORAGE_KEYS.legacy, theme)
}

const currentTheme = getStoredTheme() ?? userPref
document.documentElement.setAttribute("saved-theme", currentTheme)
setStoredTheme(currentTheme)

const emitThemeChangeEvent = (theme: "light" | "dark") => {
  const event: CustomEventMap["themechange"] = new CustomEvent("themechange", {
    detail: { theme },
  })
  document.dispatchEvent(event)
}

document.addEventListener("nav", () => {
  const switchTheme = () => {
    const newTheme =
      document.documentElement.getAttribute("saved-theme") === "dark" ? "light" : "dark"
    document.documentElement.setAttribute("saved-theme", newTheme)
    setStoredTheme(newTheme)
    emitThemeChangeEvent(newTheme)
  }

  const themeChange = (e: MediaQueryListEvent) => {
    const newTheme = e.matches ? "dark" : "light"
    document.documentElement.setAttribute("saved-theme", newTheme)
    setStoredTheme(newTheme)
    emitThemeChangeEvent(newTheme)
  }

  for (const darkmodeButton of document.getElementsByClassName("darkmode")) {
    darkmodeButton.addEventListener("click", switchTheme)
    window.addCleanup(() => darkmodeButton.removeEventListener("click", switchTheme))
  }

  // Listen for changes in prefers-color-scheme
  const colorSchemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
  colorSchemeMediaQuery.addEventListener("change", themeChange)
  window.addCleanup(() => colorSchemeMediaQuery.removeEventListener("change", themeChange))
})
