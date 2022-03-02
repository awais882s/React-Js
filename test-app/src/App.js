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
