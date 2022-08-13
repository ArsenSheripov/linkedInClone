import React from 'react';
import styled from 'styled-components';
import cardBg from '../assets/images/card-bg.svg';
import photo from '../assets/images/photo.svg';
import itemIco from '../assets/images/widget-icon.svg';
import bookmark from '../assets/images/item-icon.svg';
import plusIco from '../assets/images/plus-icon.svg';
import { connect } from "react-redux";


const LeftSide = (props) => {
	return (
		<Container>
			<ArtCard>
				<UserInfo>
					<CardBackground />
					<a>
						<Photo />
						<Linke>
							Welcome, {props.user ? props.user.displayName : "there"}!
						</Linke>
					</a>
					<a>
						<AddPhotoText>
							Add a photo
						</AddPhotoText>
					</a>
				</UserInfo>
				<Widget>
					<a>
						<div>
							<span>Connections</span>
							<span>Grow your netwoek</span>
						</div>
						<img src={itemIco} alt="itemIco" />
					</a>
				</Widget>
				<Item>
					<span>
						<img src={bookmark} alt="bookmark" />
						My items
					</span>
				</Item>
			</ArtCard>
			<ComunityCard>
				<a>
					<span>Groups</span>
				</a>
				<a>
					<span>
						Events
						<img src={plusIco} alt="plusIco" />
					</span>
				</a>
				<a>
					<span>Folow Hashtags</span>
				</a>
				<a>
					<span>Discover</span>
				</a>
			</ComunityCard>
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

const CardBackground = styled.div`
	background-image:url(${cardBg});
	background-position: center;
	background-size: 28.875rem;
	height: 3.375rem;
	margin: -0.75rem -0.75rem 0;
	`;

const Linke = styled.div`
	font-size: 1rem;
	line-height: 1.5;
	color: rgba(0, 0, 0, 0.9);
	font-weight: 600;
`;

const Photo = styled.div`
	background-image: url(${photo});
	width: 4.5rem;
	height: 4.5rem;
	box-sizing: border-box;
	background-clip: content-box;
	background-color: white;
	background-size: 60%;
	background-repeat: no-repeat;
	background-position: center;
	border: 2px solid white;
	border-radius: 50%;
	margin: -2.375rem auto 0.75rem;
`;

const AddPhotoText = styled.div`
	color: #0a66c2;
	margin-top: 0.25rem;
	font-size: 0.75rem;
	line-height: 1.33;
	font-weight: 400;

`;

const Widget = styled.div`
	border-bottom: 1px solid rgba(0, 0, 0, 0.15);
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;

	& > a {
		display: flex;
		justify-content: space-between;
		text-decoration: none;
		align-items: center;
		padding: 0.25rem 0.75rem;

		&:hover {
			background-color: rgba(0, 0, 0, 0.08);
		}
		div {
			display: flex;
			flex-direction: column;
			text-align: left;
			span {
				font-size: 0.75rem;
				line-height: 1.333;

				&:first-child{
					color: rgba(0, 0, 0, 0.6);
				}
				&:nth-child(2){
					color: rgba(0, 0, 0, 1);
				}
			}
		}
	}
	svg {
		color: rgba(0, 0, 0, 1);
	}
`;

const Item = styled.a`
	display: block;
    font-size: 0.75rem;
	text-align: left;
	padding: 0.75rem;
	border-color: rgba(0, 0, 0, 0.8);

	span {
		display: flex;
		align-items: center;
		color: rgba(0, 0, 0, 1);
		svg {
			color: rgba(0, 0, 0, 0.6);
		}
	}
	&:hover {
		background-color: rgba(0, 0, 0, 0.08);
	}
`;

const ComunityCard = styled(ArtCard)`
	display: flex;
	flex-direction: column;
	text-align: left;
	padding: 0.5rem 0 0;

	a {
		font-size: 0.75rem;
		color: black;
		padding: 0.25rem 0.75rem 0.25rem 0.75rem;
		cursor: pointer;
		transition: all 0.3s ease-in;

		&:hover {
			color: #0a66c2;
		}

		span {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		&:last-child {
			color: rgba(0, 0, 0, 0.6);
			text-decoration: none;
			border-top: 1px solid #d6cec2;
			padding: 0.75rem;

			&:hover {
				background-color: rgba(0, 0, 0, 0.08);
			}
		}
	}

`;

const mapStateToProps = (state) => {
	return {
		user: state.userState.user
	}
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LeftSide);
