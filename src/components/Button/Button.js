import "./Button.css";

const Button = (props) => {
  return (
    <button className="button" onClick={props.onClick}>
      {props.children}
      <span className="button-border"></span>
    </button>
  );
};

export default Button;
