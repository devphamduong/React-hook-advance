const Lesson17 = (props) => {
    //JS có 7 loại Primitive datatypes:
    //1. Strings
    let greeting = 'Hi';
    let message = "Bye";

    console.log(">>> check greeting === ", greeting);
    console.log(">>> check datatype message === ", typeof message)

    let message2 = 'I\'m also a valid string';
    // use \ to escape the single quote (')
    // console.log(">>> check message === ", message2);
    //template strings (ES6)


    // 2. Number
    // let num = 100;
    // let price = 12.5;
    // //  <= sử dụng dấu.để định nghĩa số thực
    // console.log(">>> check number = ", num)
    // console.log(">>> check type = ", typeof price)

    // 3. Boolean
    // let inProgress = true;
    // let completed = false;
    // console.log(">>> check inProgress = ", inProgress, " type = ", typeof completed); // boolean


    // 4.undefined
    // let counter;
    // console.log(">>> check counter = ", counter);        // undefined
    // console.log(">>> check typeof counter = ",typeof counter); // undefined

    // 5.null
    // const foo = null;
    // console.log(">>> check foo = ",foo); //null

    // 6.bigint (ES2020)
    // - Dùng để hiển thị số có giá trị lớn hơn 2^53 -1
    // let bigInt1 = 9007199254740991n;
    // let bigInt = BigInt(9007199254740991);
    // console.log(">>> check bigint: ", bigInt)
    // console.log(">>> check type: ", typeof bigInt); // bigint

    // let x = Number.MAX_SAFE_INTEGER;
    // x = x + 1; // 9007199254740992
    // x = x + 1; // 9007199254740992 (same as above => bugs)

    // let y = BigInt(Number.MAX_SAFE_INTEGER);
    // y = y + 1; // 9007199254740992n
    // y = y + 1; // 9007199254740993n (correct now)

    // 7.symbol (ES6)
    // - Để tạo 1 biến symbol, sử dụng hàm Symbol()
    // let s = Symbol('foo');
    // - Symbol() function tạo ra giá trị 'độc nhất' (unique) mỗi lần gọi nó.
    // console.log(Symbol() === Symbol()); // false



    //     "Normal" object: { key: value }
    //     const person = { name: 'ABC', address: 'HN' }

    //     Dates

    // Indexed collections: Arrays 

    // Keyed collections: Maps, Sets, WeakMaps, WeakSets


    return (
        <div className="lesson17">
            Primitive datatypes
        </div>
    )
}

export default Lesson17;