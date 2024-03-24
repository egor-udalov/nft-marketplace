import Style from "./InteractiveButton.module.scss";

function InteractiveButton({ color, svg, text, className }) {
  return (
    <button className={`${Style.interactiveButton} ${Style[color]} ${className}`}>
      {svg}
      <p>{text}</p>
    </button>
  );
}

export default InteractiveButton;