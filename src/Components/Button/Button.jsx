import propTypes from "prop-types";
const Button = ({ onClickBtn }) => {
  return (
    <div className="Btn-wrapper">
      <button type="button" className="Button" onClick={onClickBtn}>
        Load more
      </button>
    </div>
  );
};
export default Button;

Button.propTypes = {
  onClickBtn: propTypes.func,
};
