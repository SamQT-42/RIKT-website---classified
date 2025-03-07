"use client";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 min-h-[300px] px-8 md:px-16">
      {/* Top section: Logos & Social Icons */}
      <div className="flex justify-between items-center mb-6">
      {/* Left Logos */}
      <div className="flex gap-3 ml-6">
        <Image src="/assets/rec1.png" alt="Logo 1" width={130} height={210} />
        <Image src="/assets/rec2.png" alt="Logo 2" width={150} height={180} />
      </div>

        {/* Social Icons */}
        <div className="flex flex-col gap-3 mr-6 md:pl-9 right-0 top-[40%] bottom-[-40%]">
          <a href="https://www.facebook.com/rmitshinsei" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/facebook.png" alt="facebook" width={55} height={55} className="rounded-full" />
          </a>
          <a href="https://www.instagram.com/rmitshinsei" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/instagram.png" alt="instagram" width={55} height={55} className="rounded-full" />
          </a>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-center md:justify-start pl-9 md:pl-19 text-center md:text-left gap-20">
        <div className="flex flex-col space-y-3">
          <ScrollLink to="contact" smooth duration={500} className="cursor-pointer hover:text-yellow-500">
            FAQs
          </ScrollLink>
          <ScrollLink to="contact" smooth duration={500} className="cursor-pointer hover:text-yellow-500">
            Contact Us
          </ScrollLink>
        </div>
        <div className="flex flex-col space-y-3">
          <ScrollLink to="about" smooth duration={500} className="cursor-pointer hover:text-yellow-500">
            About Us
          </ScrollLink>
          <Link href="/address" className="hover:text-yellow-500">Address</Link>
        </div>
        <div className="text-yellow-500 font-extrabold text-lg">RIKT
        <Link href ="components/Scoreboard.js" className="flex flex-col space-y-3"></Link></div>
        </div>

      <hr className="border-gray-600 my-6" />

      {/* Bottom Section */}
      <div className="flex justify-center gap-6 text-sm text-gray-400 px-6">
        <Link href="/cookies" className="hover:text-white">Cookies Policy</Link>
        <span className="before:content-['|'] mx-4 text-gray-400"></span>
        <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
        <span className="before:content-['|'] mx-4 text-gray-400"></span>
        <Link href="/legal" className="hover:text-white">Legal Terms</Link>
      </div>
    </footer>
  );
};

export default Footer;
