import React from "react";

const Header : React.FC = () => {
  const navLink: string[] = ["Reaction", "Entertainment", "Sports", "Stickers", "Artists"];
  return (
    <header>
      <div className="flex justify-between w-full items-center m-0 mt-4 text-sm">
        <div>
          <img src="/images/icons/logo.svg" alt="logo" />
        </div>
        <div>
          <ul className="flex justify-between items-center space-x-1 font-semibold bg-gradient-to-r from-purple-500 to-pink-500">
            {navLink.map((name: string, index: number) => (
              <li className="px-3 py-2 mb-1 bg-black hover:bg-gradient-to-r from-sky-500 to-indigo-500 cursor-pointer relative after:absolute after:content-[''] after:w-1 after:h-10 after:bg-black after:top-0 after:-right-1" key={index}>
                {name}
              </li>
            ))}
            <li className="pl-5 pr-1 py-2 mb-1 bg-black hover:bg-gradient-to-r from-sky-500 to-indigo-500 cursor-pointer relative after:absolute after:content-[''] after:w-1 after:h-10 after:bg-black after:top-0 after:-right-1">
              <img
                className="w-4 h-5"
                src="/images/icons/ellipsis.png"
                alt=""
              />
            </li>
          </ul>
        </div>
        <div className="flex font-semibold">
          <button className="bg-indigo-600 px-4 mr-1 py-1 font-medium">
            Upload
          </button>
          <button className="bg-indigo-500 px-4 mr-3 py-1 font-medium">
            Create
          </button>
          <button className="bg-slate-700 font-medium flex items-center justify-start">
            <img
              className="bg-slate-500 w-9 h-9"
              src="/images/icons/user.png"
              alt="login"
            />
            <span className="px-11">Login</span>
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <input
          className="w-full outline-none px-2 text-xl text-slate-700"
          type="text"
          placeholder="@username + tag to search within verified channel"
        />
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 p-3">
          <img src="/images/icons/search.svg" alt="search" />
        </button>
      </div>
    </header>
  );
};

export default Header;
