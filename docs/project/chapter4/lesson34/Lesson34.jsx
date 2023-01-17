import { useState } from "react";

const Lesson34 = (props) => {
    const [name, setName] = useState('Hỏi Dân IT');

    const [person, setPerson] = useState({
        name: 'Hỏi Dân IT',
        age: 25,
        education: {
            degree: 'engineer',
            detail: {
                university: 'hust',
                location: 'Ha Noi'
            }
        }
    })

    const handleUpdateName = () => {
        //do sth
    }

    return (
        <div>
            <div>Lesson34: Write concise update logic with Immer
            </div>
            <div>
                <input
                    type={'text'}
                    value={name}
                />
                <button onClick={handleUpdateName}>Update Name</button>
            </div>
        </div>
    )
}

export default Lesson34;