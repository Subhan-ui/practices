import "./form.css";

// Arrow Function
export const Form = (props) => (
    // JSX -> JavaScript + HTML
    <div className="some">
      <form className="form" onSubmit={props.handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={props.name}
          onChange={props.handleChangeName}
        />
        <input
          type="number"
          placeholder="Age"
          value={props.age}
          onChange={props.handleChangeAge}
        />
        <input
          type="text"
          placeholder="Description"
          value={props.desc}
          onChange={props.handleChangeDesc}
        />
        <div>
          <input type="submit" />
          <button onClick={props.onclick}>Cancel</button>
        </div>
      </form>
    </div>
  );

