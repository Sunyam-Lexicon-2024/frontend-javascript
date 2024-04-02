import "@/sass/footer-style.scss"

export default function Footer() {
	function setYear() {
		return new Date().getFullYear().toString()
	}
	return (
		<footer>
			Designed by suny-am <span>{setYear()}</span>
		</footer>
	)
}
