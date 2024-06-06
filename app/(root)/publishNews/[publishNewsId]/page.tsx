import Image from "next/image";
import HTMLReactParser from "html-react-parser";
import { getPublishNewsDetails } from "@/lib/actions/actions";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home,Newspaper } from "lucide-react";
import { SquarePen, BookOpenCheck, CalendarDays } from "lucide-react";
const PublishNewsDetails = async ({
  params,
}: {
  params: { publishNewsId: string };
}) => {
  const publishNewsDetails = await getPublishNewsDetails(params.publishNewsId);
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
                <Newspaper />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{publishNewsDetails.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="px-10 py-5 flex flex-col items-center gap-8 text-sky-900 dark:text-sky-300">
        {publishNewsDetails.media?.map((img: string, index: number) => (
          <Image
            key={index}
            src={img}
            width={960}
            height={400}
            alt="collection"
            className="w-[960px] h-auto object-cover rounded-xl"
          />
        ))}
      </div>
      <div className="px-80 py-5 flex flex-col items-start  text-sky-900 dark:text-sky-300 max-lg:px-12">
        <p className="text-heading3-bold text-grey-2">
          {publishNewsDetails.title}
        </p>
        <div className="flex flex-row justify-start my-2">
          <SquarePen color={"rgb(6, 182, 212)"} />
          <h3 className="text-lg text-gray-500 mx-2">
            {publishNewsDetails.author}
          </h3>
        </div>
        <div className="flex flex-row justify-start my-2">
          <BookOpenCheck color={"rgb(6, 182, 212)"} />
          <h3 className="text-lg text-gray-500 mx-2">
            {publishNewsDetails.publisher}
          </h3>
        </div>
        <div className="flex flex-row justify-start my-2">
          <CalendarDays color={"rgb(6, 182, 212)"} />
          <h3 className="text-lg text-gray-500 mx-2">
            {publishNewsDetails.createdAt.toString().slice(0, 10)}
          </h3>
        </div>
        <div className="w-full h-auto mt-2">{HTMLReactParser(publishNewsDetails.body)}</div>;
      </div>
      </div>
  );
};

export default PublishNewsDetails;
