"use client";
import React from "react";
import Background from "@/components/background";
import { useState } from 'react';

const ThemeButton = () => {
  const [selectedTheme, setSelectedTheme] = useState('default');

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTheme(event.target.value);
  };

  return (
    <div>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          Theme
          <svg
            width="12px"
            height="12px"
            className="inline-block h-2 w-2 fill-current opacity-60"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048">
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>
        <ul tabIndex={0} className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl">
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Default"
              value="default"
              checked={selectedTheme === 'default'}
              onChange={handleThemeChange}
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Sunset"
              value="sunset"
              checked={selectedTheme === 'sunset'}
              onChange={handleThemeChange}
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Retro"
              value="retro"
              checked={selectedTheme === 'retro'}
              onChange={handleThemeChange}
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Valentine"
              value="valentine"
              checked={selectedTheme === 'valentine'}
              onChange={handleThemeChange}
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Aqua"
              value="aqua"
              checked={selectedTheme === 'aqua'}
              onChange={handleThemeChange}
            />
          </li>
        </ul>
      </div>

      <Background theme={selectedTheme} />
    </div>
  );
};


export default ThemeButton;
