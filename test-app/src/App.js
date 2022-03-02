import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
// import Header ,{Footer} from "./components/Header" /* if two components in a same file*/
let test = "somedata";

function App() {
  return (
    <div className="App">
      <h1>React Js starting</h1>
      <p>{test}</p>
      <Header />
      <Header />

      <Header />

      <Header />

      <Footer />
    </div>
  );
}

export default App;

// Things to remember while converting your HTML + CSS into React.Js
// import CSS file using > import "path/file.name"
// import your images > import imagename from path
// change your CSS class keyword into ClassName
// every tag should be seld closed
