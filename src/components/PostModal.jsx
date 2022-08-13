import React, { useState } from 'react';
import styled from 'styled-components';
import closeIco from '../assets/images/close-svgrepo-com.svg';
import userImg from '../assets/images/user.svg';
import photoIco from "../assets/images/photo-icon.svg";
import videoIco from "../assets/images/video-icon.svg";
import commentIco from "../assets/images/comment-icon.svg";

const PostModal = (props) => {
	const [editorText, setEditorText] = useState('')

	const reset = (e) => {
		setEditorText('')
		props.handleClick(e)
	}

	return (
		<>
			{props.showModal === "open" &&
				<Container>
					<Content>
						<Header>
							<h2>Create a post</h2>
							<button onClick={(event) => reset(event)}>
								<img src={closeIco} alt="" />
							</button>
						</Header>
						<SharedContent>
							<UserInfo>
								<img src={userImg} alt="user" />
								<span>Name</span>
							</UserInfo>

							<Editor>
								<textarea
									value={editorText}
									onChange={(e) => setEditorText(e.target.value)}
									placeholder="What do you want to talk about?"
									autoFocus={true}
								>

								</textarea>
							</Editor>
						</SharedContent>
						<SharedCreation>
							<AttachAssets>
								<AssetButton>
									<img src={photoIco} alt="photoIco" />
								</AssetButton>
								<AssetButton>
									<img src={videoIco} alt="videoIco" />
								</AssetButton>
							</AttachAssets>

							<ShareComment>
								<AssetButton>
									<img src={commentIco} alt="videoIco" />
								</AssetButton>
							</ShareComment>

							<PostButton>
								Post
							</PostButton>
						</SharedCreation>
					</Content>
				</Container>}
		</>
	)
};

let Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 999;
	color: #000;
	background-color: rgba(0, 0, 0, 0.8);
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 34.5rem;
	position: relative;
	max-height: 90%;
	overflow: initial;
	border-radius: 0.313rem;
	top: 2rem;
	margin: 0 auto;
	background-color: #fff;
`;

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1rem;
	padding: 1rem 1.25rem;
	line-height: 1.5;
	border-bottom: 1px solid rgba(0,0,0,0.2);

	button {
		outline: none;
		background-color: transparent;
		border: none;
		cursor: pointer;
		width: 2rem;
		height: 2rem;
	}
`;

const SharedContent = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	overflow-y: auto;
	vertical-align: baseline;
	background-color: transparent;
	padding: 0.5rem 0.75rem;
`;

const UserInfo = styled.div`
	display: flex;
	align-items: center;
	padding: .75rem 1.5rem;
	img {
		width: 3rem;
		height: 3rem;
		background-clip: content-box;
		border: 2px solid transparent;
		border-radius: 50%;
	}

	span {
		font-size: 1rem;
		font-weight: 600;
		line-height: 1.5;
		margin-left: .5rem;
	}
`;

const SharedCreation = styled.div`
	display: flex;
	justify-content: space-between;
	padding: .75rem 1.5rem .75rem 1rem;
`;

const AssetButton = styled.button`
	display: flex;
	align-items: center;
	height: 2.5rem;
	min-width: auto;
	color: rgba(0,0,0,0.5);

`;

const AttachAssets = styled.div`
	display: flex;
	align-items: center;
	padding-right: 0.5rem;
	${AssetButton} {
		width: 2.5rem;
	}
`;

const ShareComment = styled.div`
	padding-left: .5rem;
	margin-right: auto;
	border-left: 1px solid rgba( 0, 0, 0, 0.15);
	${AssetButton} {
		margin-left: .1rem;
	}
`;

const PostButton = styled.button`
	min-width: auto;
	color: white;
	padding: .5rem 1rem;
	background-color: #0a66c2;
	border-radius: 1.25rem;
	border: none;

	&:hover{
		background-color: #004182;
	}
`;

const Editor = styled.div`
	padding: 1rem 1.5rem;
	
	textarea {
		width: 100%;
		resize: none;
		min-height: 6.25rem;
	}

	input {
		width: 100%;
		height: 2.2rem;
		font-size: 1rem;
		margin-bottom: 2.25rem ;
	}
`;

export default PostModal;
