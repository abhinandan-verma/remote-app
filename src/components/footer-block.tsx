import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type FooterBlockProps = {
  title: string;
  links: [
    {
      label: string;
      href: string;
    },
  ];
};

function FooterBlock({ title, links }: FooterBlockProps) {
  return (
    <div className="flex flex-col items-center justify-center px-4 pb-4 ">
      <h3 className="text-lg font-bold">{title}</h3>
      <div className="flex flex-col gap-2 mt-2">
        {links.map((link, index) => (
          <Link key={`${link.label}-${index}`} href={link.href}>
            <p className="text-gray-600 dark:text-gray-20">
              {link.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FooterBlock;
