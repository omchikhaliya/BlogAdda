import React, { useReducer } from 'react';
import axios from 'axios'

const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

function Header() {
    const [formData, setFormData] = useReducer(formReducer, {});    

    const handleSubmit = event => {
        event.preventDefault();
        
        axios.post("http://localhost:8080/", formData)
            .then((response) => {
                console.log(response);
        })
    }

    return (
        <div className="wrapper">
            <h1>How About Them Apples</h1>
    
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>Full Name</label>
                    <input name="fullname" type="text" onChange={setFormData}></input>

                    <label>Email</label>
                    <input name="email" type="email" onChange={setFormData}></input>

                    <label>password</label>
                    <input name="pwd" type="password" onChange={setFormData}></input>

                    <label>Confirm Password</label>
                    <input name="conpwd" type="password" onChange={setFormData}></input>

                    <label>Profile Picture</label>
                    <input name="profilepic" type="file" onChange={setFormData}></input>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Header;