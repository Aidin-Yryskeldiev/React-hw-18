import { Link } from "react-router-dom";
import styled from "styled-components";
const Courses = () => {
	return (
		<div>
			<Papa>
				<Link to="/MaterialsFirst">
					<Syn>
						<Photo
							src="https://peaksoft-lms-bucket-production.s3.eu-central-1.amazonaws.com/jpg/1712385193781Why-Use-React.jpg"
							alt="React"
						/>
						<Title>
							React - 13 <Date>2024-04-06</Date>
						</Title>
						<Text>React</Text>
					</Syn>
				</Link>
				<Link to="/MaterialsSecond">
					<Syn>
						<Photo
							src="https://peaksoft-lms-bucket-production.s3.eu-central-1.amazonaws.com/png/1704799142400image%20(1).png"
							alt="English"
						/>
						<Title>
							English... <Date>2024-01-09</Date>
						</Title>
						<Text>Let's learn English toghether, JS-13!</Text>
					</Syn>
				</Link>
				<Link to="/MaterialsThird">
					<Syn>
						<Photo
							src="https://peaksoft-lms-bucket-production.s3.eu-central-1.amazonaws.com/jpg/17045291625260bf15302e01be109614a7c5c1c5d652b.jpg"
							alt="JavaScript"
						/>
						<Title>
							JS-13 <Date>2024-01-06</Date>
						</Title>
						<Text>
							HTML, CSS and JavaScript - First <br /> stage
						</Text>
					</Syn>
				</Link>
			</Papa>
			<MyCourse>Мои курсы</MyCourse>
			<FlexText>
				<p>Перейти на страницу</p>
				<Inputs type="number" />
			</FlexText>
			<FlexBoxs>
				<TextColors>&#10096;</TextColors>
				<InputSecond type="number" />
				<TextColors>&#10097;</TextColors>
			</FlexBoxs>
			<InputText>
				<p>Показать</p>
				<Inputss type="number" />
				<p>из</p>
			</InputText>
		</div>
	);
};

export default Courses;

const Papa = styled.div`
	display: flex;
	/* justify-content: center; */
	gap: 30px;
`;

const Syn = styled.div`
	width: 300px;
	height: 320px;
	background-color: white;
	border-radius: 5px;
	position: relative;
	top: -90px;
	left: 260px;
`;

const Photo = styled.img`
	width: 270px;
	height: 150px;
	border-radius: 5px;
	position: relative;
	top: 15px;
	left: 15px;
`;

const Title = styled.h2`
	position: relative;
	top: 35px;
	left: 20px;
	color: black;
	font-family: Arial, Helvetica, sans-serif;
`;

const Date = styled.span`
	position: relative;
	left: 70px;
	font-size: 15px;
	color: grey;
`;

const Text = styled.p`
	color: grey;
	font-family: Arial, Helvetica, sans-serif;
	position: relative;
	top: 55px;
	left: 20px;
`;

const MyCourse = styled.h1`
	position: relative;
	top: -480px;
	left: 262px;
	font-family: Arial, Helvetica, sans-serif;
`;

const FlexText = styled.div`
	display: flex;
	gap: 10px;
	position: relative;
	top: 50px;
	left: 270px;
	font-family: Arial, Helvetica, sans-serif;
`;

const Inputs = styled.input`
	width: 30px;
`;

const InputSecond = styled.input`
	width: 40px;
	height: 20px;
`;

const FlexBoxs = styled.div`
	display: flex;
	gap: 10px;
	position: relative;
	top: 30px;
	left: 870px;
`;

const TextColors = styled.p`
	color: grey;
`;

const InputText = styled.div`
	display: flex;
	gap: 10px;
	margin-top: 10px;
	margin-left: 1340px;
	font-family: Arial, Helvetica, sans-serif;
`;

const Inputss = styled.input`
	width: 40px;
	height: 20px;
`;
