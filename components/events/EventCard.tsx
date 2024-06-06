"use client";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Hourglass } from "lucide-react";

const EventCard = ({ event }: { event: EventType }) => {
  return (
    <div className="border-2 drop-shadow-xl bg-white dark:bg-sky-900 p-4 rounded-lg border-sky-500">
      <Link
        href={`/events/${event._id}`}
        key={event._id}
        className="w-[300px] flex flex-col gap-2 text-sky-900 dark:text-sky-300">
        <Image
          key={event._id}
          src={event.media[0]}
          alt={event.title}
          width={550}
          height={200}
          className="rounded-lg cursor-pointer object-cover hover:scale-105 duration-300"
        />
        <h2 className="text-3xl font-bold text-sky-500 my-2">{event.title}</h2>
        <div className="flex flex-row justify-start my-2">
          <CalendarDays color={"rgb(6, 182, 212)"} />
          <h3 className="text-lg text-gray-500 mx-2">{event.date}</h3>
        </div>
        <div className="flex flex-row justify-start my-2">
          <Hourglass color={"rgb(6, 182, 212)"} />
          <h3 className="text-lg text-gray-500 mx-2">{event.time}</h3>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
