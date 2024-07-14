import Style from './HeroSection.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import InteractiveButton from '../../shared/InteractiveButton/InteractiveButton';
import { ReactComponent as GetStartedIcon } from '../../assets/svg-icons/get_started_icon.svg';
function HeroSection() {
	const navigate = useNavigate();

	const navigateHandleClick = () => {
		navigate('/');
		window.scrollTo(0, 0);
	};
	return (
		<div class='content-container'>
			<section className={Style.hero}>
				<h1 className={Style.hero__title}>
					Discover digital art &amp;&nbsp;Collect NFTs
				</h1>
				<p className={Style.hero__descr}>
					NFT marketplace&nbsp;UI created with Anima for Figma. Collect, buy and
					sell art from more than 20k NFT artists.
				</p>
				<Link to='/create-account' onClick={navigateHandleClick}>
					<InteractiveButton
						className={Style.hero__btn}
						color={'primary'}
						svg={<GetStartedIcon />}
						text={'Get Started'}
					/>
				</Link>
				<div className={Style.hero__additionalInfo}>
					<div className={Style.hero__statistic}>
						<h4>240k+</h4>
						<p>Total Sale</p>
					</div>
					<div className={Style.hero__statistic}>
						<h4>100k+</h4>
						<p>Auctions</p>
					</div>
					<div className={Style.hero__statistic}>
						<h4>240k+</h4>
						<p>Artists</p>
					</div>
				</div>
				<Link
					to='/nft'
					onClick={navigateHandleClick}
					className={Style.highlightedNft}
				>
					<picture>
						<source
							srcset='images/highlighted_nft_image_desktop.avif, images/highlighted_nft_image_desktop2x.avif 2x'
							type='image/avif'
							media='(min-width: 521px)'
						/>
						<source
							srcset='images/highlighted_nft_image_desktop.webp, images/highlighted_nft_image_desktop2x.webp 2x'
							type='image/webp'
							media='(min-width: 521px)'
						/>
						<source
							srcset='images/highlighted_nft_image_mobile.avif'
							type='image/avif'
							media='(max-width: 520px)'
						/>
						<source
							srcset='images/highlighted_nft_image_mobile.webp'
							type='image/webp'
							media='(max-width: 520px)'
						/>
						<img
							src='images/highlighted_nft_image.jpg'
							alt='nft image'
							className={Style.highlightedNft__image}
						/>
					</picture>
					<p className={Style.highlightedNft__descr}>Space Walking</p>
					<div className={Style.highlightedNft__author}>
						<img
							src='images/highlighted_nft_author_avatar.png'
							alt='author avatar'
							className={Style.highlightedNft__authorAvatar}
						/>
						<p className={Style.highlightedNft__authorName}>Animakid</p>
					</div>
				</Link>
			</section>
		</div>
	);
}

export default HeroSection;
