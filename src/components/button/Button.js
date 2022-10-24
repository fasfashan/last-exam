function Button(props) {
  return (
    <button
      onClick={props.onClick}
      data-testid="button"
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      className={`bg-primary font-medium px-4 py-2 flex items-center rounded-md hover:transition-all hover:bg-opacity-90 delay-150  ${props.className}`}
    >
      {props.children}
    </button>
  );
}
export default Button;
