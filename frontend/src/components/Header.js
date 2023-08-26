import React, { useState } from 'react'
import axios from 'axios'

const Header = () => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log()
        const val = name;
        const formData = {name : val};
        console.log(formData);
        axios.post("http://localhost:8080/", formData) 
            .then((response) => {
                console.log(response);
            })
    }
    const handleChange = (e) => {
        const val = e.target.value;
        setName(val);
    }
  return (
    <div>
        <h1>
            Hello Raj
        </h1>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange}></input>
            <button name="submit">Submit</button>
        </form>
    </div>
  )
}

export default Header