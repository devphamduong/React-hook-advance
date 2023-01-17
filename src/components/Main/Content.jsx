const Content = (props) => {
    const { count, setCount } = props;
    return (
        <div className="content-container">
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount(count => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
        </div>
    )
}

export default Content;