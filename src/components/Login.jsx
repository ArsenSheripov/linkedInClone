import styled from "styled-components";
import loginLogo from '../assets/images/login-logo.svg';

const Login = (props) => {
	return (
		<Container>
			<Nav>
				<a href="/">
					<img src={loginLogo} alt="" />
				</a>
				<div className="">
					<Join>Join now</Join>
					<SignIn>Sign in</SignIn>
				</div>
			</Nav>
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

		@media(max-width: 768px){
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

export default Login;