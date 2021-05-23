const ErrorPage = ({ setRoute }) => {
    return (
        <div>
            <p className="f1 shadow-5" style={{ color: "#FF0000", backgroundColor: "rgba(150, 150, 150, 0.5)" }}>An Error Occurred.</p>
            <p className="link f3 dim no-underline pointer" onClick={() => setRoute("signin")}>Click to Reload</p>
        </div>
    );
}

export default ErrorPage;