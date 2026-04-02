import { useState } from "react";
import Nav from "./Nav";

export default function Header({ getkeywords }) {
  const [active, setactive] = useState(false);
  const [keywords, setKeywords] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    setKeywords(value);
    setactive(value !== "");
    
   
    getkeywords(value);
  }

  return (
    <header style={{ background: active ? "red" : "blue" }}>
      <div className="logo">Awesome News</div>

      <input
        type="text"
        value={keywords}
        onChange={handleChange}
      />

      <Nav />
    </header>
  );
}