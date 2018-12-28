import React from 'react'
import stylus from 'stylus-in-react'


const register = (props) => {
    let {handleChange} = props
    return(
        <>
        <p>register component</p>
        <section id="register-modal">
            <input placeholder="name" name="name" onChange={handleChange}></input>
            <input placeholder="username" name="username" onChange={handleChange}></input>
            <input placeholder="password" type="password" name="password" onChange={handleChange}></input>
            <input placeholder="email" name="email" onChange={handleChange}></input>
            
        </section>
        </>
    )
}

export default register