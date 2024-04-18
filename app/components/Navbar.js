import Link from "next/link";
import { cookies, headers } from "next/headers";
import { TbSquareRoundedLetterB } from "react-icons/tb";

const menuList = [
  {
    title: "Blog",
    to: "/",
  },
  {
    title: "Special Blog",
    to: "/special-blogs",
  },
];

function Navbar() {
  const headerList = headers();
  const user = JSON.parse(headerList.get("users"));
  const firstLetter = user?.email.charAt(0).toUpperCase();

  return (
    <nav className="bg-white shadow-md px-2">
      <div className="flex justify-between items-center max-w-[900px] mx-auto py-1">
        <Link href="/">
          <TbSquareRoundedLetterB className="text-[38px] text-blue-500" />
        </Link>

        <div className="flex h-full items-center">
          <ul className="flex h-full">
            {menuList.map((item, index) => (
              <li
                className="h-full cursor-pointer rounded-md flex items-center hover:bg-blue-200 hover:text-blue-800 border-[1px] border-transparent hover:border-blue-300 transition-all duration-100 ease-in"
                key={index}
              >
                <Link className="mx-3 my-2" href={item.to}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="vertical border-l-[1px] h-8 mr-3 ml-1 border-gray-300"></div>
          <div className="flex items-center">
            {user ? (
              <div className="bg-blue-200 w-[32px] h-[32px] flex justify-center items-center rounded-full text-blue-700 font-bold border-[1px] border-blue-700">
                {firstLetter}
              </div>
            ) : (
              <Link
                href="/login"
                className="text-blue-800 bg-blue-200 py-2 px-3 rounded-md hover:bg-blue-500 hover:text-white transition-all duration-100 ease-in"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
