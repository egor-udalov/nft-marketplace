import Style from './Author.module.scss';

function Author({ avatar, name }) {
	return (
		<div className={Style.author}>
			<img src={avatar} alt='author avatar' className={Style.author__avatar} />
			<p className={Style.author__name}>{name}</p>
		</div>
	);
}

export default Author;
