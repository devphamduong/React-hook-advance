import { useRef } from "react";

const UnControlledForm = (props) => {
    const fnameRef = useRef('');
    const lnameRef = useRef('');
    const emailRef = useRef('');

    const handleSubmit = () => {
        const form = {
            fname: fnameRef.current.value,
            lname: lnameRef.current.value,
            email: emailRef.current.value
        }
        console.log(">>> check form data: ", form);
    }
    console.log(">>> render UnControlledForm")
    return (
        <fieldset>
            <legend>Un-Control Form</legend>
            <label >First name:</label>
            <input type="text" name="fname" ref={fnameRef} />
            <br />
            <label>Last name:</label>
            <input type="text" name="lname" ref={lnameRef} />
            <br />
            <label>Email:</label>
            <input type="email" name="email" ref={emailRef} />
            <br />
            <input type="button" value="Submit"
                onClick={handleSubmit}
            />
        </fieldset>
    )
}

export default UnControlledForm;