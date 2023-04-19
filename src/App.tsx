import { ChangeEvent, ChangeEventHandler, useState } from "react";
import "./App.css";
import ColorField from "./components/ColorField";

interface Field {
  id: number;
  color: string;
}

function App() {
  const [form, setForm] = useState({ amount: 4, color: "#FFF" });
  const [fields, setFields] = useState(createEmptyFields());

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setForm((prevForm: { amount: number; color: string }) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  function setColor(id: number): void {
    setFields((prevFields: Field[]) => {
      return prevFields.map((prevField: Field) =>
        prevField.id === id ? { ...prevField, color: form.color } : prevField
      );
    });
  }

  function createEmptyFields(): Field[] {
    const fields: Field[] = [];

    for (let i = 0; i < 10; i++) {
      fields.push({ id: i, color: "white" } as Field);
    }

    return fields;
  }

  const fieldElements = fields.map((field: Field) => (
    <ColorField
      key={field.id}
      id={field.id}
      color={field.color}
      setColor={setColor}
    />
  ));

  return (
    <main>
      <form>
        <input
          type="range"
          name="amount"
          value={form.amount}
          min="0"
          max="10"
          onChange={handleChange}
        ></input>
        <input
          type="color"
          name="color"
          value={form.color}
          onChange={handleChange}
        ></input>
      </form>
      <div className="color-fields">{fieldElements.slice(0, form.amount)}</div>
    </main>
  );
}

export default App;
