const Button = ({ action, onClick }) => {
  //arrow function defintion

  return (
    <div>
      <button onClick={(event) => onClick()} type="button">
        {action}
      </button>
    </div>
  );
};

export default Button;
