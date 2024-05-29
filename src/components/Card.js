import Button from "./Button/Button";
import "./Card.css";

const Form = (props) => (
    // JavaScript JSX -> JavaScript + HTML combination
    <div className="card">
      <h1>{props.name}</h1>
      <h3>{props.age}</h3>
      <p>{props.desc}</p>
      <Button onClick={()=>props.handleDelete(props.id)}>
        Delete
      </Button>
    </div>
  );


export default Form;
