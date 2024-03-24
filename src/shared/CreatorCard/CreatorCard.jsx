import Style from './CreatorCard.module.scss'

function CreatorCard({number, avatar, name, totalAmount}) {
    return (
        <div className={Style.creatorCard}>
            <span className={Style.creatorCard__number}>{number}</span>
            <img src={avatar} alt="creator avatar" className={Style.creatorCard__avatar} />
            <p className={Style.creatorCard__name}>{name}</p>
            <div className={Style.creatorCard__additionalInfo}>
                <p className={Style.creatorCard__designation}>Total Sales:</p>
                <p className={Style.creatorCard__totalAmount}>{totalAmount}</p>
            </div>
        </div>
    );
}

export default CreatorCard;