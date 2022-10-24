import * as React from "react";

function Logo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
      <g filter="url(#filter0_d_26_2)">
        <circle cx="22" cy="21" r="20" fill="#046663" />
      </g>
      <path d="M17.1903 30V12.5455H28.3722V15.196H20.3523V19.9347H27.6051V22.5852H20.3523V30H17.1903Z" fill="white" />
      <defs>
        <filter id="filter0_d_26_2" x="0" y="0" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_26_2" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_26_2" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}
export default Logo;
