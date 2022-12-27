function Button(props) {
  return (
    <button
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      data-testid="button"
      className={`bg-sky-600 font-medium px-4 py-2 leading-4 flex items-center  rounded-full hover:transition-all hover:bg-sky-700 delay-75 text-white    ${props.className}`}
    >
      {props.children}
    </button>
  );
}
export default Button;
