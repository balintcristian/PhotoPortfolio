import React from "react";

type NavLinkProps = {
  href: string;
  text: string;
};

const NavLink = ({ href, text }: NavLinkProps) => {
  return <a href={href}>{text}</a>;
};

export default NavLink;
