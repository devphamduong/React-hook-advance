import { useState } from "react";

const TraditionalForm = (props) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const isValidInput = () => {
        console.log(">>> check formdata: ", formData)
        if (!formData.firstName) {
            setErrors({
                ...errors,
                firstName: 'First name is required'
            })
            return;
        }
        if (!formData.lastName) {
            setErrors({
                ...errors,
                lastName: 'Last name is required'
            })
            return;
        }
        if (!formData.email) {
            setErrors({
                ...errors,
                email: 'Email is required'
            })
            return;
        }
    }

    const handleOnChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
        if (event.target.value) {
            setErrors({
                ...errors,
                [event.target.name]: ''
            })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        isValidInput();
        console.log(">>> check form data: ", formData)
    }
    console.log(">>> check render traditional form");

    return (
        <div className="tradition-form">
            <form onSubmit={handleSubmit}>
                <div className='input-group'>
                    <label>Firstname: (*)</label>
                    <input
                        name="firstName"
                        value={formData['firstName']}
                        onChange={handleOnChange}
                    />
                    {errors.firstName && <p className='invalid'>First name is required</p>}
                </div>
                <div className='input-group'>
                    <label>Lastname: (*)</label>
                    <input name="lastName"
                        value={formData['lastName']}
                        onChange={handleOnChange} />
                    {errors.lastName && <p className='invalid'>Last name is required</p>}
                </div>
                <div className='input-group'>
                    <label>Email: (*)</label>
                    <input
                        name="email"
                        value={formData['email']}
                        onChange={handleOnChange}
                    />
                    {errors.email && <p className='invalid'>Email is required</p>}
                </div>

                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}

export default TraditionalForm;