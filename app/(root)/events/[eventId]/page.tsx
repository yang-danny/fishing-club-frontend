import { getEventDetails } from "@/lib/actions/actions";
import Image from "next/image";
import HTMLReactParser from "html-react-parser";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home,CalendarClock } from "lucide-react";
import { CalendarDays, Hourglass, MapPin, HandCoins } from "lucide-react";
const EventDetails = async ({ params }: { params: { eventId: string } }) => {
  const eventDetails = await getEventDetails(params.eventId);

  return (
    <div className="bg-slate-200 dark:bg-sky-950">
         <div className="flex justify-start  items-start gap-16 pt-48 px-96 max-md:px-12">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Home />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                <CalendarClock />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{eventDetails.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="px-10 py-6 flex flex-col items-center gap-8 text-sky-900 dark:text-sky-300">
        {eventDetails.media?.map((img: string, index: number) => (
          <Image
            key={index}
            src={img}
            width={960}
            height={600}
            alt="collection"
            className="w-[800px] h-auto object-cover rounded-xl"
          />
        ))}
      </div>
      <div className="px-80 pt-6 flex flex-col items-start  text-sky-900 dark:text-sky-300 max-lg:px-12">
        <p className="text-heading3-bold text-grey-2">{eventDetails.title}</p>
        <div className="flex flex-row justify-start my-2">
          <CalendarDays color={"rgb(6, 182, 212)"} />
          <h3 className="text-lg text-gray-500 mx-2">{eventDetails.date}</h3>
        </div>
        <div className="flex flex-row justify-start my-2">
          <Hourglass color={"rgb(6, 182, 212)"} />
          <h3 className="text-lg text-gray-500 mx-2">{eventDetails.time}</h3>
        </div>
        <div className="flex flex-row justify-start my-2">
          <MapPin color={"rgb(6, 182, 212)"} />
          <h3 className="text-lg text-gray-500 mx-2">
            {eventDetails.location}
          </h3>
        </div>
        <div className="flex flex-row justify-start my-2">
          <HandCoins color={"rgb(6, 182, 212)"} />
          <h3 className="text-lg text-gray-500 mx-2">{eventDetails.funder}</h3>
        </div>
        <div className="w-full h-auto mt-2">{HTMLReactParser(eventDetails.body)}</div>;
      </div>
      </div>
  );
};

export default EventDetails;
