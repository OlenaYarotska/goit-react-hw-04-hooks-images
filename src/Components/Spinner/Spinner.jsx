import { TailSpin } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div>
      <TailSpin
        type="TailSpin"
        color="black"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
};
export default Spinner;
