const Lesson18 = () => {

    let inProgress = true;
    let completed = false;

    console.log(typeof completed); // boolean

    console.log(Boolean('Hi'));// true
    console.log(Boolean(''));  // false

    console.log(Boolean(20));  // true
    console.log(Boolean(Infinity));  // true
    console.log(Boolean(0));  // false

    console.log(Boolean({ foo: 100 }));  // true on non-empty object
    console.log(Boolean(null));// false

    // let name = 'eric'; //datatype: string
    // if(name){ //do something}
    // === if(name === true){ //do something}

    // let address;
    // if(address){//do something}


    let x = 10;
    let y = true;

    return (
        <div>

            <>
                {x && x > 5 && <span> I'm greater than 5</span>}
                {y && x > 5 && <span> I'm greater than 5</span>}
                {y === true && x > 5 && <span> I'm greater than 5</span>}
            </>

        </div>
    )
}

export default Lesson18;