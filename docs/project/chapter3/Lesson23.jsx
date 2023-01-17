const Lesson23 = (props) => {
    const person = {
        name: 'abc',
        address: {
            city: 'hn',
            country: 'vn'
        },
        job: {
            title: 'dev',
            detail: {
                position: 'boss',
                salary: '5k'
            }
        }
    }

    const education = {
        edu: {
            school: 'bk',
            degree: 'doctor'
        },
        // name: 'my education infor'
    }

    //Object.assign(target, sources);
    // const mine = Object.assign(person, education); // let x = y; x <= y
    // console.log(">>> check person: ", person, ' mine:', mine)


    //copy object
    const clonePerson = Object.assign({}, person); // let x = y; x <= y
    //   console.log(">>> check person: ", person, ' clonePerson:', clonePerson);

    const mine = Object.assign({}, person, education);
    //   console.log(">>> check person: ", person, ' mine:', mine);


    //mutate object
    mine.name = 'update name';
    //   console.log(">>> check person: ", person, ' mine:', mine); // 1 level deep => ok


    mine.job.title = 'Engineer';
    //   console.log(">>> check person: ", person, ' mine:', mine); // 2 level deep => NOT ok

    //shallow copy :)

    return (
        <div>
            Lesson 23;
        </div>
    )
}

export default Lesson23;