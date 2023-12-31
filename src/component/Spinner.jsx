import { MutatingDots } from "react-loader-spinner";

function Spinner() {
  return (
    <MutatingDots
      height="100"
      width="100"
      color="red"
      secondaryColor="red"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}

export default Spinner;
