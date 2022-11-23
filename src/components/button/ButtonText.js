function ButtonText(props) {
  return (
    <button
      onClick={props.onClick}
      data-testid="button"
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      className={`bg-transparent font-semibold  py-2 flex items-center rounded-full hover:transition-all hover:opacity-70 delay-100   ${props.className}`}
    >
      {props.children}
    </button>
  );
}
export default ButtonText;
