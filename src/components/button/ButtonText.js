function ButtonText(props) {
  return <button className={`bg-transparent font-semibold text-lg  flex items-center   hover:transition-all hover:opacity-70 delay-100   ${props.className}`}>{props.children}</button>;
}
export default ButtonText;
