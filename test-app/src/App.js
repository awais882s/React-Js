import logo from "./logo.svg";
import "./App.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import "./App.css";
import Image from "./components/Image";
// import Header ,{Footer} from "./components/Header" /* if two components in a same file*/
// made a new assignment of naveed sarwar import all files below here

import Header from "./components/Header/index"
import FirstSection from "./components/firstSection"
import SecondSection from "./components/secondSection"
import Footer from "./components/Section/index"


function App() {
  return (
    <div className="App">
      <Header></Header>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <Footer></Footer>
    </div>
  );
}

export default App;

// Things to remember while converting your HTML + CSS into React.Js
// import CSS file using > import "path/file.name"
// import your images > import imagename from path
// change your CSS class keyword into ClassName
// every tag should be seld closed
