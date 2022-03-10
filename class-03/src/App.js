import useState from "react";
const [students, setStudents] = useState([
  {
    name: "awais",
    batch: "Batch-03",
    roll: 5157,
    class: "web and mobile",
  },
  {
    name: "Hamza",
    batch: "Batch-04",
    roll: 5156,
    class: "web and mobile",
  },
  {
    name: "Waqas",
    batch: "Batch-06",
    roll: 5153,
    class: "web and mobile",
  },
  {
    name: "Waqar",
    batch: "Batch-02",
    roll: 5158,
    class: "web and mobile",
  },
]);
// form handling
// data maping

function App() {
  return (
    <div className="App">
      {/* <p>count: {count}</p> */}
      <h3>List of Students</h3>
      <table>
        <tr>
          <th>Student Name:</th>
          <th>Student RollNo:</th>
          <th> Student Class:</th>
          <th>Student Batch:</th>
        </tr>
        <tr>
          <td>AWAIS</td>
          <td>5157</td>
          <td> Saylani</td>
          <td>Batch-03</td>
        </tr>
        <tr>
          <td>AWAIS</td>
          <td>5157</td>
          <td> Saylani</td>
          <td>Batch-03</td>
        </tr>
      </table>
      <hr />
    </div>
  );
}

export default App;
