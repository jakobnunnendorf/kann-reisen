import React from "react";
import "./navigationlinks.css";
import Link from "next/link";

const NavigationLinks: React.FC = () => {
  return (
    <ul className="navbar">
      <li>
        {" "}
        <Link href="/"> Home</Link>
      </li>
      <li>
        {" "}
        <Link href="/gallerie">Gallerie</Link>
      </li>
      <li>
        {" "}
        <Link href="/kontakt">Kontakt</Link>
      </li>
    </ul>
  );
};

export default NavigationLinks;
