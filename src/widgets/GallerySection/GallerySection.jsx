// import Style from './GallerySection.module.scss';

import DescriptionSection from "../../shared/DescriptionSection/DescriptionSection";
import TitleSection from "../../shared/TitleSection/TitleSection";

function GallerySection() {
    return (
        <div class="content-container">
            <section class="gallery">
                <TitleSection text={'Trending Collection'} />
                <DescriptionSection text={'Checkout our weekly updated trending collection.'} />
            </section>
        </div>
    );
}

export default GallerySection;