import styled from "styled-components";
import loginLogo from '../assets/images/login-logo.svg';
import heroImg from '../assets/images/login-hero.svg';
import googleIco from '../assets/images/google.svg';
import { connect } from "react-redux";
import { signInAPI } from "../actions";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
	const navigate = useNavigate();

	return (
		<Container>
			{props.user && navigate('./home')}
			<Nav>
				<a href="/">
					<img src={loginLogo} alt="" />
				</a>
				<div className="">
					<Join>Join now</Join>
					<SignIn>Sign in</SignIn>
				</div>
			</Nav>
			<Section>
				<Hero>
					<h1>Welcome to your professional comunity</h1>
					<img src={heroImg} alt="hero" />
				</Hero>
				<Form>
					<Google onClick={() => props.signIn()}>
						<img src={googleIco} alt="Google" />
						Sign in with google
					</Google>
				</Form>
			</Section>
		</Container>
	)
}

const Container = styled.div`
	padding: 0;
	margin: 0 auto;
`;

const Nav = styled.nav`
	max-width: 70rem;
	padding: 0.75rem 0 1rem;
	display: flex;
	align-items: center;
	position:relative;
	justify-content: space-between;
	flex-wrap: nowrap;
	& > a {
		width: 7.813rem;
		height: 2.125rem; 

		@media(max-width: 768){
			padding: 0 0.313rem;
		}
	}
`;

const Join = styled.a`
	font-size: 1rem;
	padding: 0.625rem 0.75rem;
	text-decoration: none;
	color: rgba(0,0,0,0.6);
	margin-right: 0.75rem;
	border-radius: 0.3rem;
	transition: 0.3s;
	cursor: pointer;

	&:hover {
		background-color: rgba(0,0,0,0.08);
		color: rgba(0,0,0,0.9);
}
`;

const SignIn = styled.a`
	box-shadow: inset 0 0 0 1px #0a66c2;
	color: #0a66c2;
	border-radius: 1.5rem;
	transition: 0.3s;
	font-size: 1rem;
	font-weight: 600;
	line-height: 2.5rem;
	padding: 0.625rem 1.5rem;
	word-spacing: nowrap;
	text-align: center;
	cursor: pointer;


	&:hover{
		background-color: rgba(112,181,249, 0.15);
	}
`;

const Section = styled.section`
	display: flex;
	align-items: start;
	min-height: 43.75rem;
	padding-bottom: 8.438rem;
	padding-top: 2.5rem;
	padding: 3.75rem;
	flex-wrap: wrap;
	width: 100%;
	max-width: 70rem;

	@media(max-width: 768){
		margin: auto;
		min-height: 0rem;
	}
`;

const Hero = styled.div`
	width:100%;

	h1 {
		padding-bottom: 0;
		width: 55%;
		font-size: 3.5rem;
		font-weight: 200;
		color: #0a66c2;
		line-height: 4.375rem;
		@media (max-width: 768px) {
			text-align-last: center;
			font-size: 1.25rem;
			width: 100%;
			line-height: 2;
		}
	}

	img {
		width: 43.75rem;
		height: 41.875rem;
		position: absolute;
		bottom: -0.125px;
		right: -9.375rem;
		@media (max-width: 768px) {
			top: 14.375rem;
			width: initial;
			height: initial;
			position: initial;
		}
}
`;

const Form = styled.div`
 margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Google = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #fff;
	height: 56px;
 	width: 100%;
 	border-radius: 28px;
  	box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
	vertical-align: middle;
  	z-index: 0;
  	transition-duration: 167ms;
  	font-size: 20px;
  	color: rgba(0, 0, 0, 0.6);
	cursor: pointer;
  	&:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;

const mapStateToProps = (state) => {
	return {
		user: state.userState.user,
	};
};

const mapDispatchToProps = (dispatch) => ({
	signIn: () => dispatch(signInAPI())
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);