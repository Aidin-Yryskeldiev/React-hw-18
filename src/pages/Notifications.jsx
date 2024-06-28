import styled from "styled-components";
const Notifications = () => {
	return (
		<div>
			<TextNotifications>Notifications</TextNotifications>
		</div>
	);
};

export default Notifications;

const TextNotifications = styled.h1`
	position: relative;
	left: 700px;
	font-family: Arial, Helvetica, sans-serif;
`;
