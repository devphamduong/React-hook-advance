import React, { useState } from "react";

const Lesson33 = (props) => {
    const [person, setPerson] = useState(
        {
            username: '',
            email: 'Hỏi Dân IT',
            password: ''
        }

    )

    const handleOnChangeUsername = (event) => {
        // person.username = event.target.value;
        //not merge
        setPerson({ username: event.target.value })
    }

    const handleSubmit = () => {
        console.log(">>> check data person: ", person)
    }
    return (
        <div>
            <div className='input-group'>
                <label>Username</label>
                <input
                    type={'text'}
                    value={person.username}
                    onChange={(event) => handleOnChangeUsername(event)}
                />
            </div>
            <div className='input-group'>
                <label>Email</label>
                <input
                    type={'email'}
                    value={person.email}
                />
            </div>
            <div className='input-group'>
                <label>Password</label>
                <input type={'password'} value={person.password} />
            </div>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

// class Lesson33 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             email: 'Hỏi Dân IT',
//             password: ''
//         }
//     }

//     handleOnChangeUsername = (event) => {
//         //bad code
//         // this.state.username = event.target.value;
//         //merge state (react class auto merge)
//         this.setState({ username: event.target.value })
//     }

//     handleSubmit = () => {
//         console.log(">>> check data person: ", this.state)
//     }

//     render() {
//         return (
//             <div>
//                 <div>Lesson33: Update state</div>
//                 <div className='input-group'>
//                     <label>Username</label>
//                     <input
//                         type={'text'}
//                         value={this.state.username}
//                         onChange={(event) => this.handleOnChangeUsername(event)}
//                     />
//                 </div>
//                 <div className='input-group'>
//                     <label>Email</label>
//                     <input
//                         type={'email'}
//                         value={this.state.email}
//                     />
//                 </div>
//                 <div className='input-group'>
//                     <label>Password</label>
//                     <input type={'password'} value={this.state.password} />
//                 </div>
//                 <div>
//                     <button onClick={this.handleSubmit}>Submit</button>
//                 </div>
//             </div>)
//     }
// }





export default Lesson33;