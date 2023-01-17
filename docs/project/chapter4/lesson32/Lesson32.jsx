import { useState } from "react";
const Lesson32 = (props) => {
    const [info, setInfo] = useState({
        name: "Hỏi Dân IT",
        age: 30
    });

    const handleModify = () => {
        info.name = "modify Eric";
        info.age = "35";

        // setInfo({
        //   name: "modify",
        //   age: 35
        // });
    };

    const handleDoSth = () => {
        console.log(">>> do sth with info = ", info);
    };

    return (
        <div>
            <div>Lesson 32: Don't mutate the state.</div>
            <div>userInfor: {JSON.stringify(info)}</div>
            <button onClick={() => handleModify()}>Modify state</button>
            <br /> <br />
            <button onClick={() => handleDoSth()}> Do sth </button>

        </div>
    )
}

export default Lesson32;