const SuperInput = (props) => {
    const { index, value, handleChangeInput } = props;
    console.log(">>> render child")
    return (
        <>
            <label>Field {index + 1}</label>
            <input
                type={'text'}
                name={`field-${index + 1}`}
                value={value}
                onChange={handleChangeInput}
            />
        </>
    )
}

export default SuperInput;