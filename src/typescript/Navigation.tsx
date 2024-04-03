import "@/sass/navigation-style.scss"

type NavProps = {
	pageTitle: string
	loadComponent: (e: any) => void
}

const Navigation = ({ loadComponent, pageTitle }: NavProps) => {
	return (
		<div id="nav-wrapper">
			<header>
				<h1>{pageTitle}</h1>
			</header>
			<nav>
				<button onClick={loadComponent}>Bish Bosh 2.0</button>
				<button onClick={loadComponent}>To Do List</button>
			</nav>
		</div>
	)
}

export default Navigation
