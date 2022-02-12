import propTypes from "prop-types";
const Button = ({ handleBtn }) => {
  return (
    <div className="Btn-wrapper">
      <button type="button" className="Button" onClick={handleBtn}>
        Load more
      </button>
    </div>
  );
};
export default Button;

Button.propTypes = {
  onClickBtn: propTypes.func,
};
