import Style from './Footer.module.scss';
import { ReactComponent as DiscordIcon } from '../../assets/svg-icons/discord_icon.svg';
import { ReactComponent as YouTubeIcon } from '../../assets/svg-icons/youtube_icon.svg';
import { ReactComponent as TwitterIcon } from '../../assets/svg-icons/twitter_icon.svg';
import { ReactComponent as InstagramIcon } from '../../assets/svg-icons/instagram_icon.svg';

function Footer() {
	return (
		<footer className={Style.footer}>
			<div class='content-container'>
				<div className={Style.footer__body}>
					<div className={Style.footerLogo}>
						<img
							src='images/logo_header.svg'
							alt=''
							loading='lazy'
							className={Style.footerLogo__icon}
						/>
						<img
							src='images/nft_marketplace.svg'
							alt=''
							loading='lazy'
							className={Style.footerLogo__name}
						/>
					</div>
					<p className={Style.footer__info}>
						NFT marketplace UI created with Anima for Figma.
					</p>
					<div className={Style.joinOurCommunity}>
						<p className={Style.joinOurCommunity__text}>Join our community</p>
						<div className={Style.joinOurCommunity__wrapperLinks}>
							<a href='#' className={Style.joinOurCommunity__link}>
								<DiscordIcon />
							</a>

							<a href='#' className={Style.joinOurCommunity__link}>
								<YouTubeIcon />
							</a>

							<a href='#' className={Style.joinOurCommunity__link}>
								<TwitterIcon />
							</a>

							<a href='#' className={Style.joinOurCommunity__link}>
								<InstagramIcon />
							</a>
						</div>
					</div>

					<h5
						className={`${Style.footer__subtitle} ${Style.footer__subtitle1}`}
					>
						Explore
					</h5>

					<div className={Style.footer__wrapperPageLinks}>
						<a href='/marketplace' className={Style.footer__pageLink}>
							Marketplace
						</a>
						<a href='/rankings' className={Style.footer__pageLink}>
							Rankings
						</a>
						<a href='/connect-wallet' className={Style.footer__pageLink}>
							Connect a wallet
						</a>
					</div>

					<h5
						className={`${Style.footer__subtitle} ${Style.footer__subtitle2}`}
					>
						Join our weekly digest
					</h5>

					<div className={Style.joinDigest}>
						<p className={Style.joinDigest__text}>
							Get exclusive promotions &amp;&nbsp;updates straight to&nbsp;your
							inbox.
						</p>
						<form className=''></form>
					</div>
				</div>

				<span className={Style.footer__divider}></span>
				<span className={Style.footer__copyrightMark}>
					Ⓒ NFT Market. Use this template freely.
				</span>
			</div>
		</footer>
	);
}

export default Footer;
