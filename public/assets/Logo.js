import * as React from "react";

function Logo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
      <g filter="url(#filter0_d_27_2329)">
        <circle cx="22" cy="21" r="20" fill="url(#paint0_linear_27_2329)" />
        <path d="M15.152 32V10.1818H29.1293V13.495H19.1044V19.4183H28.1705V22.7315H19.1044V32H15.152Z" fill="#FFF5F5" />
      </g>
      <defs>
        <filter id="filter0_d_27_2329" x="0" y="0" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.945833 0 0 0 0 0.945833 0 0 0 0 0.945833 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_27_2329" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_27_2329" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_27_2329" x1="1.99938" y1="40.9998" x2="41.9995" y2="0.999513" gradientUnits="userSpaceOnUse">
          <stop stop-color="#67E8F9" />
          <stop offset="1" stop-color="#155EEF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default Logo;
