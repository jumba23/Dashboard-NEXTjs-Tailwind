import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

const NavCategoryLink = ({ category, links }) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    // Nav Links
    <ul>
      {links.map((link) => (
        <li key={link}>
          <Link legacyBehavior href={`/${category}/${link}`}>
            <a
              className={`text-xl font-normal text-lightBabyBlue hover:text-babyBlue ${
                currentRoute === `/${category}/${link}`
                  ? "underline underline-offset-2 text-babyBlue"
                  : ""
              }`}
            >
              {link}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavCategoryLink;
