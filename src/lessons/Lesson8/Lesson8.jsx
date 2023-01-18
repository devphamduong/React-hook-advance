import './Lesson8.scss';

const Lesson8 = (props) => {
    // function handleOnClick1() {
    //     alert('click me')
    // }

    const handleOnClick2 = () => {
        alert('click me');
    };

    return (
        <div className="lesson8">
            <h3>Lesson 8 :</h3>
            <div>
                <button
                    onClick={handleOnClick2} //passing function
                // onClick={handleOnClick2()} //running function => () execute
                >Tham Chiếu</button>
            </div>
            <div>
                <button
                // onClick={alert('click me')}
                >Inline</button>
            </div>
            <div>
                <button
                    onClick={() => handleOnClick2()} //passing function || anonymous function
                >Arrow function</button>
            </div>
        </div>
    );
};

export default Lesson8;