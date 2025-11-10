import RobotProfileImage from "../assets/robot.png";
import UserProfileImage from "../assets/profile-1.jpg";
import "./ChatMessage.css";
import dayjs from "dayjs";

export function ChatMessage({ message, sender, id }) {
	console.log(UserProfileImage);
  return (
	// Dengan menggunakan div, jadinya seperti buat line baru
	<div className={sender === "robot" ? "robot Chat" : "user Chat"}>
	  {sender === "robot" && <img src={RobotProfileImage} width="50" />}
	  <span className="message-blob">{message}
		{!id && <p className="time">{dayjs().format("HH:mm")}</p>}
	  </span>
	  {sender === "user" && <img src={UserProfileImage} width="50" />}
	</div>
  );
}