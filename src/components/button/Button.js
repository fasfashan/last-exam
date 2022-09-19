import { HiChevronRight } from "react-icons/hi";
function Button(props) {
  return <button className={`text-teal-500 font-semibold text-sm mt-4 mb-2 flex items-center ${props.className}`}>{props.children}</button>;
}
export default Button;
