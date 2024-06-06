import { getEvents } from "@/lib/actions/actions";
import EventCard from "./EventCard";
import Image from "next/image";
import { Button } from "../ui/button";
import { MotionDiv } from "../Motions";

const Events = async () => {
  const events = await getEvents();
  return (
    <div className="flex flex-col items-center gap-10 px-5 ">
      <div className="flex flex-col rounded-lg items-start max-md:items-center backdrop-blur-sm backdrop-contrast-125 bg-slate-200 dark:bg-blue-950">
        <div className="flex ">
          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}>
            <Image
              src="https://res.cloudinary.com/dioas9lmz/image/upload/v1716962606/woman-fishing-on-fishing-rod-spinning-in-norway-_fq9iyh.jpg"
              alt="event"
              width={730}
              height={360}
              className="rounded-tl-lg max-lg:hidden"
            />
          </MotionDiv>

          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex max-w-2xl flex-col items-start p-12">
            <p className="text-body-medium mt-8 text-sky-500 mb-4 dark:text-sky-300">
              Events you might be interested in...
            </p>
            <h1 className="text-heading1-bold mt-8 text-sky-900">
              A day on the water is a day well spent.
            </h1>
            <p className="text-base-medium mt-8 text-gray-500 mb-4 dark:text-gray-400">
              All Fishing Events that encourages every type of recreational
              angler to compete! Host salt water, freshwater, boat, kayak,
              shore, bait/lure. It is open to every angler from all ages and
              skill levels.
            </p>
            <Button className="border-none mt-8 rounded-lg hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300 bg-sky-500 dark:bg-sky-900 text-white">
              Discover more
            </Button>
          </MotionDiv>
        </div>

        {!events || events.length === 0 ? (
          <p className="text-body-bold ">No event found</p>
        ) : (
          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="grid grid-cols-4 gap-7 m-7 max-lg:flex max-lg:item-center max-lg:flex-col max-lg:gap-3">
            {events.map((event: EventType) => (
              <EventCard key={event._id} event={event} />
            ))}
          </MotionDiv>
        )}
      </div>
    </div>
  );
};

export default Events;
