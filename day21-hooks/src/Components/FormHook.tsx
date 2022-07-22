import React, {useState} from "react";


const FormHook = () => {
    const [firstName, lastName] = useState('');

    const handleSubit = (e: any) => {
        const value = e.target.value;
        setFirstName(value);
    }

    //add submit form 
    return (
        <div>
            <form onSubmit={handleSubit}>
                <label htmlFor="firstname">first name:</label>
                <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="firstname"
                value={firstName} 
                onChange={handleSubit}
                ></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}


export default FormHook;

function setFirstName(value: any) {
    if (value.length < 6) {
        console.log(value);
    }

}

