import React, { Children } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Link as ScrollLink } from "react-scroll";

interface RouteProps {
  to?: string;
  link?: string;
  nav?: boolean;
  children: React.ReactNode;
}

export default function Route({ to, link, nav, children }: RouteProps) {
  const router = useRouter();
  if (nav == true) {
  }
  return (
    <>
      {router.asPath == "/" ? (
        <ScrollLink
          to={to as string}
          spy={nav === true ? true : false}
          hashSpy={nav === true ? true : false}
          smooth={true}
          duration={500}
          className={nav === true ? "nav-title" : ""}
          activeClass={nav === true ? "active" : ""}
          offset={-150}
        >
          {children}
        </ScrollLink>
      ) : (
        <Link href={link!}>{children}</Link>
      )}
    </>
  );
}
