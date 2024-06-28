import { Link } from "react-router-dom";
const RaitingsThird = () => {
	return (
		<div>
			<h1>Рейтинг 3</h1>
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

export default RaitingsThird;
