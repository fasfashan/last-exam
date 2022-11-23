function Button(props) {
  return (
    <button
      onClick={props.onClick}
      data-testid="button"
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      className={`bg-primary font-semibold px-4 py-2 flex items-center rounded-full hover:transition-all hover:bg-opacity-70 delay-100   ${props.className}`}
    >
      {props.children}
    </button>
  );
}
export default Button;
