import { useContext } from "react";
import UserContext from "../utils/UserContext";

const About = () => {
  const data = useContext(UserContext);
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <section>
        <h1 className="text-blue-400 text-3xl">Tasty Food App</h1>
        <ul className="list-disc">
          <li>This app uses Swiggy Live API</li>
          <li>
            Its in Indian API so please search for City, steet or area in India
            (Example: Delhi, Mumbai, Banglore)
          </li>
          <li>
            Address search is enabled with{" "}
            <span className="font-semibold">debouncing and throttling.</span>
          </li>
          <li>
            Cart Feature is enabled with{" "}
            <span className="font-semibold">Redux Toolkit</span>
          </li>
          <li>
            It performs{" "}
            <span className="font-semibold">
              Treeshaking, Image Optimization, Code bundling, Code Splitting,
              Lazy Loading
            </span>{" "}
            under the hood
          </li>
          <li>
            <span className="font-semibold">Disclaimer:</span>
            <small>
              The restaurant show API can be a little slow sometimes, because
              its an Indian API and its service in North America is not good.
            </small>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
