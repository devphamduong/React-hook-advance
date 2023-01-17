const Lesson21 = (props) => {

    let counter = 1;
    let copiedCounter = counter;
    copiedCounter = 2;

    console.log(" counter = ", counter, " and copiedCounter = ", copiedCounter)


    let person = {
        firstName: 'Eric',
        lastName: 'Hỏi Dân IT'
    };
    //
    let copiedPerson = person;

    copiedPerson.firstName = 'Hary Pham';
    // console.log(">>> check person: ", person);

    // 
    // let copiedPerson2 = { ...person }
    // copiedPerson2.firstName = 'Hary Pham';
    // console.log(">>> check person: ", person);
    // console.log(">>> check copied person: ", copiedPerson2);


    return (
        <div>
            Lesson 21:  Shallow copy và Deep copy
        </div>
    )
}

export default Lesson21;