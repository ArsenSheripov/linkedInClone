import React from 'react';
import styled from "styled-components";
import Header from './Header';
import LeftSide from './LeftSide';
import Main from './Main';
import RightSide from './RightSide';
import { useNavigate } from 'react-router-dom';
import { connect } from "react-redux";

const Home = (props) => {
	const navigate = useNavigate();
	return (
		<>
			<Header />
			<Container>
				{!props.user && navigate('/')}
				<Section>
					<h5>
						<a>Hiring in a harry? - </a>
					</h5>
					<p>Find talented pros in record time with UpWork and keep business moving.</p>
				</Section>
				<Layout>
					<LeftSide />
					<Main />
					<RightSide />
				</Layout>
			</Container>
		</>
	)
}

const Container = styled.div`
	padding-top: 5.25rem;
`;

const Content = styled.div`
	width: 70rem;
	margin: 0 auto;

`;

const Section = styled.section`
	min-height: 3.125rem;
	padding: 1rem 0;
	box-sizing: border-box;
	text-align: center;
	text-decoration: underline;
	display: flex;
	justify-content: center;

	h5 {
		color: #0a66c2;
		
		a {
			font-weight: 700;
		}
	}

	p {
		font-size: 0.875rem;
		
	}

	@media (max-width: 768px) {
		flex-direction: column;
		padding: 0 0.313rem;
	}
`;

const Layout = styled.div`
	display: grid;
	grid-template-areas: "leftside main rightside";
	grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(18.75rem, 7fr);
	gap: 1.563rem;
	margin: 1.563rem 0;

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		padding: 0 0.313rem;
	}
`;

const mapStateToProps = (state) => {
	return {
		user: state.userState.user,
	}
}

export default connect(mapStateToProps)(Home);
