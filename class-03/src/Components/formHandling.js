import React, { useState } from "react";

// form handling
// data maping
function FormHandling() {
    const [name, setName] = useState("");
    const onChangeHandler = (e) => {


    }

    return (
        <div className="App">
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="enter your name" name="name"></input>
            <p>Name is :{name}</p>

        </div>
    );
}

export default FormHandling;
