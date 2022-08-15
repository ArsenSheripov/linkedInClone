import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import styled from 'styled-components';
import closeIco from '../../assets/images/close-svgrepo-com.svg';
import userImg from '../../assets/images/user.svg';
import photoIco from "../../assets/images/photo-icon.svg";
import videoIco from "../../assets/images/video-icon.svg";
import commentIco from "../../assets/images/comment-icon.svg";
import './postModal.css';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';
import { postArticleAPI } from '../../actions';

const PostModal = (props) => {
	const [editorText, setEditorText] = useState('');
	const [shareImage, setShareImage] = useState('');
	const [videoLink, setVideoLink] = useState('');
	const [assetArrea, setAssetArea] = useState('');

	const handleChange = (e) => {
		const image = e.target.files[0];

		if (image === '' || image === undefined) {
			alert(`not an image, the file is a ${typeof image}`)
			return;
		}

		setShareImage(image)
	}

	const switchAssetArea = (area) => {
		setShareImage('');
		setVideoLink('');
		setAssetArea(area);
	}

	const postArticle = (e) => {
		e.preventDefault();
		if (e.target !== e.currentTarget) {
			return;
		}
		const payload = {
			image: shareImage,
			video: videoLink,
			user: props.user,
			description: editorText,
			timestamp: firebase.firestore.Timestamp.now(),
		}
		props.postArticle(payload)
		reset()
	}

	const reset = () => {
		props.setShowModal(false);
		setEditorText('');
		setShareImage('');
		setVideoLink('');
		setAssetArea('');
	}

	return (
		<div className={props.showModal ? 'modal active' : 'modal'} onClick={() => props.setShowModal(false)}>
			<Content onClick={e => e.stopPropagation()}>
				<Header>
					<h2>Create a post</h2>
					<button onClick={() => reset()}>
						<img src={closeIco} alt="" />
					</button>
				</Header>
				<SharedContent>
					<UserInfo>
						{props.user.photoURL
							?
							<img src={props.user.photoURL} alt="user" />
							:
							<img src={userImg} alt="user" />
						}
						<span>{props.user.displayName}</span>
					</UserInfo>

					<Editor>
						<textarea
							value={editorText}
							onChange={(e) => setEditorText(e.target.value)}
							placeholder="What do you want to talk about?"
							autoFocus={true}
						/>
						{assetArrea === 'image'
							?
							<UploadImage>
								<input
									type="file"
									accept='image/gif, image/jpg, image/png'
									name='image'
									id='file'
									style={{ display: 'none' }}
									onChange={handleChange}
								/>
								<p>
									<label htmlFor="file">
										Select an image to share
									</label>
								</p>
								{shareImage && <img src={URL.createObjectURL(shareImage)} />}
							</UploadImage>
							:
							assetArrea === 'media' &&
							<>
								<input
									type="text"
									placeholder='Please input a video link'
									value={videoLink}
									onChange={(e) => setVideoLink(e.target.value)}
								/>
								{videoLink &&
									<ReactPlayer width={'100%'} url={videoLink} />
								}
							</>}
					</Editor>
				</SharedContent>
				<SharedCreation>
					<AttachAssets>
						<AssetButton onClick={() => switchAssetArea('image')}>
							<img src={photoIco} alt="photoIco" />
						</AssetButton>
						<AssetButton onClick={() => switchAssetArea('media')}>
							<img src={videoIco} alt="videoIco" />
						</AssetButton>
					</AttachAssets>

					<ShareComment>
						<AssetButton>
							<img src={commentIco} alt="videoIco" />
							Anyone
						</AssetButton>
					</ShareComment>

					<PostButton
						disabled={!editorText ? true : false}
						onClick={(e) => postArticle(e)}
					>
						Post
					</PostButton>
				</SharedCreation>
			</Content>
		</div>
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
	background-color:${(props) => props.disabled ? 'rgba(0, 0, 0, 0.8)' : '#0a66c2'};
	border-radius: 1.25rem;
	border: none;
	cursor: pointer;

	&:hover{
		background-color: ${(props) => props.disabled ? 'rgba(0, 0, 0, 0.8)' : '#004182'} ;
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

const UploadImage = styled.div`
	text-align: center;
	img {
		max-width: 100%;
	}
`;

const mapStateToProps = (state) => {
	return {
		user: state.userState.user
	}
};

const mapDispatchToProps = (dispatch) => ({
	postArticle: (payload) => dispatch(postArticleAPI(payload))
});


export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
