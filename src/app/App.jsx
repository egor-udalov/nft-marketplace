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
						</Routes>
					</BrowserRouter>
				</main>
			</div>
			<Footer />
		</>
	);
}

export default App;
