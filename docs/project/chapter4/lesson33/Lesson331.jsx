import React, { useState } from "react";

const Lesson331 = (props) => {
    const [person, setPerson] = useState(
        {
            username: '',
            email: 'Hỏi Dân IT',
            password: ''
        }

    )

    const [person1, setPerson1] = useState({
        username: '',
        email: 'Hỏi Dân IT',
        password: '',
        address: {
            province: 'Ha Noi',
            country: 'Viet Nam'
        }
    })

    const handleOnChangeUsername = (event) => {
        // person.username = event.target.value;
        //not merge
        setPerson({ username: event.target.value })
    }

    const handleSubmit = () => {
        console.log(">>> check data person: ", person)
    }

    const handleChangeInput = (event) => {
        //one event handler for all (using name attribute)
    }
    return (
        <div>
            <div className='input-group'>
                <label>Username</label>
                <input
                    type={'text'}
                    value={person.username}
                    onChange={(event) => handleOnChangeUsername(event)}
                />
            </div>
            <div className='input-group'>
                <label>Email</label>
                <input
                    type={'email'}
                    value={person.email}
                />
            </div>
            <div className='input-group'>
                <label>Password</label>
                <input type={'password'} value={person.password} />
            </div>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Lesson331;