import React, { useReducer, useState } from 'react';
import axios from 'axios'

const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

function RegistrationForm() {
    const [formData, setFormData] = useReducer(formReducer, {});    
    const [mes, setMes] = useState('');
    const handleSubmit = event => {
        event.preventDefault();
        console.log(formData);
        axios.post("http://localhost:8080/registration", formData)
            .then((response) => {
                console.log(response.data.mes);
                setMes(response.data.mes);
        })
    }

    return (
        <div className="wrapper">
            <h1>SignUp</h1>
    
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label>Full Name: </label>
                        <input name="fullname" type="text" onChange={setFormData} required></input>
                    </div>
                    <div>
                        <label>Email: </label>
                        <input name="email" type="email" onChange={setFormData} required></input>
                    </div>
                    <div>
                        <label>password: </label>
                        <input name="pwd" type="password" onChange={setFormData} required></input>
                    </div>
                    <div>
                        <label>Confirm Password: </label>
                        <input name="conpwd" type="password" onChange={setFormData} required></input>
                    </div>
                    <div>
                        <label>Profile Picture: </label>
                        <input name="profilepic" type="file" onChange={setFormData} required></input>
                    </div>
                </fieldset>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>

            {mes && <h3>{mes}</h3>}
        </div>
    )
}

export default RegistrationForm;