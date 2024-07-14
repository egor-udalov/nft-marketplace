import React, { useEffect, useState } from 'react';

import Style from './Header.module.scss';
import InteractiveButton from '../../shared/InteractiveButton/InteractiveButton';
import { ReactComponent as AuthorizationIcons } from '../../assets/svg-icons/authorization_icons.svg';

function Header() {
	const [isActive, setIsActive] = useState(false);
	const handleBurgerClick = () => {
		setIsActive(!isActive);
	};
	useEffect(() => {
		const body = document.querySelector('body');
		if (body) {
			if (isActive) {
				body.classList.add('lock');
			} else {
				body.classList.remove('lock');
			}
		}
	}, [isActive]);

	return (
		<header className={Style.header}>
			<div className={Style.header__body}>
				<div className={Style.headerLogo}>
					<img
						src='images/logo_header.svg'
						alt=''
						className={Style.headerLogo__icon}
					/>
					<img
						src='images/nft_marketplace.svg'
						alt=''
						className={Style.headerLogo__name}
					/>
				</div>
				<div
					className={`${Style.header__burger} ${isActive ? Style.active : ''}`}
					onClick={handleBurgerClick}
				>
					<span></span>
				</div>
				<nav className={`${Style.header__nav} ${isActive ? Style.active : ''}`}>
					<a href='/marketplace' className={Style.header__navLink}>
						Marketplace
					</a>
					<a href='/rankings' className={Style.header__navLink}>
						Rankings
					</a>
					<a href='/connect-wallet' className={Style.header__navLink}>
						Connect a wallet
					</a>
					<a href='/create-account'>
						<InteractiveButton
							className={Style.header__btnSignUp}
							color={'primary'}
							svg={<AuthorizationIcons />}
							text={'Sign Up'}
						/>
					</a>
				</nav>
			</div>
		</header>
	);
}

export default Header;
