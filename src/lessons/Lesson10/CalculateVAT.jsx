
//impure function
let price = 100, tax = 0;
const CalculateVAT = (props) => {
    //mutate
    tax = tax + 5;

    return (
        <div> VAT = {price * tax / 100} with PRICE = {price}</div>
    )

}

//pure function
// const CalculateVAT = (props) => {
// 	const {tax, price} = props;
// 	return (
// 	   <div> VAT = { price * tax/100 } with PRICE = {price}</div>
// 	)
// }


export default CalculateVAT;