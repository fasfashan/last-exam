import { useRouter } from "next/router";
import Link from "next/link";
import Mobilemenu from "../mobilemenu/Mobilemenu";
function Header() {
  const router = useRouter();
  const menuItems = [
    { title: "Beranda", href: "/" },
    { title: "Tentang", href: "/about" },
    { title: "Artikel", href: "/articles" },
  ];
  return (
    <header className="mt-4 ">
      <nav className="flex justify-between ">
        <Link href="/">
          <a>
            <svg className="hover:opacity-60" xmlns="http://www.w3.org/2000/svg" width="74" height="19" viewBox="0 0 74 19" fill="none">
              <path
                d="M0.721591 18V0.545454H11.9034V3.19602H3.88352V7.93466H11.1364V10.5852H3.88352V18H0.721591ZM18.2976 18.2642C17.468 18.2642 16.7209 18.1165 16.0561 17.821C15.397 17.5199 14.8743 17.0767 14.4879 16.4915C14.1072 15.9062 13.9169 15.1847 13.9169 14.3267C13.9169 13.5881 14.0533 12.9773 14.326 12.4943C14.5987 12.0114 14.9709 11.625 15.4425 11.3352C15.9141 11.0455 16.4453 10.8267 17.0362 10.679C17.6328 10.5256 18.2493 10.4148 18.8857 10.3466C19.6527 10.267 20.2749 10.196 20.7521 10.1335C21.2294 10.0653 21.576 9.96307 21.7919 9.8267C22.0135 9.68466 22.1243 9.46591 22.1243 9.17045V9.11932C22.1243 8.47727 21.9339 7.98011 21.5533 7.62784C21.1726 7.27557 20.6243 7.09943 19.9084 7.09943C19.1527 7.09943 18.5533 7.2642 18.1101 7.59375C17.6726 7.9233 17.3771 8.3125 17.2237 8.76136L14.343 8.35227C14.5703 7.55682 14.9453 6.89205 15.468 6.35795C15.9908 5.81818 16.63 5.41477 17.3857 5.14773C18.1413 4.875 18.9766 4.73864 19.8913 4.73864C20.522 4.73864 21.1499 4.8125 21.7749 4.96023C22.3999 5.10795 22.9709 5.35227 23.4879 5.69318C24.005 6.02841 24.4197 6.4858 24.7322 7.06534C25.0504 7.64489 25.2095 8.36932 25.2095 9.23864V18H22.2436V16.2017H22.1413C21.9538 16.5653 21.6896 16.9062 21.3487 17.2244C21.0135 17.5369 20.5902 17.7898 20.0788 17.983C19.5732 18.1705 18.9794 18.2642 18.2976 18.2642ZM19.0987 15.9972C19.718 15.9972 20.255 15.875 20.7095 15.6307C21.1641 15.3807 21.5135 15.0511 21.7578 14.642C22.0078 14.233 22.1328 13.7869 22.1328 13.304V11.7614C22.0362 11.8409 21.8714 11.9148 21.6385 11.983C21.4112 12.0511 21.1555 12.1108 20.8714 12.1619C20.5874 12.2131 20.3061 12.2585 20.0277 12.2983C19.7493 12.3381 19.5078 12.3722 19.3033 12.4006C18.843 12.4631 18.4311 12.5653 18.0675 12.7074C17.7038 12.8494 17.4169 13.0483 17.2067 13.304C16.9964 13.554 16.8913 13.8778 16.8913 14.2756C16.8913 14.8438 17.0987 15.2727 17.5135 15.5625C17.9283 15.8523 18.4567 15.9972 19.0987 15.9972ZM38.6584 8.36932L35.8459 8.67614C35.7663 8.39205 35.6271 8.125 35.4283 7.875C35.2351 7.625 34.9737 7.4233 34.6442 7.26989C34.3146 7.11648 33.9112 7.03977 33.4339 7.03977C32.7919 7.03977 32.2521 7.17898 31.8146 7.45739C31.3828 7.7358 31.1697 8.09659 31.1754 8.53977C31.1697 8.92045 31.3089 9.23011 31.593 9.46875C31.8828 9.70739 32.3601 9.90341 33.0249 10.0568L35.2578 10.5341C36.4964 10.8011 37.4169 11.2244 38.0192 11.804C38.6271 12.3835 38.9339 13.142 38.9396 14.0795C38.9339 14.9034 38.6925 15.6307 38.2152 16.2614C37.7436 16.8864 37.0874 17.375 36.2464 17.7273C35.4055 18.0795 34.4396 18.2557 33.3487 18.2557C31.7464 18.2557 30.4567 17.9205 29.4794 17.25C28.5021 16.5739 27.9197 15.6335 27.7322 14.429L30.7408 14.1392C30.8771 14.7301 31.1669 15.1761 31.6101 15.4773C32.0533 15.7784 32.63 15.929 33.3402 15.929C34.0732 15.929 34.6612 15.7784 35.1044 15.4773C35.5533 15.1761 35.7777 14.804 35.7777 14.3608C35.7777 13.9858 35.6328 13.6761 35.343 13.4318C35.0589 13.1875 34.6158 13 34.0135 12.8693L31.7805 12.4006C30.5249 12.1392 29.5959 11.6989 28.9936 11.0795C28.3913 10.4545 28.093 9.66477 28.0987 8.71023C28.093 7.90341 28.3118 7.20455 28.755 6.61364C29.2038 6.01705 29.826 5.55682 30.6214 5.23295C31.4226 4.90341 32.3459 4.73864 33.3913 4.73864C34.9254 4.73864 36.1328 5.06534 37.0135 5.71875C37.8999 6.37216 38.4482 7.25568 38.6584 8.36932ZM44.5689 10.3295V18H41.4837V0.545454H44.5007V7.13352H44.6541C44.9609 6.39489 45.4354 5.8125 46.0774 5.38636C46.7251 4.95455 47.549 4.73864 48.549 4.73864C49.4581 4.73864 50.2507 4.92898 50.9268 5.30966C51.603 5.69034 52.1257 6.24716 52.495 6.98011C52.87 7.71307 53.0575 8.60795 53.0575 9.66477V18H49.9723V10.142C49.9723 9.26136 49.745 8.5767 49.2905 8.08807C48.8416 7.59375 48.2109 7.34659 47.3984 7.34659C46.853 7.34659 46.3643 7.46591 45.9325 7.70455C45.5064 7.9375 45.1712 8.27557 44.9268 8.71875C44.6882 9.16193 44.5689 9.69886 44.5689 10.3295ZM59.9695 18.2642C59.1399 18.2642 58.3928 18.1165 57.728 17.821C57.0689 17.5199 56.5462 17.0767 56.1598 16.4915C55.7791 15.9062 55.5888 15.1847 55.5888 14.3267C55.5888 13.5881 55.7251 12.9773 55.9979 12.4943C56.2706 12.0114 56.6428 11.625 57.1143 11.3352C57.5859 11.0455 58.1172 10.8267 58.7081 10.679C59.3047 10.5256 59.9212 10.4148 60.5575 10.3466C61.3246 10.267 61.9467 10.196 62.424 10.1335C62.9013 10.0653 63.2479 9.96307 63.4638 9.8267C63.6854 9.68466 63.7962 9.46591 63.7962 9.17045V9.11932C63.7962 8.47727 63.6058 7.98011 63.2251 7.62784C62.8445 7.27557 62.2962 7.09943 61.5803 7.09943C60.8246 7.09943 60.2251 7.2642 59.782 7.59375C59.3445 7.9233 59.049 8.3125 58.8956 8.76136L56.0149 8.35227C56.2422 7.55682 56.6172 6.89205 57.1399 6.35795C57.6626 5.81818 58.3018 5.41477 59.0575 5.14773C59.8132 4.875 60.6484 4.73864 61.5632 4.73864C62.1939 4.73864 62.8217 4.8125 63.4467 4.96023C64.0717 5.10795 64.6428 5.35227 65.1598 5.69318C65.6768 6.02841 66.0916 6.4858 66.4041 7.06534C66.7223 7.64489 66.8814 8.36932 66.8814 9.23864V18H63.9155V16.2017H63.8132C63.6257 16.5653 63.3615 16.9062 63.0206 17.2244C62.6854 17.5369 62.2621 17.7898 61.7507 17.983C61.245 18.1705 60.6513 18.2642 59.9695 18.2642ZM60.7706 15.9972C61.3899 15.9972 61.9268 15.875 62.3814 15.6307C62.8359 15.3807 63.1854 15.0511 63.4297 14.642C63.6797 14.233 63.8047 13.7869 63.8047 13.304V11.7614C63.7081 11.8409 63.5433 11.9148 63.3104 11.983C63.0831 12.0511 62.8274 12.1108 62.5433 12.1619C62.2592 12.2131 61.978 12.2585 61.6996 12.2983C61.4212 12.3381 61.1797 12.3722 60.9751 12.4006C60.5149 12.4631 60.103 12.5653 59.7393 12.7074C59.3757 12.8494 59.0888 13.0483 58.8786 13.304C58.6683 13.554 58.5632 13.8778 58.5632 14.2756C58.5632 14.8438 58.7706 15.2727 59.1854 15.5625C59.6001 15.8523 60.1286 15.9972 60.7706 15.9972ZM71.8842 18.1875C71.3672 18.1875 70.924 18.0057 70.5547 17.642C70.1854 17.2784 70.0036 16.8352 70.0092 16.3125C70.0036 15.8011 70.1854 15.3636 70.5547 15C70.924 14.6364 71.3672 14.4545 71.8842 14.4545C72.3842 14.4545 72.8189 14.6364 73.1882 15C73.5632 15.3636 73.7536 15.8011 73.7592 16.3125C73.7536 16.6591 73.6626 16.9744 73.4865 17.2585C73.3161 17.5426 73.0888 17.7699 72.8047 17.9403C72.5263 18.1051 72.2195 18.1875 71.8842 18.1875Z"
                fill="#111827"
              />
            </svg>
          </a>
        </Link>
        <ul className="md:flex hidden space-x-8">
          {menuItems.map((menu, index) => {
            return (
              <Link href={menu.href} key={index}>
                <a className={`${router.pathname === `${menu.href}` ? "font-medium text-teal-500 border-b border-teal-500" : ""} text-sm hover:opacity-60`}>{menu.title}</a>
              </Link>
            );
          })}
        </ul>
        <Mobilemenu />
      </nav>
    </header>
  );
}
export default Header;
