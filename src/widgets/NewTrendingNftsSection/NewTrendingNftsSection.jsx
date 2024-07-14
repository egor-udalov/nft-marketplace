import Style from './NewTrendingNftsSection.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import InteractiveButton from '../../shared/InteractiveButton/InteractiveButton';
import { ReactComponent as WatchingIcon } from '../../assets/svg-icons/watching_icon.svg';
import TitleSection from '../../shared/TitleSection/TitleSection';
import DescriptionSection from '../../shared/DescriptionSection/DescriptionSection';
import NftCard from '../../entities/NftCard/NftCard';

function NewTrendingNftsSection() {
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
			authorAvatar: 'images/nft_card_distant_galaxy_author_avatar.png',
			authorName: 'MoonDancer',
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
			authorAvatar: 'images/nft_card_life _on_edena_author_avatar.png',
			authorName: 'NebulaKid',
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
			authorAvatar: 'images/nft_card_astro_fiction_author_avatar.png',
			authorName: 'Spaceone',
			price: 1.63,
			highestBid: 0.33,
		},
	];

	return (
		<div class='content-container'>
			<section className={Style.newTrendingNfts}>
				<TitleSection
					className={Style.newTrendingNfts__title}
					text={'Discover More NFTs'}
				/>
				<DescriptionSection
					className={Style.newTrendingNfts__descr}
					text={'Explore new trending NFTs'}
				/>
				<Link to='/marketplace' onClick={navigateHandleClick}>
					<InteractiveButton
						className={Style.newTrendingNfts__btn}
						color={'dark'}
						svg={<WatchingIcon />}
						text={'See All'}
					/>
				</Link>
				<div className={Style.newTrendingNfts__nftCards}>
					{nftCard.map(nftCard => (
						<Link to='/nft' onClick={navigateHandleClick}>
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
						</Link>
					))}
				</div>
			</section>
		</div>
	);
}

export default NewTrendingNftsSection;
