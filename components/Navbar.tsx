import Image from "next/image";
import logo from "../public/images/logo.svg";

const Navbar = () => {
  return (
    <nav>
      <Image
        src={logo}
        alt="logo"
        className="w-36 mx-10 mt-10 md:w-56 md:mx-16"
      />
    </nav>
  );
};

export default Navbar;
