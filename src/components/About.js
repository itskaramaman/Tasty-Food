import { useContext } from "react";
import UserContext from "../utils/UserContext";
import Popup from "./Popup";
const About = () => {
  const data = useContext(UserContext);
  return (
    <div>
      <h1>About</h1>
      <p>This is Namaste React webseries.</p>
      <small>{data.loggedInUser}</small>
      <Popup />
    </div>
  );
};

export default About;
