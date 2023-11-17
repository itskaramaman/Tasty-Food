const Button = ({ children, onClickFunction }) => {
  return (
    <button
      className="bg-orange-500 hover:bg-orange-600 text-white rounded-md py-1 px-2"
      onClick={() => onClickFunction}
    >
      {children}
    </button>
  );
};

export default Button;
