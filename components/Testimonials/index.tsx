import { list } from "./list";
import Image from "next/image";
import { FC } from "react";

type Item = {
  image: string;
  name: string;
  twitter: string;
  url: string;
  testimonial: string;
};

const Testimonial: FC<Item> = ({ image, name, twitter, url, testimonial }) => {
  return (
    <div className="bg-rose-200 border border-[#ffffff22] rounded-lg shadow-lg p-6 min-w-[300px] max-w-[300px]">
      <div className="flex items-center">
        <Image
          alt="avatar"
          src={image}
          className="rounded-full"
          width={55}
          height={55}
        />
        <div className="ml-3 ">
          <div className="font-semibold text-violet-800">{name}</div>
          <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label="twitter profile"
            >
              {twitter}
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6 text-sm leading-relaxed text-gray-700">
        {testimonial}
      </div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <div className="flex pb-4 mt-16 space-x-3 overflow-x-auto">
      {list.map((item: Item, index: number) => {
        return (
          <Testimonial
            key={`${index}`}
            image={item.image}
            name={item.name}
            twitter={item.twitter}
            url={item.url}
            testimonial={item.testimonial}
          />
        );
      })}
    </div>
  );
};
