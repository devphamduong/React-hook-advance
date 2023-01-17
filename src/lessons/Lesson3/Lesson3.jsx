import { useState } from 'react';
import CoolButton from './CoolButton';

const Lesson3 = (props) => {
    const [name, setName] = useState('')
    return (
        <div>
            <label>Name:</label>
            <input type={'text'} value={name} onChange={(event)=>setName(event.target.value)}/>
            <div>Your name 's {name}</div>
            <CoolButton btnClass={'primary'} title={'Press me'}/>
        </div>
    )
}

export default Lesson3;