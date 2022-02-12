import { useState } from "react";
import { toast } from "react-toastify";

function Searchbar({ onHandleSubmit }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (evt) => {
    setInputValue(evt.currentTarget.value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (inputValue.trim() === "") {
      toast.error("Please type something");
      return;
    }
    onHandleSubmit(inputValue);
    setInputValue("");
  };
  return (
    <>
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={onSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            value={inputValue}
            placeholder="Search images and photos"
            onChange={handleChange}
            className="SearchForm-input"
          />
        </form>
      </header>
    </>
  );
}

export default Searchbar;
