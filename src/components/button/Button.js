function Button(props) {
  return (
    <button data-testid="button" className={`bg-sky-600 font-semibold px-4 py-2 leading-4 flex items-center text-sm rounded-full hover:transition-all hover:bg-sky-800 delay-75 text-white shadow-lg shadow-blue-500/50   ${props.className}`}>
      {props.children}
    </button>
  );
}
export default Button;
