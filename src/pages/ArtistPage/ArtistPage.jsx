import Style from './ArtistPage.module.scss';
import NftCard from '../../entities/NftCard/NftCard';

import { ReactComponent as DiscordIcon } from '../../assets/svg-icons/discord_icon.svg';
import { ReactComponent as YouTubeIcon } from '../../assets/svg-icons/youtube_icon.svg';
import { ReactComponent as TwitterIcon } from '../../assets/svg-icons/twitter_icon.svg';
import { ReactComponent as InstagramIcon } from '../../assets/svg-icons/instagram_icon.svg';
import { ReactComponent as GlobeIcon } from '../../assets/svg-icons/globe_icon.svg';

function ArtistPage() {
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
		<section className={Style.artistPage}>
			<img src='images/artist_page_bg.png' className={Style.artistPage_bg} />
			<div className='content-container'>
				<div className={Style.artistInfo}>
					<img
						src='images/artist_page_avatar.png'
						className={Style.artistInfo__avatarImage}
					/>
					<div className={Style.artistInfo__nameWrapper}>
						<h2 className={Style.artistInfo__name}>Animakid</h2>
						<div className={Style.artistInfo__buttonsWrapper}>
							<button className={Style.artistInfo__buttonCopy}>
								<img src='images/copy_icon.svg' />
								0xc0E3...B79C
							</button>
							<button className={Style.artistInfo__buttonFollow}>
								<img src='images/plus_icon.png' />
								Follow
							</button>
						</div>
					</div>
					<div className={Style.artistInfo__statisticsWrapper}>
						<div className={Style.statistic}>
							<h4 className={Style.statistic__number}>250k+</h4>
							<p className={Style.statistic__description}>Volume</p>
						</div>
						<div className={Style.statistic}>
							<p className={Style.statistic__number}>50+</p>
							<p className={Style.statistic__description}>NFTs Sold</p>
						</div>
						<div className={Style.statistic}>
							<p className={Style.statistic__number}>3000+</p>
							<p className={Style.statistic__description}>Followers</p>
						</div>
					</div>
					<h5 className={Style.artistInfo__descriptionTitle}>Bio</h5>
					<p className={Style.artistInfo__description}>
						The internet's friendliest designer kid.
					</p>
					<h5 className={Style.artistInfo__descriptionTitle}>Links</h5>
					<div className={Style.artistInfo__wrapperLinks}>
						<a href='#' className={Style.artistInfo__link}>
							<GlobeIcon />
						</a>
						<a href='#' className={Style.artistInfo__link}>
							<DiscordIcon />
						</a>
						<a href='#' className={Style.artistInfo__link}>
							<YouTubeIcon />
						</a>
						<a href='#' className={Style.artistInfo__link}>
							<TwitterIcon />
						</a>
						<a href='#' className={Style.artistInfo__link}>
							<InstagramIcon />
						</a>
					</div>
				</div>
				<div className={Style.artistPage__nftCategories}>
					<button className={Style.artistPage__category}>
						Created
						<span className={Style.artistPage__category__number}>302</span>
					</button>
					<button className={Style.artistPage__category}>
						Owned
						<span className={Style.artistPage__category__number}>67</span>
					</button>
					<button className={Style.artistPage__category}>
						Category
						<span className={Style.artistPage__category__number}>4</span>
					</button>
				</div>
				<div className={Style.artistPage__nftCards}>
					{nftCard.map(nftCard => (
						<a href='#'>
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
			</div>
		</section>
	);
}

export default ArtistPage;
