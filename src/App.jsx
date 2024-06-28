import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Courses from "./pages/Courses";
import Announcements from "./pages/Announcements";
import Notifications from "./pages/Notifications";
import Schedule from "./pages/Schedule";
import MaterialsFirst from "./pages/MaterialsFirst";
import MaterialsSecond from "./pages/MaterialsSecond";
import MaterialsThird from "./pages/MaterialsThird";
import StudentsFirst from "./pages/StudentsFirst";
import StudentsSecond from "./pages/StudentsSecond";
import StudentsThird from "./pages/StudentsThird";
import RatingsFirst from "./pages/RatingsFirst";
import RaitingsSecond from "./pages/RaitingsSecond";
import RaitingsThird from "./pages/RaitingsThird";

const App = () => {
	return (
		<div>
			<Backround>
				<TextPeakSoft>
					PEAKSOFT <SpanText>&bull;</SpanText>
				</TextPeakSoft>
				<Router>
					<Header />
					<Sidebar />
					<Routes>
						<Route path="/" element={<Courses />} />
						<Route path="/Announcements" element={<Announcements />} />
						<Route path="/Notifications" element={<Notifications />} />
						<Route path="/Schedule" element={<Schedule />} />
						<Route path="/materialsFirst" element={<MaterialsFirst />} />
						<Route path="/materialsSecond" element={<MaterialsSecond />} />
						<Route path="/materialsThird" element={<MaterialsThird />} />
						<Route path="/studentsFirst" element={<StudentsFirst />} />
						<Route path="/studentsSecond" element={<StudentsSecond />} />
						<Route path="/studentsThird" element={<StudentsThird />} />
						<Route path="/ratingsFirst" element={<RatingsFirst />} />
						<Route path="/ratingsSecond" element={<RaitingsSecond />} />
						<Route path="/ratingsThird" element={<RaitingsThird />} />
					</Routes>
				</Router>
			</Backround>
		</div>
	);
};

export default App;

const Backround = styled.div`
	width: 240px;
	height: 729px;
	background-color: white;
`;

const TextPeakSoft = styled.h2`
	position: relative;
	top: 30px;
	left: 50px;
	color: #1f6ed4;
	font-family: Arial, Helvetica, sans-serif;
`;

const SpanText = styled.span`
	color: red;
	font-size: 40px;
	position: relative;
	top: -15px;
`;
