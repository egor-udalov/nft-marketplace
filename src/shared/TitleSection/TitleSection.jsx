import Style from "./TitleSection.module.scss";

function TitleSection({ text, className }) {
    return (
        <h3 className={`${Style.titleSection} ${className}`}>{text}</h3>
    );
}

export default TitleSection;