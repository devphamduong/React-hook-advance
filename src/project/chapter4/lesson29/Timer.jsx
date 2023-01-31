import { useState, useEffect } from "react";

const Timer = (props) => {
    const [count, setCount] = useState(10);

    useEffect(() => {
        if (count === 0) {
            return;
        }
        const timer = setInterval(() => {
            setCount(count => count - 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [count]);

    return (
        <div>
            Timer = {count}
        </div>
    );
};

export default Timer;