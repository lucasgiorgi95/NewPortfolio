import Image from "next/image";



const Avatar = () => {
  return <div className="hidden lg:flex lg:max-w-none">
    <Image src={'/avatar.png'} alt="" width={437} height={378} className="translate-z-0 w-full h-full"/>
  </div>;
};

export default Avatar;
