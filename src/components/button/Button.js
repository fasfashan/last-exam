function Button(props) {
  return (
    <button onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} className={`text-teal-500 font-semibold text-sm mt-4 mb-2 flex items-center ${props.className}`}>
      {props.children}
    </button>
  );
}
export default Button;
