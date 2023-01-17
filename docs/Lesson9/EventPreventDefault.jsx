import { useState } from "react";

const EventPreventDefault = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleOnSumbit = (event) => {
        console.log(">>> check data submit, email= ", email, ' pass: ', password)
        // alert('me')
    }

    return (
        <div className="event-prevent-default">
            <form onSubmit={handleOnSumbit}>
                <div className="input-group">
                    <label>Email</label>
                    <input type={"email"} value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input type={"password"} value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default EventPreventDefault;