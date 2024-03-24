import GallerySection from '../widgets/GallerySection/GallerySection';
import HeroSection from '../widgets/HeroSection/HeroSection';
import TopCreatorsSection from '../widgets/TopCreatorsSection/TopCreatorsSection';
import BrowseCategoriesSection from '../widgets/BrowseCategoriesSection/BrowseCategoriesSection';
import NewTrendingNfts from '../widgets/NewTrendingNftsSection/NewTrendingNftsSection';
import About from '../widgets/About/About';

function MainPage() {
    return (
        <>
            <HeroSection />
            <GallerySection />
            <TopCreatorsSection />
            <BrowseCategoriesSection />
            <NewTrendingNfts />
            <About />
        </>
    );
}

export default MainPage;