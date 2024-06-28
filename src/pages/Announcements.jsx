import styled from "styled-components";
const Announcements = () => {
	return (
		<div>
			<TextAnnouncements>Announcements</TextAnnouncements>
		</div>
	);
};

export default Announcements;

const TextAnnouncements = styled.h1`
	position: relative;
	left: 700px;
	font-family: Arial, Helvetica, sans-serif;
`;
