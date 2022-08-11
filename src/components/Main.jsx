import React from 'react';
import styled from 'styled-components';
import userImg from "../assets/images/user.svg";
import photoIco from "../assets/images/photo-icon.svg";
import videoIco from "../assets/images/video-icon.svg";
import eventIco from "../assets/images/event-icon.svg";
import articleIco from "../assets/images/article-icon.svg";
import imaga from "../assets/images/images.jpg";
import likeIco from "../assets/images/like-icon.svg";
import commentIco from "../assets/images/comment-icon.svg";
import shareIco from "../assets/images/share-icon.svg";
import sendIco from "../assets/images/send-icon.svg";

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
			<div>
				<Article>
					<SharedActor>
						<a>
							<img src={userImg} alt="user" />
							<div>
								<span>Title</span>
								<span>Info</span>
								<span>Date</span>
							</div>
						</a>
						<button>...</button>
					</SharedActor>
					<Description>
						descr
					</Description>
					<SharedImg>
						<a>
							<img src={imaga} alt="shredimg" />
						</a>
					</SharedImg>
					<SocialCounts>
						<li>
							<button>
								<img
									src="http://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
									alt=""
								/>
								<img
									src="http://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f"
									alt=""
								/>
								<span>75</span>
							</button>
						</li>
						<li>
							<a>2 coments</a>
						</li>
					</SocialCounts>
				</Article>
			</div>
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
						margin: 0.25rem 0.8rem;
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

const Article = styled(CommonCard)`
				padding: 0;
				margin: 0 0 0.5rem;
				overflow: visible;
`;

const SharedActor = styled.div`
				display: flex;
				flex-wrap: nowrap;
				align-items: center;
				margin-bottom: 0.5rem;
				padding-right: 2.5rem;
				padding: 0.75rem 1rem 0;

				a {
				display: flex;
				margin-right: 0.75rem;
				flex-grow: 1;
				overflow: hidden;
				text-decoration: none;

				img {
				width: 3rem;
				height: 3rem;
		}

		& > div {
				display: flex;
				flex-direction: column;
				flex-grow: 1;
				flex-basis: 0;
				margin-left: 0.5rem;
				overflow: hidden;

				span {
				text-align: left;

				&:first-child {
				font-size: 1.875rem;
				font-weight: 600;
				color: rgba(0, 0, 0, 1);
				}

				&:nth-child(n + 1) {
				font-size: 0.75rem;
				color: rgba(0, 0, 0, 0.6);

				}
			}
		}
	}

				button {
				position: absolute;
				font-size: 2rem;
				font-weight: 700;
				top: 0;
				right: 0.75rem;
				background-color: transparent;
				border: none;
				outline: none;
				cursor: pointer;
	}
`;

const Description = styled.div`
				font-size: 0.75rem;
				text-align: left;
				color: rgba(0, 0, 0, 0.9);
				padding: 0 1rem;
				overflow: hidden;
`;

const SharedImg = styled.div`
				margin-top: 0.5rem;
				width: 100%;
				display: block;
				position: relative;
				background-color: #f9fafb;

				img {
				object-fit: contain;
				width: 100%;
				height: 100%;
	}
`;

const SocialCounts = styled.ul`
	display: flex;
	align-items: center;
	line-height: 1.3;
	overflow: auto;
	margin: 0 1rem;
	padding: 0.5rem 0;
	border-bottom: 1px solid #e9e5df;
	list-style: none;
	li {
		margin-right: 0.313rem;
		font-size: 0.875rem;
		button {
			display: flex;
			align-items: center;
		}
	}
`;

export default Main;
