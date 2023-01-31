import React, { useState } from "react";

const Lesson331 = (props) => {
    // const [person, setPerson] = useState(
    //     {
    //         username: '',
    //         email: 'Hỏi Dân IT',
    //         password: ''
    //     }

    // );

    const [person, setPerson] = useState({
        username: '',
        email: 'Hỏi Dân IT',
        password: '',
        address: {
            province: 'Ha Noi',
            country: 'Viet Nam'
        }
    });

    const handleOnChangeCountry = (event) => {
        setPerson({
            ...person,
            address: {
                ...person.address,
                country: event.target.value
            }
        });
    };

    const handleSubmit = () => {
        console.log(">>> check data person: ", person);
    };

    const handleChangeInput = (event) => {
        //one event handler for all (using name attribute)
        setPerson({
            ...person,
            [event.target.value]: event.target.value
        });
    };
    return (
        <div>
            <div className='input-group'>
                <label>Country</label>
                <input
                    type={'text'}
                    onChange={(event) => handleOnChangeCountry(event)}
                />
            </div>
            <div className='input-group'>
                <label>Username</label>
                <input
                    type={'text'}
                    value={person.username}
                    name='username'
                    onChange={(event) => handleChangeInput(event)}
                />
            </div>
            <div className='input-group'>
                <label>Email</label>
                <input
                    type={'email'}
                    value={person.email}
                    name='email'
                    onChange={(event) => handleChangeInput(event)}
                />
            </div>
            <div className='input-group'>
                <label>Password</label>
                <input
                    type={'password'}
                    value={person.password}
                    name='password'
                    onChange={(event) => handleChangeInput(event)}
                />
            </div>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default Lesson331;