import CalculateVAT from './CalculateVAT';
import './Lesson10.scss';



const Lesson10 = (props) => {
    //  pure function
    function calculateVAT(productPrice) {
        return productPrice * 0.05;
    }

    console.log(">>> VAT === ", calculateVAT(100))


    // ex not pure (impure) function (không phụ thuộc vào input đầu vào)
    var tax = 5;
    function calculateVAT1(productPrice) {
        return productPrice * tax / 100;
    }

    function doSomething() {
        //..whatever
        tax = 80;
    }
    doSomething();
    console.log(">>> VAT impure === ", calculateVAT1(100))



    return (
        <div className='lesson10-container'>
            Lesson 10 : pure-component

            {/* impure component */}
            {/* <CalculateVAT />
            <CalculateVAT />
            <CalculateVAT /> */}

            {/* pure component */}
            {/* <CalculateVAT tax={5} price={100} />
            <CalculateVAT tax={5} price={100} />
            <CalculateVAT tax={5} price={100} /> */}


        </div>
    )
}

export default Lesson10;
