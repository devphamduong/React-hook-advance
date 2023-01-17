import { useState } from "react";

const User = (props) => {
    const { data } = props;
    const [show, setShow] = useState(true);

    return (
        <div className="detail-user">
            <div>ID: {data?.id}</div>
            <div>Username: {data?.username}</div>
            <div>
                {data.image && show &&
                    <img src={`data:image/png;base64, ${data.image}`} alt="User image" />
                }
            </div>
            <div>
                <button onClick={() => setShow(!show)}>Hide/Show Images</button>
            </div>
        </div>
    )
}

export default User;