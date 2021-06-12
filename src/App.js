import "./App.css";
import "./App.scss";
import MyImage from "./assets/images/my-image.jpg";

const App = () => (
  <>
    <h1>Hello React!</h1>
    <p>
      Lorem <strong className="algo">ipsum dolor</strong> sit amet consectetur
      adipisicing elit. Ea, nulla.
    </p>
    <img src={MyImage} alt="" />
  </>
);

export default App;
