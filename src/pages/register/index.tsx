import React from "react";
import style from "../../Pages/login/style.module.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import google from "../../assets/google.svg";
import { NavLink } from "react-router-dom";

const RegisterPage = () => {
	return (
	<div className={style.page}>
		<Header />
		<div className="pages_title">
			<p>Register</p>
		</div>
		<div className={style.page_container}>
		<div className={style.page_container_content}>
			<div className={style.page_container_content_column}>
				<div className={style.page_container_content_column_title}>
					<h1>Create your account</h1>
					<p>Hey there! Ready to join the party? We just need a few details from you to get started. Let's do this!</p>
				</div>
				
				<form>
					<div className={style.page_google}>
						<div className={style.page_google_row}>
							<img src={google} alt="google" draggable = "false" style={{userSelect:"none"}} />
							<span>Continue with google</span>
						</div>
					</div>
					<div className={style.page_google_line}>
						<div className={style.page_google_line_item}></div>
						<span>Or</span>
						<div className={style.page_google_line_item}></div>
					</div>
					<div className={style.page_form}>
						<div className={style.page_form_input}>
							<label>Email</label>
							<input type="email" placeholder="Email address" />
						</div>
						<div className={style.page_form_input}>
							<label>Password</label>
							<input type="password" placeholder="password" />
						</div>
						<div className={style.page_form_input}>
							<label>Confirm Password</label>
							<input type="password" placeholder="Re-type password" />
						</div>
					
					</div>
					<div className={style.button}>
						<button>Sign Up</button>	
						<p>Do you already have an account? <NavLink to="/login">Login</NavLink></p>
					</div>
				</form>
			</div>
		</div>
		</div>
		<Footer isLoginPage={true} />
	</div>
	)
}

export default RegisterPage;