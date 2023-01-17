import { useState } from 'react';
import './SuperForm.scss';
import SuperInput from './SuperInput';
const SuperForm = (props) => {
    let initForm = {};
    for (let i = 1; i <= 200; i++) {
        initForm[`field-${i}`] = "";
    }
    console.log(">>> check value initForm = ", initForm);
    const [form, setForm] = useState(initForm);

    const handleChangeInput = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    console.log(">>> render form: ", form)
    return (
        <div className="super-form-container">
            {[...Array(200)].map((e, index) => {
                return (
                    <div className='input-group' key={`index-${index}`}>
                        <label>Field {index + 1}</label>
                        <input
                            type={'text'}
                            name={`field-${index + 1}`}
                            value={form[`field-${index + 1}`]}
                            onChange={handleChangeInput}
                        />

                        {/* <SuperInput
                            index={index}
                            handleChangeInput={handleChangeInput}
                            value={form[`field-${index + 1}`]}
                        /> */}
                    </div>
                )
            })}
        </div>
    )
}

export default SuperForm;