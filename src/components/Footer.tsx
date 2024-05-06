import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative py-2 bg-dark-1 text-white ">
      <div className="container flex items-center justify-center mx-auto px-2">
        <Link
          href="https://github.com/ShubhamKadam098"
          target="_blank"
          className="flex items-center gap-2 text-sm"
          rel="noreferrer"
        >
          <Image
            width="40"
            height="40"
            src={"/icons/github-icon.svg"}
            alt="github"
          />
          @ShubhamKadam098
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
