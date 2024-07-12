import Style from './RankingsPage.module.scss';

function RankingsPage() {
	const topCreators = [
		{
			number: 1,
			avatar: 'images/AvatarJaydonEkstromBothman.png',
			name: 'Jaydon Ekstrom Bothman',
			change: '+1.41%',
			NFTsSold: '602',
			volume: '12.4 ETH',
		},
		{
			number: 2,
			avatar: 'images/AvatarRubenCarder.png',
			name: 'Ruben Carder',
			change: '+1.41%',
			NFTsSold: '602',
			volume: '12.4 ETH',
		},
		{
			number: 3,
			avatar: 'images/AvatarAlfredoSeptimus.png',
			name: 'Alfredo Septimus',
			change: '+1.41%',
			NFTsSold: '602',
			volume: '12.4 ETH',
		},
		{
			number: 4,
			avatar: 'images/AvatarDavisFranci.png',
			name: 'Davis Franci',
			change: '+1.41%',
			NFTsSold: '602',
			volume: '12.4 ETH',
		},
		{
			number: 5,
			avatar: 'images/AvatarLiviaRosser.png',
			name: 'Livia Rosser',
			change: '+1.41%',
			NFTsSold: '602',
			volume: '12.4 ETH',
		},
	];
	return (
		<section className={Style.rankings}>
			<div className='content-container'>
				<h2 className={Style.rankings__title}>Top Creators</h2>
				<p className={Style.rankings__description}>
					Check out top ranking NFT artists on the NFT Marketplace.
				</p>
				<div className={`${Style.tableHeader} ${Style.tableItem}`}>
					<div className={Style.tableItem__artist}>
						<div>#</div>
						<div>Artist</div>
					</div>
					<div className={Style.tableItem__statistic}>
						<div>Change</div>
						<div>NFTs Sold</div>
						<div>Volume</div>
					</div>
				</div>
				{topCreators.map(topCreators => (
					<a href='#'>
						<div className={Style.tableItem}>
							<div className={Style.tableItem__artist}>
								<div className={Style.tableItem__artist__number}>
									{topCreators.number}
								</div>
								<img
									src={topCreators.avatar}
									className={Style.tableItem__artist__avatar}
								/>
								<h5 className={Style.tableItem__artist__name}>
									{topCreators.name}
								</h5>
							</div>
							<div className={Style.tableItem__statistic}>
								<div className={Style.tableItem__statistic__change}>
									{topCreators.change}
								</div>
								<div className={Style.tableItem__statistic__NFTsSold}>
									{topCreators.NFTsSold}
								</div>
								<div className={Style.tableItem__statistic__volume}>
									{topCreators.volume}
								</div>
							</div>
						</div>
					</a>
				))}
			</div>
		</section>
	);
}

export default RankingsPage;
