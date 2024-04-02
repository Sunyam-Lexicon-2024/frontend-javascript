import "@/sass/footer-style.scss"

export default function Footer() {
	function setYear() {
		return new Date().getFullYear().toString()
	}
	return (
		<footer>
			<span> Designed by <a href="https://github.com/suny-am">suny-am</a> {setYear()}</span>
		</footer>
	)
}
