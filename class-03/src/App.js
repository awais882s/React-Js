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
          <th>No.</th>
          <th>Student Name:</th>
          <th>Student RollNo:</th>
          <th> Student Class:</th>
          <th>Student Batch:</th>
        </tr>
        {
          students.map((students, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{students.name}</td>
                <td>{students.batch}</td>
                <td> {students.rollno}</td>
                <td>{students.class}</td>
              </tr>
            )


          })
        }

      </table>
      <hr />
    </div>
  );
}

export default App;
