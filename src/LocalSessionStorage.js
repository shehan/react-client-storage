import {useState} from "react";


function LocalSessionStorage() {
    const [name, setName] = useState("");
    const [dob, setDOB] = useState("");


    const saveButtonHandler = () => {
        localStorage.setItem("name", JSON.stringify(name));
        localStorage.setItem("dob", JSON.stringify(dob));

        sessionStorage.setItem("name", JSON.stringify(name));
        sessionStorage.setItem("dob", JSON.stringify(dob));
    }

    const readButtonHandler = () => {
        let name_value = localStorage.getItem("name");
        let dob_value = localStorage.getItem("dob");
        alert('LocalStorage: name:' + name_value + ' dob:' + dob_value)

        name_value = sessionStorage.getItem("name");
        dob_value = sessionStorage.getItem("dob");
        alert('SessionStorage: name:' + name_value + ' dob:' + dob_value)
    }

    const clearButtonHandler = () => {
        localStorage.clear()
        sessionStorage.clear()

        readButtonHandler()
    }

    const checkButtonHandler = () => {
        if (localStorage.length === 0)
            alert('Local Storage Empty')
        else
            alert('Local Storage Contains: '+localStorage.length+ ' Items')
        console.log(localStorage)

        if (sessionStorage.length === 0)
            alert('Session Storage Empty')
        else
            alert('Session Storage Contains: '+sessionStorage.length+ ' Items')
        console.log(sessionStorage)

    }

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
            />

            <input
                type="date"
                value={dob}
                onChange={(e) => setDOB(e.target.value)}
            />

            <button type="button" onClick={saveButtonHandler}>Save</button>
            <button type="button" onClick={readButtonHandler}>Read</button>
            <button type="button" onClick={clearButtonHandler}>Clear</button>
            <button type="button" onClick={checkButtonHandler}>Check</button>
        </div>
    );
}

export default LocalSessionStorage;