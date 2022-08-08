import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import logo from '../assets/images/home-logo.svg';
import searchIco from '../assets/images/search-icon.svg';
import homeIco from '../assets/images/nav-home.svg';
import networkIco from '../assets/images/nav-network.svg';
import jobsIco from '../assets/images/nav-jobs.svg';
import messageIco from '../assets/images/nav-messaging.svg';
import notificIco from '../assets/images/nav-notifications.svg';
import userImage from '../assets/images/user.svg';
import icoDown from '../assets/images/down-icon.svg';
import icoWork from '../assets/images/nav-work.svg';

const Header = () => {
	const navListItems = [
		{ href: '/home', img: homeIco, name: 'Home' },
		{ href: '/2', img: networkIco, name: 'My Network' },
		{ href: '/3', img: jobsIco, name: 'Jobs' },
		{ href: '/4', img: messageIco, name: 'Messaging' },
		{ href: '/5', img: notificIco, name: 'Notifications' },
	];

	return (
		<Container>
			<Content>
				<Logo>
					<Link to="/home">
						<img src={logo} alt="logo" />
					</Link>
				</Logo>
				<Search>
					<div>
						<input type="text" placeholder='Search' />
					</div>
					<SearchIcon>
						<img src={searchIco} alt="searchIco" />
					</SearchIcon>
				</Search>
				<Nav>
					<NavListWrap>
						{navListItems.map(item =>
							<NavList key={item.href}>
								<Link to={item.href}>
									<img src={item.img} alt={item.name} />
									<span>{item.name}</span>
								</Link>
							</NavList>
						)}

						<User>
							<a>
								<img src={userImage} alt="user" />
								<span>Me</span>
								<img src={icoDown} alt="icoDown" />
							</a>
							<SignOut><a>Sign out</a></SignOut>
						</User>

						<Work>
							<a>
								<img src={icoWork} alt="work" />
								<span>Work
									<img src={icoDown} alt="icoDown" />
								</span>
							</a>
						</Work>
					</NavListWrap>
				</Nav>
			</Content>
		</Container>
	)
}

const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	z-index: 100;
	padding: 0 1.5rem;
	background-color: white;
	border-bottom: 1px solid rgba(0,0,0,0.8);
`;

const Content = styled.div`
	display: flex;
	align-items: center;
	margin: 0 auto;
	min-height: 100%;
	max-width: 70rem;
`;

const Logo = styled.span`
	margin-right: 0.5rem;
	font-size: 0;
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;

const SearchIcon = styled.div`
	width: 2.5rem;
	position: absolute;
	top: 0.625rem;
	left: 0.125rem;
	border-radius: 0 2px 2px 0;
	margin: 0;
	pointer-events: none;
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Nav = styled.nav`
	margin-left: auto;
	display: block;
	@media (max-width: 768px) {
		position: fixed;
		left: 0;
		bottom: 0;
		background-color: white;
		width: 100%;
	}
`;

const NavListWrap = styled.ul`
	display: flex;
	flex-wrap: nowrap;
	list-style-type: none;

	.active {
		span:after {
			content: '';
			transform: scaleX(1);
			border-bottom: 2px solid var(--white, #fff);
			bottom: 0;
			left: 0;
			position: absolute;
			transition: transform 0.2s ease-in-out;
			width: 100%;
			background-color: rgba(0,0,0,0.9);
		}
	}
`;

const NavList = styled.li`
	display: flex;
	align-items: center;
	a {
		background-color: transparent;
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-size: 0.8rem;
		font-weight: 400;
		line-height: 1.5;
		min-height: 2.5rem;
		min-width: 5rem;
		position: relative;
		text-decoration: none;
		span {
			display: flex;
			align-items: center;
			color: rgba(0,0,0,0.6);
		}

		@media (max-width: 768px) {
			min-width: 4.375rem;
		}
	}
	&:hover, &:active {
			a {
				span{
					color: rgba(0,0,0,0.9);
				}
			}
		}
`;

const SignOut = styled.div`
	position: absolute;
	top: 2.8rem;
	background-color: white;
	border-radius: 0 0 5px 5px;
	width:6.25rem;
	height: 2.5rem;
	font-size: 1rem;
	transition: 0.3s;
	text-align: center;
	display: none;
`;

const User = styled(NavList)`
	a > svg {
		width: 1.5rem;
		border-radius: 50%;
	}

	a > img {
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
	}

	span {
		display: flex;
		align-items: center;
	}

	&:hover {
		${SignOut}{
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
`;

const Work = styled(User)`
	border-left: 1px solid rgba(0,0,0,0.08);
`;


export default Header;
