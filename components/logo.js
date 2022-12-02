import Image from "next/image";
import profilePic from "../public/logo.png";

export const Logo = () => (
  <Image src={profilePic} alt='Picture of the author' />
);

export default Logo;
