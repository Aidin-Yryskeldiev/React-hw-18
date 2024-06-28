import { Link } from "react-router-dom";
const MaterialsThird = () => {
	return (
		<div>
			<h1>Материал 3</h1>
			<header>
				<nav>
					<ul>
						<li>
							<Link to="/materialsThird">Materials</Link>
						</li>
						<li>
							<Link to="/studentsThird">Students</Link>
						</li>
						<li>
							<Link to="/ratingsThird">Ratings</Link>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
};

export default MaterialsThird;
