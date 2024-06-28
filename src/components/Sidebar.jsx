import { Link } from "react-router-dom";
import styled from "styled-components";

const Sidebar = () => {
	return (
		<div>
			<nav>
				<FlexBox>
					<StyledTextLink to="/">Courses</StyledTextLink>
					<StyledTextLink to="/Announcements">Announcements</StyledTextLink>
					<StyledTextLink to="/Notifications">Notifications</StyledTextLink>
					<StyledTextLink to="/Schedule">Schedule</StyledTextLink>
				</FlexBox>
			</nav>
		</div>
	);
};

export default Sidebar;

const FlexBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
`;

const StyledTextLink = styled(Link)`
	color: black;
	font-size: 20px;
	font-family: Arial, Helvetica, sans-serif;
	text-decoration: none;
	position: relative;
	top: 100px;
	left: 50px;
`;
