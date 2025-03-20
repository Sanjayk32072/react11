export function ThemeChanger() {
	const [theme, setTheme] = useState("light")
 	const toggleTheme = () => {
		setTheme(theme == "light" ? "dark" : "light")
	}
}
