import { Link } from "react-router-dom";
import styled from "styled-components";
const MaterialsFirst = () => {
	return (
		<div>
			<Text>Материал 1</Text>
			<header>
				<nav>
					<FlexBox>
						<StyleTextLink to="/materialsFirst">Materials</StyleTextLink>
						<StyleTextLink to="/studentsFirst">Students</StyleTextLink>
						<StyleTextLink to="/ratingsFirst">Ratings</StyleTextLink>
					</FlexBox>
				</nav>
			</header>
		</div>
	);
};

export default MaterialsFirst;

const FlexBox = styled.div`
	display: flex;
	gap: 30px;
	position: relative;
	top: -280px;
	left: 280px;
	color: #3386d6;
`;

const StyleTextLink = styled(Link)`
	color: #3386d6;
	font-size: 20px;
	font-family: Arial, Helvetica, sans-serif;
`;

const Text = styled.h1`
	position: relative;
	left: 700px;
	font-family: Arial, Helvetica, sans-serif;
`;
