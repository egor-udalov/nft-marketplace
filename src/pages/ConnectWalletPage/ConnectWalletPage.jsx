import ImageComponent from '../../features/ImageComponent';
import Style from './ConnectWalletPage.module.scss';

function ConnectWalletPage() {
	return (
		<div className={Style.connectWalletPage}>
			<div class='content-container'>
				<section className={Style.connectWallet}>
					<div className={Style.connectWallet__image}>
						<ImageComponent
							defaultImagePath='images/connect_wallet.png'
							mobileImagePath='images/connect_wallet_mobile.png'
						/>
					</div>
					<div className={Style.connectWallet__contentContainer}>
						<h2 className={Style.connectWallet__title}>Connect wallet</h2>
						<p className={Style.connectWallet__description}>
							Choose a wallet you want to connect. There are several wallet
							providers.
						</p>
						<div className={Style.connectWallet__buttonsWrapper}>
							<button className={Style.connectWallet__button}>
								<img src='images/Metamask.svg' />
								Metamask
							</button>
							<button className={Style.connectWallet__button}>
								<img src='images/WalletConnect.svg' />
								Wallet Connect
							</button>
							<button className={Style.connectWallet__button}>
								<img src='images/Coinbase.svg' />
								Coinbase
							</button>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default ConnectWalletPage;
