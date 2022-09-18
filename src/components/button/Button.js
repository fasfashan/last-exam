import { HiChevronRight } from "react-icons/hi";
function Button(props) {
  return (
    <button className="text-teal-500 mt-4 mb-2 flex items-center">
      {props.children}
      <HiChevronRight />
    </button>
  );
}
export default Button;
