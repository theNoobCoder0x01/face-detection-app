import React, { useState } from 'react';

import './SignIn.css';

const SignIn = ({ setRoute }) => {
	const [success, setSuccess] = useState("ntg");
	const [info, setInfo] = useState({email: "", password: ""});

	const validateEmailPassword = () => {
		const valStatus = "ss";
		switch(valStatus) {
			case "ss":
				setRoute("mainpage");
				break;
			case "wt":
				setSuccess("wep");
				break;
			default:
				setSuccess("ntg");
		}
	}

	return (
		<main className="signin-form black-80 shadow-3 center mb4">
			<div className="w-100 tl">
				<fieldset className="form-fieldset b--transparent">
					<legend className="f4 fw6">Sign In</legend>
					<div className="mt3">
						<label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
						<input className="pa2 input-reset bn br3 outline-0 bg-white w-100" type="email" name="email-address"  id="email-address" />
					</div>
					<div className="mv3">
						<label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
						<input className="pa2 input-reset bn br3 outline-0 bg-white w-100" type="password" name="password"  id="password" />
					</div>
				</fieldset>
				<div className="lh-copy center mt1">
					<button className="button ripple b pa2 pv1 input-reset no-underline br3 ba b--black bg-transparent shadow-4 dib black f5"
						type="submit"
						onClick={validateEmailPassword}
					>Sign in</button>
					<p className="f6 black db ml1">
						Click to&nbsp;<span className="f6 dim black pointer" onClick={() => setRoute("register")}>Register</span>
					</p>
				</div>
				<div className="lh-copy center mt3">
					<p>
						<span className="f6 link dim black db pointer">Forgot your password?</span>
					</p>
				</div>
			</div>
		</main>
	);
}

export default SignIn;