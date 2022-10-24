import React from "react";

const Cube = () => {
  return (
    <svg className="md:opacity-100  -z-10  opacity-60" xmlns="http://www.w3.org/2000/svg" width="445" height="424" viewBox="0 0 445 424" fill="none">
      <path opacity="0.1" d="M131.064 92.6696L222.454 147.067V239.043L131.064 184.153V92.6696Z" fill="#046663" />
      <path opacity="0.2" d="M313.523 92.7244L222.136 147.065V238.944L313.523 184.112V92.7244Z" fill="#046663" />
      <path className="animate-bounce" opacity="0.3" d="M222.454 38.559L313.389 93.176L222.454 147.793L131.518 93.176L222.454 38.559Z" stroke="#046663" stroke-width="1.5" />
      <path opacity="0.1" d="M222.082 238.627L313.472 293.024V385L222.082 330.11V238.627Z" fill="#046663" />
      <path opacity="0.2" d="M404.541 238.681L313.154 293.022V384.901L404.541 330.069V238.681Z" fill="#046663" />
      <path opacity="0.3" d="M313.472 184.516L404.407 239.133L313.472 293.75L222.537 239.133L313.472 184.516Z" stroke="#046663" stroke-width="1" />
      <path opacity="0.1" d="M40.0453 238.627L131.435 293.024V385L40.0453 330.11V238.627Z" fill="#046663" />
      <path className="animate-pulse" opacity="0.2" d="M222.505 238.681L131.118 293.022V384.901L222.505 330.069V238.681Z" fill="#046663" />
      <path opacity="0.3" d="M131.436 184.516L222.371 239.133L131.436 293.75L40.5002 239.133L131.436 184.516Z" stroke="#046663" stroke-width="1" />
    </svg>
  );
};

export default Cube;
