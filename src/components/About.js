import { useContext } from "react";
import UserContext from "../utils/UserContext";

const About = () => {
  const data = useContext(UserContext);
  return (
    <div>
      <h1>About</h1>
      <p>This is Namaste React webseries.</p>
      <small>{data.loggedInUser}</small>
    </div>
  );
};

export default About;
