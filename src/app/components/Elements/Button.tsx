type buttonPropsIo = {
  type: "submit" | "reset" | "button";
  btnClass?: string;
  btnText: string;
};

const Button = ({ type, btnClass, btnText }: buttonPropsIo) => {
  return (
    <button type={type} className={`bg-blue-600 text-white px-4 py-2 rounded-md ${btnClass}`}>
      {btnText}
    </button>
  );
};

export default Button;
