import styled from "styled-components";

const Header = () => {
	return (
		<div>
			<header>
				<FlexBox>
					<h1>&#127760;</h1>
					<h1>&#128362;</h1>
					<h1>&#128522;</h1>
					<Text>Студент</Text>
				</FlexBox>
			</header>
			<Line></Line>
		</div>
	);
};

export default Header;

const FlexBox = styled.div`
	display: flex;
	gap: 30px;
	position: relative;
	top: -30px;
	left: 1250px;
	cursor: pointer;
`;

const Text = styled.p`
	position: relative;
	top: 15px;
	right: 10px;
	font-size: 20px;
	font-family: Arial, Helvetica, sans-serif;
`;

const Line = styled.div`
	width: 172vh;
	height: 1px;
	background-color: grey;
	position: relative;
	top: -20px;
	left: 260px;
`;
