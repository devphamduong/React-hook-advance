import { useEffect, useState } from "react";
import Homework26 from "../lesson26/Homework26_detail";
import AddNewUser from "./AddNewUser";
import { getUserWithPaginate } from "../../utils/apiService";

const Lesson27 = (props) => {
    const [listUser, setListUser] = useState([]);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        let res = await getUserWithPaginate(1, 3);
        setListUser(res.DT.users);
    };

    const addNewUser = (user) => {
        setListUser([user, ...listUser]);
    };

    return (
        <>
            <p>Lesson 27: Sharing State Between Components (Lift-up State)</p>
            <AddNewUser addNewUser={addNewUser} />
            <Homework26 listUser={listUser} setListUser={setListUser} />
        </>
    );
};

export default Lesson27;