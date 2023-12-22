import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { AuthContext } from "../../../../Provider/AuthProvider";

const Nav = () => {
  const [click, setClick] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleClick = () => {
    setClick(!click);
  };
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("user logout");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const content = (
    <div className="lg:hidden block absolute z-50 top-16 w-full h-[700px] left-0 right-0 bg-gray-300 transition ">
      <ul className="text-center text-xl p-6">
        <Link to={"/"} onClick={handleClick}>
          <li className="my-4 py-3 hover:text-green-600 hover:rounded">Home</li>
        </Link>
        <Link to={"/product"}>
          <li className="my-4 py-3 hover:text-green-600 hover:rounded">
            Products
          </li>
        </Link>
        <Link to={"/featured"}>
          <li className="my-4 py-3 hover:text-green-600  hover:rounded">
            Featured
          </li>
        </Link>
      </ul>
    </div>
  );

  return (
    <nav>
      <div className="h-10vh flex justify-between text-black lg:py-5 px-20 py-4">
        <div className="flex items-center flex-1">
          <Link to={"/"}>
            <span className="text-3xl font-bold text-green-600">
              Task Planner
            </span>
          </Link>
        </div>

        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-1">
            <ul className="flex gap-8 mr-16 text-[16px]">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? " text-green-600 "
                      : "cursor-pointer hover:text-green-600"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard"}
                  className={({ isActive }) =>
                    isActive
                      ? " text-green-600"
                      : "cursor-pointer hover:text-green-600"
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/featured"}
                  className={({ isActive }) =>
                    isActive
                      ? " text-green-600"
                      : "cursor-pointer hover:text-green-600"
                  }
                >
                  Task
                </NavLink>
              </li>
            </ul>
          </div>

          <ul className="flex gap-4 mr-16 text-[16px] items-center">
            {user ? (
              // User is authenticated, render profile and logout
              <>
                <li>
                  <div className="flex items-center">
                    <Link to={"/profile"}>
                      <img
                        className="w-10 h-10 rounded-full border border-green-600 mr-2"
                        src={user.photoURL}
                        alt=""
                      />
                    </Link>
                    <span
                      onClick={handleLogOut}
                      className="cursor-pointer text-black hover:text-green-600/-/s px-3 py-[4px] border"
                    >
                      Logout
                    </span>
                  </div>
                </li>
              </>
            ) : (
              // User is not authenticated, render login and signup
              <>
                <li>
                  <NavLink
                    to={"/login"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-600"
                        : "cursor-pointer hover:text-green-600 px-3 py-2 border text-[16px]"
                    }
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/signup"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-600"
                        : "cursor-pointer hover:text-green-600 px-3 py-2 border text-[16px]"
                    }
                  >
                    Sign Up
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        <button className="block sm:hidden transition " onClick={handleClick}>
          {click ? (
            <FaTimes className="text-green-600 text-2xl" />
          ) : (
            <CiMenuFries className="text-green-600 text-2xl" />
          )}
        </button>

        {/* Move the content outside of the button */}
        {click && content}
      </div>
    </nav>
  );
};

export default Nav;
