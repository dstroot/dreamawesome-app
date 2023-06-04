import Link from "next/link";
import { footerItems } from "../../data/constants";

export const Footer = () => {
  // get year for copyright
  const year = new Date().getFullYear();

  const gridLinks =
    "text-sm mr-2 pl-2 border-l border-rose-800 first:border-l-0 first:pl-0 text-rose-800 hover:text-violet-700";

  return (
    <footer className="bg-rose-200">
      <div className="container p-6 mx-auto">
        <p className="text-sm text-rose-800">
          The interpretations and insights gained through dream analysis are
          subjective and may not necessarily reflect your true feelings or
          experiences. It is important to approach dream therapy with an open
          mind and to consider the insights gained through this process as one
          aspect of your overall self-exploration and self-improvement journey.
          If you are experiencing significant emotional distress or are
          concerned about your mental health please speak with a qualified
          mental health professional.
        </p>
        <div className="flex flex-row flex-wrap items-center justify-between mt-4 border-t border-rose-800">
          <div>
            {footerItems.legal.map((item, index) => {
              return item.internal ? (
                <Link key={`${index}`} href={item.path} className={gridLinks}>
                  {item.name}
                </Link>
              ) : (
                <a key={`${index}`} className={gridLinks} href={item.path}>
                  {item.name}
                </a>
              );
            })}
          </div>
          <p className="mt-4 text-sm text-rose-800">
            Copyright © {year} Axiom, Inc.
            <span className="hidden md:inline"> All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
