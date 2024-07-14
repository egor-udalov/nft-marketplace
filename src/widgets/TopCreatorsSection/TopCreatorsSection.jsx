import Style from './TopCreatorsSection.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import InteractiveButton from '../../shared/InteractiveButton/InteractiveButton';
import { ReactComponent as GetStartedIcon } from '../../assets/svg-icons/get_started_icon.svg';
import DescriptionSection from '../../shared/DescriptionSection/DescriptionSection';
import TitleSection from '../../shared/TitleSection/TitleSection';
import CreatorCard from '../../shared/CreatorCard/CreatorCard';

function TopCreatorsSection() {
	const navigate = useNavigate();

	const navigateHandleClick = () => {
		navigate('/');
		window.scrollTo(0, 0);
	};

	const creators = [
		{
			number: 1,
			avatar: 'images/keepitreal-avatar.png',
			name: 'Keepitreal',
			totalAmount: '34.53 ETH',
		},
		{
			number: 2,
			avatar: 'images/digilab-avatar.png',
			name: 'DigiLab',
			totalAmount: '34.53 ETH',
		},
		{
			number: 3,
			avatar: 'images/gravityone-avatar.png',
			name: 'GravityOne',
			totalAmount: '34.53 ETH',
		},
		{
			number: 4,
			avatar: 'images/juanie-avatar.png',
			name: 'Juanie',
			totalAmount: '34.53 ETH',
		},
		{
			number: 5,
			avatar: 'images/bluewhale-avatar.png',
			name: 'BlueWhale',
			totalAmount: '34.53 ETH',
		},
		{
			number: 6,
			avatar: 'images/mrfox-avatar.png',
			name: 'mr fox',
			totalAmount: '34.53 ETH',
		},
		{
			number: 7,
			avatar: 'images/shroomie-avatar.png',
			name: 'Shroomie',
			totalAmount: '34.53 ETH',
		},
		{
			number: 8,
			avatar: 'images/robotica-avatar.png',
			name: 'robotica',
			totalAmount: '34.53 ETH',
		},
		{
			number: 9,
			avatar: 'images/rustyrobot-avatar.png',
			name: 'RustyRobot',
			totalAmount: '34.53 ETH',
		},
		{
			number: 10,
			avatar: 'images/animakid-avatar.png',
			name: 'animakid',
			totalAmount: '34.53 ETH',
		},
		{
			number: 11,
			avatar: 'images/dotgu-avatar.png',
			name: 'Dotgu',
			totalAmount: '34.53 ETH',
		},
		{
			number: 12,
			avatar: 'images/ghiblier-avatar.png',
			name: 'Ghiblier',
			totalAmount: '34.53 ETH',
		},
	];

	return (
		<div class='content-container'>
			<section className={Style.topCreators}>
				<TitleSection
					className={Style.topCreators__title}
					text={'Top creators'}
				/>
				<DescriptionSection
					className={Style.topCreators__descr}
					text={'Checkout Top Rated Creators on the NFT Marketplace'}
				/>
				<Link to='/rankings' onClick={navigateHandleClick}>
					<InteractiveButton
						className={Style.topCreators__btn}
						color={'dark'}
						svg={<GetStartedIcon />}
						text={'View Rankings'}
					/>
				</Link>
				<div className={Style.topArtistCards}>
					{creators.map(creator => (
						<Link
							key={creator.number}
							to='/artist'
							onClick={navigateHandleClick}
						>
							<CreatorCard
								number={creator.number}
								avatar={creator.avatar}
								name={creator.name}
								totalAmount={creator.totalAmount}
							/>
						</Link>
					))}
				</div>
			</section>
		</div>
	);
}

export default TopCreatorsSection;
