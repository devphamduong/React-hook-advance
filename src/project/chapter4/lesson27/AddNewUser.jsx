import { useState } from "react";

function AddNewUser(props) {
    const [id, setId] = useState('');
    const [username, setUsername] = useState('');
    const [image, setImage] = useState('');

    const toBase64 = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    const handleOnchangeFile = async (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            let strToReplace = await toBase64(event.target.files[0]);
            let strImage = strToReplace.replace(/^data:image\/[a-z]+;base64,/, "");
            setImage(strImage);
        }
    };

    const handleCreateUser = () => {
        props.addNewUser({
            id, username, image
        });
    };

    return (
        <fieldset>
            <legend>Add new User:</legend>
            <label for="id">ID:</label>
            <input type="text" id="id" value={id} onChange={(event) => setId(event.target.value)} /><br></br>
            <label for="username">Username:</label>
            <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} /><br></br>
            <label>Image:</label>
            <input type="file" onChange={(event) => handleOnchangeFile(event)} /><br></br>
            <input type="button" value="Add" onClick={() => handleCreateUser()} />
        </fieldset>
    );
}

export default AddNewUser;