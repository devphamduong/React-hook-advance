const Lesson24 = (props) => {
    //data types: string
    let data = '{"name":"John", "age":30, "city":"New York"}'

    //  sử dụng JSON.parse sẽ convert text thành javascript object
    const obj = JSON.parse(data);
    //  const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');



    //  ==========
    //  JSON.stringify()
    //  - giúp convert từ javascript object thành JSON format (string)

    //   (json.parse() => convert từ string - JSON format, thành js object)

    //  const obj = {name: "John", age: 30, city: "New York"};
    //  const myJSON = JSON.stringify(obj);

    //typeof myJSON === 'string


    //  ============
    //  clone object
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

    //convert object to string => tạo 1 vùng bộ mới trong stack (primitive values)
    //convert string to object => tạo 1 bộ mới trong heap (object values)
    const clone = JSON.parse(JSON.stringify(person));

    //    console.log(">>> check person: ", person, ' clone:', clone);


    //mutate
    clone.address.city = 'update city';
    //    console.log(">>> check person: ", person, ' clone:', clone);
    // deep copy

    return (
        <div>
            Lesson 24;
        </div>
    )
}

export default Lesson24;