import Style from './BrowseCategoriesSection.module.scss';
import TitleSection from '../../shared/TitleSection/TitleSection';

function BrowseCategoriesSection() {
	const categoryCards = [
		{
			navLink: '#',
			image: 'images/browse_categories_art.png',
			icon: 'images/browse_categories_art_icon.png',
			title: 'Art',
		},
		{
			navLink: '#',
			image: 'images/browse_categories_collectibles.png',
			icon: 'images/browse_categories_collectibles_icon.png',
			title: 'Collectibles',
		},
		{
			navLink: '#',
			image: 'images/browse_categories_music.png',
			icon: 'images/browse_categories_music_icon.png',
			title: 'Music',
		},
		{
			navLink: '#',
			image: 'images/browse_categories_photography.png',
			icon: 'images/browse_categories_photography_icon.png',
			title: 'Photography',
		},
		{
			navLink: '#',
			image: 'images/browse_categories_video.png',
			icon: 'images/browse_categories_video_icon.png',
			title: 'Video',
		},
		{
			navLink: '#',
			image: 'images/browse_categories_utility.png',
			icon: 'images/browse_categories_utility_icon.png',
			title: 'Utility',
		},
		{
			navLink: '#',
			image: 'images/browse_categories_sport.png',
			icon: 'images/browse_categories_sport_icon.png',
			title: 'Sport',
		},
		{
			navLink: '#',
			image: 'images/browse_categories_virtual_worlds.png',
			icon: 'images/browse_categories_virtual_worlds_icon.png',
			title: 'Virtual Worlds',
		},
	];

	return (
		<div class='content-container'>
			<section className={Style.browseCategories}>
				<TitleSection
					className={Style.browseCategories__title}
					text={'Browse Categories'}
				/>
				<div className={Style.browseCategories__categoriesContainer}>
					{categoryCards.map(categoryCard => (
						<a href={categoryCard.navLink} className={Style.categoryCard}>
							<div className={Style.categoryCard__imageContainer}>
								<img
									src={categoryCard.image}
									className={Style.categoryCard__imageContainer__image}
								/>
								<img
									src={categoryCard.icon}
									className={Style.categoryCard__imageContainer__icon}
								/>
							</div>
							<h5 className={Style.categoryCard__title}>
								{categoryCard.title}
							</h5>
						</a>
					))}
				</div>
			</section>
		</div>
	);
}

export default BrowseCategoriesSection;
