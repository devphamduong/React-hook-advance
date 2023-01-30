import _ from "lodash";

const Lesson25 = (props) => {
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
    };

    // let copiedPerson = _.clone(person); //shallow copy
    let copiedPerson = _.cloneDeep(person); //deep copy

    return (
        <div>
            Lesson 25: clone/cloneDeep() methond (thư viện lodash)
        </div>
    );
};

export default Lesson25;