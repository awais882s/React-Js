import React, { useState } from "react";

// form handling
// data maping

function App() {
  const [students, setStudents] = useState([
    {
      name: "awais",
      batch: "Batch-3",
      rollno: 5157,
      class: "web and mobile"
    },
    {
      name: "Hamza",
      batch: "Batch-5",
      rollno: 5157,
      class: "web and mobile"
    },
    {
      name: "waqas",
      batch: "Batch-3",
      rollno: 5147,
      class: "web and mobile"
    },
  ]);
  console.log("students", students);
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
