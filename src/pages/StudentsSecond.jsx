import { Link } from "react-router-dom";
const StudentsSecond = () => {
	return (
		<div>
			<h1>Студент 2</h1>
			<header>
				<nav>
					<ul>
						<li>
							<Link to="/materialsSecond">Materials</Link>
						</li>
						<li>
							<Link to="/studentsSecond">Students</Link>
						</li>
						<li>
							<Link to="/ratingsSecond">Ratings</Link>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
};

export default StudentsSecond;
