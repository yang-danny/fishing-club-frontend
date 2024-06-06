import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SquarePen, BookOpenCheck, CalendarDays } from "lucide-react";
const PublishNewsCard = ({ news }: { news: PublishNewsType }) => {
  return (
    <div className="border-2 drop-shadow-xl bg-white dark:bg-sky-900 border-sky-500 p-4 rounded-lg">
      <Link
        href={`/publishNews/${news._id}`}
        key={news._id}
        className="w-[300px] flex flex-col gap-2 text-sky-900 dark:text-sky-300">
        <Image
          key={news._id}
          src={news.media[0]}
          alt={news.title}
          width={550}
          height={200}
          className="rounded-lg cursor-pointer object-cover hover:scale-105"
        />
        <h2 className="text-3xl font-bold text-sky-500 my-2">{news.title}</h2>
        <div className="flex flex-row justify-start my-2">
          <SquarePen color={"rgb(6, 182, 212)"} />
          <h3 className="text-lg text-gray-500 mx-2">{news.author}</h3>
        </div>
        <div className="flex flex-row justify-start my-2">
          <BookOpenCheck color={"rgb(6, 182, 212)"} />
          <h3 className="text-lg text-gray-500 mx-2">{news.publisher}</h3>
        </div>
        <div className="flex flex-row justify-start my-2">
          <CalendarDays color={"rgb(6, 182, 212)"} />
          <h3 className="text-lg text-gray-500 mx-2">
            {news.createdAt.toString().slice(0, 10)}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default PublishNewsCard;
