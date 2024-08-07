import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/reset.css';
import './styles/vars.css';
import './styles/fonts.css';
import './styles/base-styles.css';

import Header from '../widgets/Header/Header';
import MainPage from '../pages/MainPage';
import CreateAccountPage from '../pages/CreateAccountPage/CreateAccountPage';
import Footer from '../widgets/Footer/Footer';
import ConnectWalletPage from '../pages/ConnectWalletPage/ConnectWalletPage';
import ArtistPage from '../pages/ArtistPage/ArtistPage';
import NftPage from '../pages/NftPage/NftPage';
import MarketplacePage from '../pages/MarketplacePage/MarketplacePage';
import RankingsPage from '../pages/RankingsPage/RankingsPage';

function App() {
	return (
		<>
			<div class='page-container'>
				<Header />
				<main class='main'>
					<BrowserRouter>
						<Routes>
							<Route path='/' element={<MainPage />} />
							<Route path='/create-account' element={<CreateAccountPage />} />
							<Route path='/connect-wallet' element={<ConnectWalletPage />} />
							<Route path='/artist' element={<ArtistPage />} />
							<Route path='/nft' element={<NftPage />} />
							<Route path='/marketplace' element={<MarketplacePage />} />
							<Route path='/rankings' element={<RankingsPage />} />
						</Routes>
					</BrowserRouter>
				</main>
			</div>
			<Footer />
		</>
	);
}

export default App;
