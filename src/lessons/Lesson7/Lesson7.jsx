const Lesson7 = (props) => {
    function myFunction() {
        console.log("Traditional Function");
    }
    (function () {
        console.log("Anonymous Function");
    })();
    return (
        <div style={{ padding: "50px" }}>
            <h3>Lesson 7 Anonymous Function:</h3>
        </div>
    );
};

export default Lesson7;