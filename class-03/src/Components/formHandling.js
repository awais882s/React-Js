import React, { useState } from "react";

// form handling
// data maping
function FormHandling() {
    const [name, setName] = useState("");
    const [password, setpassword] = useState("");
    const [studclass, setClass] = useState("");
    const [batch, setBatch] = useState("");
    const [roll, setRollNo] = useState("");



    // const onChangeHandler = (e) => {
    // }
    const submitHandler = () => {
        // stu onbject
        let student = {
            name: name,
            password: password,
            batch,
            class: studclass,
            roll,
        }
        console.log("students is", student);

    }

    return (
        <div className="App">
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="enter your name" name="name"></input><br />
            <input type="password" placeholder="password" onChange={(e) => setpassword(e.target.value)} /><br />
            <input type="text" placeholder="enter your batch" onChange={(e) => setBatch(e.target.value)} /><br />
            <input type="text" placeholder="enter your class" onChange={(e) => setClass(e.target.value)} /><br />
            <input type="number" placeholder="Enter your Roll No." onChange={(e) => setRollNo(e.target.value)} /><br />
            <button onClick={submitHandler}>Submit Data</button>
            <h1>Name is :{name}</h1>
            <h1>Password is :{password}</h1>
            <h1>Your Batch is :{batch}</h1>
            <h1>Your Class is :{studclass}</h1>
            <h1>Your Roll No is :{roll}</h1>

        </div>
    );
}

export default FormHandling;
