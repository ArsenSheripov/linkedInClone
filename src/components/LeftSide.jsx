import React from 'react';
import styled from 'styled-components';

const LeftSide = () => {
	return (
		<Container>
			<ArtCard>
				<UserInfo>
					<CardBackground />
					<a>
						<Photo />
						<Linke>
							Welcome, there!
						</Linke>
					</a>
					<a>
						<AddPhotoText>
							Add a photo
						</AddPhotoText>
					</a>
				</UserInfo>
			</ArtCard>
		</Container>
	)
}

const Container = styled.div`
	grid-area: leftside;
`;

const ArtCard = styled.div`
	text-align: center;
	overflow: hidden;
	margin-bottom: 0.5rem;
	background-color: white;
	border-radius: 0.313rem;
	transition: box-shadow 83ms;
	position: relative;
	border: none;
	box-shadow: 0 0 0 1px rgb(0 0 0 / 15%),  0 0 0 1px rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
	border-bottom: 1px solid rgba(0, 0, 0, 0.15);
	padding: 0.75rem 0.75rem 1rem;
	word-wrap: break-word;
	word-break: break-word;
`;

const CardBackground = styled.div``;

const Linke = styled.div``;

const Photo = styled.div``;

const AddPhotoText = styled.div``;


export default LeftSide;
