import Style from "./DescriptionSection.module.scss";

function DescriptionSection({ text, className }) {
    return (
        <p className={`${Style.descriptionSection} ${className}`}>{text}</p>
    );
}

export default DescriptionSection;