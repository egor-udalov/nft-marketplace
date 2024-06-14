import ImageComponent from '../../features/ImageComponent';
import Style from './CreateAccountPage.module.scss';

function CreateAccountPage() {
	return (
		<div className={Style.createAccountPage}>
			<div class='content-container'>
				<section className={Style.createAccount}>
					<div className={Style.createAccount__image}>
						<ImageComponent
							defaultImagePath='images/create_account.png'
							mobileImagePath='images/create_account_mobile.png'
						/>
					</div>
					<div className={Style.createAccount__contentContainer}>
						<h2 className={Style.createAccount__title}>Create account</h2>
						<p className={Style.createAccount__description}>
							Welcome! enter your details and start creating, collecting and
							selling NFTs.
						</p>
						<form className={Style.createAccount__form}>
							<div className={Style.createAccount__inputWrapper}>
								<input
									type='text'
									required
									minlength='4'
									maxlength='8'
									size='10'
									placeholder='Username'
									className={Style.createAccount__input}
								/>
								<input
									type='email'
									required
									minlength='4'
									maxlength='8'
									size='10'
									placeholder='Email Address'
									className={Style.createAccount__input}
								/>
								<input
									type='password'
									required
									minlength='4'
									maxlength='8'
									size='10'
									placeholder='Password'
									className={Style.createAccount__input}
								/>
								<input
									type='password'
									required
									minlength='4'
									maxlength='8'
									size='10'
									placeholder='Confirm Password'
									className={Style.createAccount__input}
								/>
							</div>
							<button type='submit' className={Style.createAccount__button}>
								Create account
							</button>
						</form>
					</div>
				</section>
			</div>
		</div>
	);
}

export default CreateAccountPage;
