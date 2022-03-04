import "./App.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import "./App.css";
// import Header ,{Footer} from "./components/Header" /* if two components in a same file*/
// made a new assignment of naveed sarwar import all files below here
// class 01 Imports
// import Image from "./Class1/components/Image";
// import Header from "./Class1/Header/index"
// import FirstSection from "./Class1/firstSection"
// import SecondSection from "./Class1/secondSection"
// import Footer from "./Class1/Section/index"

// Class 02 Imports

import Parent from "../src/Class2/Components/parent"




function App() {
  return (
    <div className="App">
      <Parent></Parent>
    {/* <Image></Image>
      <Header></Header>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <Footer></Footer> */}
    </div>
  );
}

export default App;

// Things to remember while converting your HTML + CSS into React.Js
// import CSS file using > import "path/file.name"
// import your images > import imagename from path
// change your CSS class keyword into ClassName
// every tag should be seld closed
