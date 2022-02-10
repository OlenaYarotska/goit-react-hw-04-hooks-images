import React, { Component } from "react";
import { toast } from "react-toastify";

class Searchbar extends Component {
  state = {
    inputValue: "",
  };

  handleChange = (evt) => {
    this.setState({ inputValue: evt.currentTarget.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { inputValue } = this.state;
    if (inputValue.trim() === "") {
      toast.error("Please type something");
      return;
    }
    this.props.onSubmit(inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleSubmit}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              type="text"
              autoComplete="off"
              autoFocus
              value={this.state.inputValue}
              placeholder="Search images and photos"
              onChange={this.handleChange}
              className="SearchForm-input"
            />
          </form>
        </header>
      </>
    );
  }
}
export default Searchbar;
