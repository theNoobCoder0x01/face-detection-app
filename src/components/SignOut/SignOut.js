const SignOut = ({ setRoute }) => {
    const signInAgain = () => {
        setRoute("signin");
    }

    return (
        <div>
            <p>Signed Out</p>
            <p className="link no-underline pointer dim" onClick={signInAgain}>Sign In again</p>
        </div>
    );
}

export default SignOut;