import React from 'react';
import styled from 'styled-components';
import userImg from "../assets/images/user.svg";
import photoIco from "../assets/images/photo-icon.svg";
import videoIco from "../assets/images/video-icon.svg";
import eventIco from "../assets/images/event-icon.svg";
import articleIco from "../assets/images/article-icon.svg";

const Main = () => {
	return (
		<Container>
			<ShareBox>
				<div>
					<img src={userImg} alt="user" />
					<button>start a post</button>
				</div>
				<div>
					<button>
						<img src={photoIco} alt="photoIco" width={24} />
						<span>Photo</span>
					</button>
					<button>
						<img src={videoIco} alt="videoIco" width={24} />
						<span>Video</span>
					</button>
					<button>
						<img src={eventIco} alt="eventIco" width={24} />
						<span>Event</span>
					</button>
					<button>
						<img src={articleIco} alt="articleIco" width={24} />
						<span>Write article</span>
					</button>
				</div>
			</ShareBox>
		</Container>
	)
}

const Container = styled.div`
	grid-area: main;
`;

const CommonCard = styled.div`
	text-align: center;
	overflow: hidden;
	margin-bottom: 0.5rem;
	background-color: #fff;
	border-radius: 5px;
	position: relative;
	border: none;
	box-shadow: 0 0 0 1px rgba(0 0 0 / 15%), 0 0 0 1px rgba(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
	display: flex;
	flex-direction: column;
	color: #958b7b;
	margin: 0 0 0.5rem;

	div {
		button {
			display: flex;
			align-items: center;
			outline: none;
			font-weight: 600;
			color: rgba(0, 0, 0, 0.6);
			font-size: 0.875rem;
			line-height: 1.5;
			min-height: 3rem;
			border: none;
			background: transparent;
			cursor: pointer;

			&:hover {
				background-color: rgba(0, 0, 0, 0.08);
			}
		}

		
		&:first-child {
				display: flex;
				align-items: center;
				padding: 0.5rem 1rem 0 1rem;
				margin-bottom: 0.6rem;
				img {
					width: 3rem;
					border-radius: 50%;
				}

				button {
					margin: 0.25rem 0;
					flex-grow: 1;
					border-radius: 2.2rem;
					padding-left: 1rem;
					border: 1px solid rgba(0, 0, 0, 0.15);
					text-align: left;
				}
		}

		&:nth-child(2){
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			padding-bottom: 0.25rem;

			button {
				img {
					margin: 0 0.25rem 0 -0.125rem;
				}

				span {
					color: #70b5f9;	
				}
			}
		}
	}
`;

export default Main;
