import Style from './NftPage.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import Author from '../../shared/Author/Author';
import InteractiveButton from '../../shared/InteractiveButton/InteractiveButton';
import NftCard from '../../entities/NftCard/NftCard';
import { ReactComponent as ArrowRightIcon } from '../../assets/svg-icons/arrow_right_icon.svg';
import { ReactComponent as GlobeIcon } from '../../assets/svg-icons/globe_icon.svg';

function NftPage() {
	const navigate = useNavigate();

	const navigateHandleClick = () => {
		navigate('/');
		window.scrollTo(0, 0);
	};
	const nftCard = [
		{
			imgSrc: 'images/nft_card_distant_galaxy.png',
			imgSrcDesktopAvif: 'images/nft_card_distant_galaxy_desktop.avif',
			imgSrcDesktopAvif2x: 'images/nft_card_distant_galaxy_desktop2x.avif',
			imgSrcDesktopWebp: 'images/nft_card_distant_galaxy_desktop.webp',
			imgSrcDesktopWebp2x: 'images/nft_card_distant_galaxy_desktop2x.webp',
			imgSrcMobileAvif: 'images/nft_card_distant_galaxy_mobile.avif',
			imgSrcMobileWebp: 'images/nft_card_distant_galaxy_mobile.webp',
			cardName: 'Distant Galaxy',
			authorAvatar: 'images/animakid-avatar.png',
			authorName: 'Animakid',
			price: 1.63,
			highestBid: 0.33,
		},
		{
			imgSrc: 'images/nft_card_distant_life_on_edena.png',
			imgSrcDesktopAvif: 'images/nft_card_distant_life_on_edena_desktop.avif',
			imgSrcDesktopAvif2x:
				'images/nft_card_distant_life_on_edena_desktop2x.avif',
			imgSrcDesktopWebp: 'images/nft_card_distant_life_on_edena_desktop.webp',
			imgSrcDesktopWebp2x:
				'images/nft_card_distant_life_on_edena_desktop2x.webp',
			imgSrcMobileAvif: 'images/nft_card_distant_life_on_edena_mobile.avif',
			imgSrcMobileWebp: 'images/nft_card_distant_life_on_edena_mobile.webp',
			cardName: 'Life On Edena',
			authorAvatar: 'images/animakid-avatar.png',
			authorName: 'Animakid',
			price: 1.63,
			highestBid: 0.33,
		},
		{
			imgSrc: 'images/nft_card_distant_astro_fiction.png',
			imgSrcDesktopAvif: 'images/nft_card_distant_astro_fiction_desktop.avif',
			imgSrcDesktopAvif2x:
				'images/nft_card_distant_astro_fiction_desktop2x.avif',
			imgSrcDesktopWebp: 'images/nft_card_distant_astro_fiction_desktop.webp',
			imgSrcDesktopWebp2x:
				'images/nft_card_distant_astro_fiction_desktop2x.webp',
			imgSrcMobileAvif: 'images/nft_card_distant_astro_fiction_mobile.avif',
			imgSrcMobileWebp: 'images/nft_card_distant_astro_fiction_mobile.webp',
			cardName: 'AstroFiction',
			authorAvatar: 'images/animakid-avatar.png',
			authorName: 'Animakid',
			price: 1.63,
			highestBid: 0.33,
		},
		{
			imgSrc: 'images/nft_card_distant_life_on_edena.png',
			imgSrcDesktopAvif: 'images/nft_card_distant_life_on_edena_desktop.avif',
			imgSrcDesktopAvif2x:
				'images/nft_card_distant_life_on_edena_desktop2x.avif',
			imgSrcDesktopWebp: 'images/nft_card_distant_life_on_edena_desktop.webp',
			imgSrcDesktopWebp2x:
				'images/nft_card_distant_life_on_edena_desktop2x.webp',
			imgSrcMobileAvif: 'images/nft_card_distant_life_on_edena_mobile.avif',
			imgSrcMobileWebp: 'images/nft_card_distant_life_on_edena_mobile.webp',
			cardName: 'Life On Edena',
			authorAvatar: 'images/animakid-avatar.png',
			authorName: 'Animakid',
			price: 1.63,
			highestBid: 0.33,
		},
		{
			imgSrc: 'images/nft_card_distant_astro_fiction.png',
			imgSrcDesktopAvif: 'images/nft_card_distant_astro_fiction_desktop.avif',
			imgSrcDesktopAvif2x:
				'images/nft_card_distant_astro_fiction_desktop2x.avif',
			imgSrcDesktopWebp: 'images/nft_card_distant_astro_fiction_desktop.webp',
			imgSrcDesktopWebp2x:
				'images/nft_card_distant_astro_fiction_desktop2x.webp',
			imgSrcMobileAvif: 'images/nft_card_distant_astro_fiction_mobile.avif',
			imgSrcMobileWebp: 'images/nft_card_distant_astro_fiction_mobile.webp',
			cardName: 'AstroFiction',
			authorAvatar: 'images/animakid-avatar.png',
			authorName: 'Animakid',
			price: 1.63,
			highestBid: 0.33,
		},
		{
			imgSrc: 'images/nft_card_distant_galaxy.png',
			imgSrcDesktopAvif: 'images/nft_card_distant_galaxy_desktop.avif',
			imgSrcDesktopAvif2x: 'images/nft_card_distant_galaxy_desktop2x.avif',
			imgSrcDesktopWebp: 'images/nft_card_distant_galaxy_desktop.webp',
			imgSrcDesktopWebp2x: 'images/nft_card_distant_galaxy_desktop2x.webp',
			imgSrcMobileAvif: 'images/nft_card_distant_galaxy_mobile.avif',
			imgSrcMobileWebp: 'images/nft_card_distant_galaxy_mobile.webp',
			cardName: 'Distant Galaxy',
			authorAvatar: 'images/animakid-avatar.png',
			authorName: 'Animakid',
			price: 1.63,
			highestBid: 0.33,
		},
		{
			imgSrc: 'images/nft_card_distant_astro_fiction.png',
			imgSrcDesktopAvif: 'images/nft_card_distant_astro_fiction_desktop.avif',
			imgSrcDesktopAvif2x:
				'images/nft_card_distant_astro_fiction_desktop2x.avif',
			imgSrcDesktopWebp: 'images/nft_card_distant_astro_fiction_desktop.webp',
			imgSrcDesktopWebp2x:
				'images/nft_card_distant_astro_fiction_desktop2x.webp',
			imgSrcMobileAvif: 'images/nft_card_distant_astro_fiction_mobile.avif',
			imgSrcMobileWebp: 'images/nft_card_distant_astro_fiction_mobile.webp',
			cardName: 'AstroFiction',
			authorAvatar: 'images/animakid-avatar.png',
			authorName: 'Animakid',
			price: 1.63,
			highestBid: 0.33,
		},
		{
			imgSrc: 'images/nft_card_distant_galaxy.png',
			imgSrcDesktopAvif: 'images/nft_card_distant_galaxy_desktop.avif',
			imgSrcDesktopAvif2x: 'images/nft_card_distant_galaxy_desktop2x.avif',
			imgSrcDesktopWebp: 'images/nft_card_distant_galaxy_desktop.webp',
			imgSrcDesktopWebp2x: 'images/nft_card_distant_galaxy_desktop2x.webp',
			imgSrcMobileAvif: 'images/nft_card_distant_galaxy_mobile.avif',
			imgSrcMobileWebp: 'images/nft_card_distant_galaxy_mobile.webp',
			cardName: 'Distant Galaxy',
			authorAvatar: 'images/animakid-avatar.png',
			authorName: 'Animakid',
			price: 1.63,
			highestBid: 0.33,
		},
		{
			imgSrc: 'images/nft_card_distant_life_on_edena.png',
			imgSrcDesktopAvif: 'images/nft_card_distant_life_on_edena_desktop.avif',
			imgSrcDesktopAvif2x:
				'images/nft_card_distant_life_on_edena_desktop2x.avif',
			imgSrcDesktopWebp: 'images/nft_card_distant_life_on_edena_desktop.webp',
			imgSrcDesktopWebp2x:
				'images/nft_card_distant_life_on_edena_desktop2x.webp',
			imgSrcMobileAvif: 'images/nft_card_distant_life_on_edena_mobile.avif',
			imgSrcMobileWebp: 'images/nft_card_distant_life_on_edena_mobile.webp',
			cardName: 'Life On Edena',
			authorAvatar: 'images/animakid-avatar.png',
			authorName: 'Animakid',
			price: 1.63,
			highestBid: 0.33,
		},
	];

	return (
		<div className={Style.nftPage}>
			<img
				src='images/nft_page_main_image.png'
				className={Style.nftPage__nftImage}
			/>
			<div className='content-container'>
				<section className={Style.nftInfo}>
					<h2 className={Style.nftInfo__title}>The Orbitians</h2>
					<p className={Style.nftInfo__date}>Minted on Sep 30, 2022</p>
					<h5 className={Style.nftInfo__subtitle}>Created By</h5>
					<div className={Style.nftInfo__author}>
						<Author avatar={'images/orbitian_avatar.png'} name={'Orbitian'} />
					</div>
					<h5 className={Style.nftInfo__subtitle}>Description</h5>
					<p className={Style.nftInfo__descriptionText}>
						The Orbitians <br />
						is a collection of 10,000 unique NFTs on the Ethereum blockchain,
						<br />
						<br />
						There are all sorts of beings in the NFT Universe. The most advanced
						and friendly of the bunch are Orbitians.
						<br />
						<br />
						They live in a metal space machines, high up in the sky and only
						have one foot on Earth. These Orbitians are a peaceful race, but
						they have been at war with a group of invaders for many generations.
						The invaders are called Upside-Downs, because of their inverted
						bodies that live on the ground, yet do not know any other way to be.
						Upside-Downs believe that they will be able to win this war if they
						could only get an eye into Orbitian territory, so they've taken to
						make human beings their target.
					</p>
					<h5 className={Style.nftInfo__subtitle}>Details</h5>
					<a href='#' className={Style.nftInfo__link}>
						<GlobeIcon />
						View on Etherscan
					</a>
					<a href='#' className={Style.nftInfo__link}>
						<GlobeIcon />
						View Original
					</a>
					<h5 className={Style.nftInfo__subtitle}>Tags</h5>
					<div className={Style.nftInfo__tagsFlexWrapper}>
						<p className={Style.nftInfo__tags}>Animation</p>
						<p className={Style.nftInfo__tags}>illustration</p>
						<p className={Style.nftInfo__tags}>moon</p>
						<p className={Style.nftInfo__tags}>moon</p>
					</div>
				</section>
				<section className={Style.nftMore}>
					<div className={Style.nftMore__titleFlexWrapper}>
						<h3 className={Style.nftMore__title}>More from this artist</h3>
						<Link to='/artist' onClick={navigateHandleClick}>
							<InteractiveButton
								className={Style.nftMore__button}
								color={'dark'}
								svg={<ArrowRightIcon />}
								text={'Go To Artist Page'}
							/>
						</Link>
					</div>
					<div className={Style.nftMore__nftCards}>
						{nftCard.map(nftCard => (
							<a href='/nft'>
								<NftCard
									imgSrc={nftCard.imgSrc}
									imgSrcDesktopAvif={nftCard.imgSrcDesktopAvif}
									imgSrcDesktopAvif2x={nftCard.imgSrcDesktopAvif2x}
									imgSrcDesktopWebp={nftCard.imgSrcDesktopWebp}
									imgSrcDesktopWebp2x={nftCard.imgSrcDesktopWebp2x}
									imgSrcMobileAvif={nftCard.imgSrcMobileAvif}
									imgSrcMobileWebp={nftCard.imgSrcMobileWebp}
									cardName={nftCard.cardName}
									authorAvatar={nftCard.authorAvatar}
									authorName={nftCard.authorName}
									price={nftCard.price}
									highestBid={nftCard.highestBid}
								/>
							</a>
						))}
					</div>
				</section>
			</div>
		</div>
	);
}

export default NftPage;
