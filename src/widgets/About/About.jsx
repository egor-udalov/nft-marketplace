import Style from './About.module.scss';
import DescriptionSection from "../../shared/DescriptionSection/DescriptionSection";
import TitleSection from "../../shared/TitleSection/TitleSection";

function About() {
    return (
        <div class="content-container">
            <section className={Style.about}>

                <TitleSection text={'How it works'} />
                <DescriptionSection text={'Find out how to get started'} />

                <div className={Style.about__wrapperCards}>
                    <div className={Style.aboutCard}>
                        <img src="images/icons/wallet_icon.png" alt="" loading="lazy" className={Style.aboutCard__image} />
                        <h5 className={Style.aboutCard__title}>Setup Your wallet</h5>
                        <p className={Style.aboutCard__descr}>
                            Set up&nbsp;your wallet of&nbsp;choice. Connect
                            it&nbsp;to&nbsp;the Animarket by&nbsp;clicking the wallet icon in&nbsp;the top right
                            corner.
                        </p>
                    </div>
                    <div className={Style.aboutCard}>
                        <img src="images/icons/collection_icon.png" alt="" loading="lazy" className={Style.aboutCard__image} />
                        <h5 className={Style.aboutCard__title}>Setup Your wallet</h5>
                        <p className={Style.aboutCard__descr}>
                            Set up&nbsp;your wallet of&nbsp;choice. Connect
                            it&nbsp;to&nbsp;the Animarket by&nbsp;clicking the wallet icon in&nbsp;the top right
                            corner.
                        </p>
                    </div>
                    <div className={Style.aboutCard}>
                        <img src="images/icons/start_icon.png" alt="" loading="lazy" className={Style.aboutCard__image} />
                        <h5 className={Style.aboutCard__title}>Setup Your wallet</h5>
                        <p className={Style.aboutCard__descr}>
                            Set up&nbsp;your wallet of&nbsp;choice. Connect
                            it&nbsp;to&nbsp;the Animarket by&nbsp;clicking the wallet icon in&nbsp;the top right
                            corner.
                        </p>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default About;