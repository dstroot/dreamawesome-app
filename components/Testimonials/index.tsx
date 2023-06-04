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
    <div className="bg-rose-100 border border-[#ffffff22] rounded-lg shadow-lg p-6 min-w-[250px]">
      <div className="flex items-center">
        <Image
          alt="avatar"
          src={image}
          className="rounded-full"
          width={55}
          height={55}
        />
        <div className="ml-3 ">
          <div className="font-bold text-violet-700">{name}</div>
          {/* <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500"> */}
          <div className=" text-violet-600">
            {/* <a
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label="twitter profile"
            > */}
            {twitter}
            {/* </a> */}
          </div>
        </div>
      </div>
      <div className="mt-6 text-sm leading-relaxed text-rose-900">
        {testimonial}
      </div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <div className="grid grid-cols-1 gap-4 mt-12 mb-12 sm:grid-cols-2 xl:grid-cols-4">
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
