import Style from './MarketplacePage.module.scss';
import NftCard from '../../entities/NftCard/NftCard';

function MarketplacePage() {
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
		<section className={Style.marketplace}>
			<div className='content-container'>
				<h2 className={Style.marketplace__title}>Browse Marketplace</h2>
				<p className={Style.marketplace__description}>
					Browse through more than 50k NFTs on the NFT Marketplace.
				</p>
			</div>
			<section className={Style.nftCards}>
				<div className='content-container'>
					<div className={Style.nftCards__flexWrapper}>
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
				</div>
			</section>
		</section>
	);
}

export default MarketplacePage;
