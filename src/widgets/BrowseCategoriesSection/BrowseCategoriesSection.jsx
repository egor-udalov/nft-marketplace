import Style from './BrowseCategoriesSection.module.scss';
import TitleSection from "../../shared/TitleSection/TitleSection";

function BrowseCategoriesSection() {
    return (
        <div class='content-container'>
            <section className={Style.BrowseCategories}>

                <TitleSection className={Style.BrowseCategories__title} text={'Browse Categories'} />

            </section>
        </div>
    );
}

export default BrowseCategoriesSection;
