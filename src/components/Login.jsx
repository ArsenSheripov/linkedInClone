import styled from "styled-components";
import loginLogo from '../assets/images/login-logo.svg';

const Login = (props) => {
	return (
		<Container>
			<Nav>
				<a href="/">
					<img src={loginLogo} alt="" />
				</a>
			</Nav>
		</Container>
	)
}

const Container = styled.div`
	padding: 0;
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

export default Login;