import React, { useState } from 'react';

import './Register.css';

const Register = ({ setRoute }) => {
	const [success, setSuccess] = useState("ntg");
	const [info, setInfo] = useState({
		name: "",
		email: "",
		password: "",
		conPassword: "",
	});

	const validateInfo = () => {
		const valStatus = "ss";
		switch(valStatus) {
			case "ss":
				setRoute("mainpage");
				break;
			case "wt":
				setSuccess("iep");
				break;
			default:
				setSuccess("ntg");
		}
	}

    return (
		<main className="register-form black-80 shadow-3 center mb4">
			<div className="w-100 tl">
				<fieldset className="form-fieldset b--transparent">
					<legend className="f4 fw6">Register</legend>
                    <div className="mt3">
						<label className="db fw6 lh-copy f5" htmlFor="email-address">Name</label>
						<input className="pa2 input-reset bn br3 outline-0 bg-white w-100" type="text" name="name"  id="name" />
					</div>
					<div className="mt3">
						<label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
						<input className="pa2 input-reset bn br3 outline-0 bg-white w-100" type="email" name="email-address"  id="email-address" />
					</div>
					<div className="mv3">
						<label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
						<input className="pa2 input-reset bn br3 outline-0 bg-white w-100" type="password" name="password"  id="password" />
					</div>
                    <div className="mv3">
						<label className="db fw6 lh-copy f5" htmlFor="password">Confirm Password</label>
						<input className="pa2 input-reset bn br3 outline-0 bg-white w-100" type="password" name="confirm-password"  id="confirm-password" />
					</div>
				</fieldset>
				<div className="lh-copy center mt1">
					<button
						className="button ripple b pa2 pv1 input-reset no-underline br3 ba b--black bg-transparent shadow-4 dib black f5"
						type="submit"
						onClick={validateInfo}
					>
                        Register
                    </button>
				</div>
				<div className="lh-copy center mt3">
                    <p className="f6 black db ml1">
                        Already registered?&nbsp;<span className="f6 dim black pointer" onClick={() => setRoute("signin")}>Sign In</span>
                    </p>
				</div>
			</div>
		</main>
	);
}

export default Register;