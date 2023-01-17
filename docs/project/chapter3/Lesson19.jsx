const Lesson19 = (props) => {
    const person = {
        name: 'Eric',
        age: 25,
    };

    // add the ssn property
    person.phone = '123-45-6789';

    // change the name
    person.name = 'Hỏi Dân IT';

    // delete the age property
    delete person.age;
    console.log(">>> check person = ", person);

    return (
        <div>
            Lesson 19: Storing Variables JS
        </div>
    )
}

export default Lesson19;