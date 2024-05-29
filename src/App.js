import "./App.css";
import Button from "./components/Button/Button";
import Card from "./components/Card";
import Counter from "./components/Counter/Counter";
import { Form } from "./components/Form/Form";
import { useState } from "react";

const contents = [
  { id: 1, name: "Bilal", age: 45, desc: "this is bilal description" },
  { id: 2, name: "Majid", age: 45, desc: "this is Majid description" },
  { id: 3, name: "Subhan", age: 45, desc: "this is Subhan description" },
  { id: 4, name: "Akasha", age: 45, desc: "this is Akasha description" },
  { id: 5, name: "Talha", age: 45, desc: "this is Talha description" },
  { id: 6, name: "Talha", age: 45, desc: "this is Talha description" },
];

function App() {
  // Array Destructuring
  // 1 hook -> useState -> functions
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [desc, setDesc] = useState("");
  const [data, setData] = useState(contents);
  const [showForm, setShowForm] = useState(false);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };
  const handleChangeDesc = (e) => {
    setDesc(e.target.value);
  };
  const handleform = () => {
    setShowForm(true);
  };
  const handleForm = () => {
    setShowForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([
      ...data,
      { id: data.length + 1, name: name, age: age, desc: desc },
    ]);
    setName("");
    setAge("");
    setDesc("");
  };

  const handleDelete = (id) => {
    setData(data.filter((dats) => dats.id !== id));
  };

  return (
    <div className="whole">
      {showForm ? (
        <Form
          onclick={handleForm}
          name={name}
          age={age}
          desc={desc}
          handleSubmit={handleSubmit}
          handleChangeAge={handleChangeAge}
          handleChangeDesc={handleChangeDesc}
          handleChangeName={handleChangeName}
        />
      ) : (
        <Button onClick={handleform}>Show Form</Button>
      )}

      <div className="cards">
        {data.map((content) => {
          return (
            <Card
              key={content.id}
              id={content.id}
              name={content.name}
              age={content.age}
              desc={content.desc}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
      {/* <Counter /> */}
    </div>
  );
}
export default App;
