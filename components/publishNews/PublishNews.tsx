import { getPublishNews } from "@/lib/actions/actions";
import PublishNewsCard from "./PublishNewsCard";
import { Button } from "../ui/button";
import Image from "next/image";
import { MotionDiv } from "../Motions";
const PublishNews = async () => {
  const publishNews = await getPublishNews();
  return (
    <div className="flex flex-col items-center gap-10 px-5 py-16">
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
            }}
            className="flex max-w-2xl flex-col items-start p-12 mr-20">
            <p className="text-body-medium mt-8 text-sky-500 mb-4 dark:text-sky-300">
              Explore the World of Fishing with Us...
            </p>
            <h1 className="text-heading1-bold mt-8 text-sky-900">
              Conservation, Ethics, and Fishing Stories
            </h1>
            <p className="text-base-medium mt-8 text-gray-500 mb-4 dark:text-gray-400">
              Live Recreational Fishing news coverage of developments with the
              latest updates. Stay on top of latest Recreational Fishing news
              stories and find out what ...
            </p>
            <Button className="border-none mt-8 rounded-lg hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300 bg-sky-500 dark:bg-sky-900 text-white">
              Discover more
            </Button>
          </MotionDiv>
          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}>
            <Image
              src="https://res.cloudinary.com/dioas9lmz/image/upload/v1716978734/aerial-view-of-the-fishing-boats-in-clear-blue-wat-resize-qcwwhlog6x9nb6p2tz2s08p6grcn637uxse3308tw8_jwoxh8.jpg"
              alt="news"
              width={731}
              height={360}
              className="rounded-tr-lg max-lg:hidden"
            />
          </MotionDiv>
        </div>
        {!publishNews || publishNews.length === 0 ? (
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
            className="grid grid-cols-4 gap-7 m-7 max-md:flex max-md:flex-col max-md:gap-3">
            {publishNews.map((news: PublishNewsType) => (
              <PublishNewsCard key={news._id} news={news} />
            ))}
          </MotionDiv>
        )}
      </div>
    </div>
  );
};

export default PublishNews;
