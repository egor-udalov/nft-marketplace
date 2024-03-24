import Style from './NftCard.module.scss'

function NftCard({
    imgSrc, imgSrcDesktopAvif, imgSrcDesktopAvif2x, imgSrcDesktopWebp, imgSrcDesktopWebp2x, imgSrcMobileAvif, imgSrcMobileWebp,
    cardName, authorAvatar, authorName, price, highestBid}) {
    return (
        <div className={Style.nftCard}>
            <picture>
                <source srcSet={`${imgSrcDesktopAvif} 1x, ${imgSrcDesktopAvif2x} 2x`} type="image/avif" media="(min-width: 521px)" />
                <source srcSet={`${imgSrcDesktopWebp} 1x, ${imgSrcDesktopWebp2x} 2x`} type="image/webp" media="(min-width: 521px)" />
                <source srcSet={imgSrcMobileAvif} type="image/avif" media="(max-width: 520px)" />
                <source srcSet={imgSrcMobileWebp} type="image/webp" media="(max-width: 520px)" />
                <img src={imgSrc} alt="nft image" className={Style.nftCard__image} />
            </picture>
            <div className={Style.nftCard__info}>
                <p className={Style.nftCard__name}>{cardName}</p>
                <div className={Style.nftCard__authorInfo}>
                    <img src={authorAvatar} alt="nft author" className={Style.nftCard__authorAvatar} />
                    <p className={Style.nftCard__authorName}>{authorName}</p>
                </div>
                <p className={Style.nftCard__headlinePrice}>Price</p>
                <p className={Style.nftCard__headlineHighestBid}>Highest Bid</p>
                <p className={Style.nftCard__price}>{price} ETH</p>
                <p className={Style.nftCard__highestBid}>{highestBid} wETH</p>
            </div>
        </div>
    );
}

export default NftCard;