import Style from './GallerySection.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import DescriptionSection from '../../shared/DescriptionSection/DescriptionSection';
import TitleSection from '../../shared/TitleSection/TitleSection';
import Author from '../../shared/Author/Author';

function GallerySection() {
	const navigate = useNavigate();

	const navigateHandleClick = () => {
		navigate('/');
		window.scrollTo(0, 0);
	};

	const collection = [
		{
			link: '/artist',
			image_main: 'images/DSGN_Animals_main.png',
			image_small_1: 'images/DSGN_Animals_small_1.png',
			image_small_2: 'images/DSGN_Animals_small_2.png',
			image_small_3: 'images/DSGN_Animals_small_3.png',
			collection_name: 'DSGN Animals',
			author_avatar: 'images/mrfox-avatar.png',
			author_name: 'MrFox',
		},

		{
			link: '/artist',
			image_main: 'images/Magic_Mushrooms_main.png',
			image_small_1: 'images/Magic_Mushrooms_small_1.png',
			image_small_2: 'images/Magic_Mushrooms_small_2.png',
			image_small_3: 'images/Magic_Mushrooms_small_3.png',
			collection_name: 'Magic Mushrooms',
			author_avatar: 'images/shroomie-avatar.png',
			author_name: 'Shroomie',
		},

		{
			link: '/artist',
			image_main: 'images/Disco_Machines_main.png',
			image_small_1: 'images/Disco_Machines_small_1.png',
			image_small_2: 'images/Disco_Machines_small_2.png',
			image_small_3: 'images/Disco_Machines_small_3.png',
			collection_name: 'Disco Machines',
			author_avatar: 'images/BeKind2Robots-avatar.png',
			author_name: 'BeKind2Robots',
		},
	];

	return (
		<div class='content-container'>
			<section class={Style.gallery}>
				<TitleSection text={'Trending Collection'} />
				<DescriptionSection
					text={'Checkout our weekly updated trending collection.'}
				/>
				<div className={Style.gallery__collections_container}>
					{collection.map(collection => (
						<Link
							to={collection.link}
							onClick={navigateHandleClick}
							className={Style.gallery__collection}
						>
							<img
								className={Style.gallery__image_main}
								src={collection.image_main}
							/>
							<img
								className={Style.gallery__image_small_1}
								src={collection.image_small_1}
							/>
							<img
								className={Style.gallery__image_small_2}
								src={collection.image_small_2}
							/>
							<img
								className={Style.gallery__image_small_3}
								src={collection.image_small_3}
							/>
							<h5 className={Style.gallery__collection_name}>
								{collection.collection_name}
							</h5>
							<div className={Style.gallery__author}>
								<Author
									avatar={collection.author_avatar}
									name={collection.author_name}
								/>
							</div>
						</Link>
					))}
				</div>
			</section>
		</div>
	);
}

export default GallerySection;
