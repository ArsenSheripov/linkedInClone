import React from 'react';
import styled from "styled-components";
import Header from './Header';

const Home = () => {
	return (
		<>
			<Header />
			<Container>
				<Section>
					<h5>
						<a>Hiring in a harry? - </a>
					</h5>
					<p>Find talent pros in record time with UpWork and keep business moving.</p>
				</Section>
			</Container>
		</>
	)
}

const Container = styled.div`
	padding-top: 5.25rem;
`;

const Content = styled.div`

`;

const Section = styled.section`
	
`;

export default Home;
