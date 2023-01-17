import { useState } from "react";
import './Plus.scss';

const Plus = (props) => {
    const [addend1, setAddend1] = useState('');
    const [addend2, setAddend2] = useState('');
    const [sumTxt, setSumTxt] = useState('');

    const [error, setError] = useState('');

    const handleClick = () => {
        debugger
        setError('');
        setSumTxt('');
        debugger
        if (inputsAreEmpty()) {
            setError('Error: one or both inputs are empty.');

            return;
        }
        updateLabel();
    }
    const inputsAreEmpty = () => {
        if (addend1 === '' || addend2 === '') {
            return true;
        } else {
            return false;
        }
    }
    function updateLabel() {
        const sum = addend1 + addend2;
        const txt = addend1 + ' + ' + addend2 + ' = ' + sum;
        setSumTxt(txt);
    }

    return (
        <div className="l40-plus">
            <h1>Demo: Get Started Debugging JavaScript with Chrome DevTools</h1>
            <label >Number 1</label>
            <input placeholder="Number 1" value={addend1} onChange={(e) => setAddend1(e.target.value)} />
            <label >Number 2</label>
            <input placeholder="Number 2" value={addend2} onChange={(e) => setAddend2(e.target.value)} />
            <button onClick={handleClick}>Add Number 1 and Number 2</button>
            <p>Result: {error ? error : sumTxt}</p>
        </div>)
}

export default Plus;