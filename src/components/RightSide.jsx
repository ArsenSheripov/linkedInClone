import React from 'react';
import styled from 'styled-components';
import feedIco from '../assets/images/feed-icon.svg'
import rightIco from '../assets/images/right-icon.svg'


const RightSide = () => {
	return (
		<Container>
			<FollowCard>
				<Title>
					<h2>Add to your feed</h2>
					<img src={feedIco} alt="feedIco" />
				</Title>
				<FeedList>
					<li>
						<a>
							<Avatar />
						</a>
						<div>
							<span>#Linkedin</span>
							<button>Follow</button>
						</div>
					</li>
					<li>
						<a>
							<Avatar />
						</a>
						<div>
							<span>#Video</span>
							<button>Follow</button>
						</div>
					</li>
				</FeedList>
				<Recommendation>
					View all recommendation
					<img src={rightIco} alt="rightIco" />
				</Recommendation>
			</FollowCard>
			<BannerCard>
				<img
					src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
					alt="baner"
				/>
			</BannerCard>
		</Container>
	)
}
const Container = styled.div`
	grid-area: rightside;
`;

const FollowCard = styled.div`
	position: relative;
	text-align: center;
	padding: 0.75rem;
	overflow: hidden;
	margin-bottom: 0.5rem;
	background-color: #fff;
	border-radius: 5px;
	border: none;
	box-shadow: 0 0 0 1px rgba(0 0 0 / 15%),0 0 0 1px rgba(0 0 0 / 20%);
`;

const Title = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: space-between;
	font-size: 1rem;
	width: 100%;
	color: rgba( 0, 0, 0, 0.6);
`;

const FeedList = styled.ul`
	margin-top: 1rem;
	list-style: none;
	
	li {
		position: relative;
		display: flex;
		align-items: center;
		margin: 0.75rem 0;
		font-size: 0.875rem;
		
		& > div {
			display: flex;
			flex-direction: column;
		}

		button {
			background-color: transparent;
			color: rgba(0, 0, 0, 0.6);
			box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
			padding: 1rem;
			align-items: center;
			border-radius: 15px;
			font-weight: 600;
			display: inline-flex;
			justify-content: center;
			min-height: 2rem;
			max-width: 30rem;
			text-align: center;
			outline: none;
		}
	}
`;

const Avatar = styled.div`
	background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	width: 3rem;
	height: 3rem;
	margin-right: 0.5rem;
`;

const Recommendation = styled.a`
	display: flex;
	align-items: center;
	font-size: 0.875rem;
	color: #0a66c2;
`;


const BannerCard = styled(FollowCard)`
	img {
		width: 100%;
		height: 100%;
	}
`;

export default RightSide;