import React from "react";
import { FaPlus } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const CreateButton = () => {
  const blackList = ["/create-post", "/", "/sign-in"];
  const location = useLocation();
  return (
    <Link
      to="/create-post"
      className={`${
        blackList.includes(location.pathname) ? "hidden" : "block"
      } w-12 h-12 rounded-[50%] flex justify-center items-center fixed bottom-10 right-10 md:right-[20%] lg:right-[30%] xl:right-[32%] z-40 bg-darkGrey hover:bg-black hover:text-white text-gray-200`}
    >
      <FaPlus size={25} />
    </Link>
  );
};

export default CreateButton;