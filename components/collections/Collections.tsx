import { getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";
import { MotionDiv } from "../Motions";
const Collections = async () => {
  const collections = await getCollections();

  return (
    <div className="flex flex-col items-center gap-10 px-5 ">
      <div className="flex flex-col rounded-lg items-start backdrop-blur-sm backdrop-contrast-125 bg-slate-200 dark:bg-blue-950">
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
              src="https://res.cloudinary.com/dioas9lmz/image/upload/v1716980782/front-view-fisherman-holding-fishing-rod-pointing-blank-placard_23-2148429545_kdw7yj.jpg"
              alt="collection"
              width={810}
              height={320}
              className="rounded-l-lg max-lg:hidden"
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
              We Educate and Inspire...
            </p>
            <h1 className="text-heading1-bold mt-8 text-sky-900">
              Discover Expert Advice and Professional Gears Here
            </h1>
            <div className="grid grid-cols-2 gap-24 mt-8 max-lg:gap-8">
              <ul>
                <li className="flex flex-row">
                  <ChevronsRight className="text-sky-500 mr-4 mb-4" />
                  <p className="text-sky-900">Latest Fishing Gears</p>
                </li>
                <li className="flex flex-row">
                  <ChevronsRight className="text-sky-500 mr-4 mb-4" />
                  <p className="text-sky-900">Best Carbon Reels</p>
                </li>
                <li className="flex flex-row">
                  <ChevronsRight className="text-sky-500 mr-4 mb-4" />
                  <p className="text-sky-900">Bargain Deals</p>
                </li>
              </ul>
              <ul>
                <li className="flex flex-row">
                  <ChevronsRight className="text-sky-500 mr-4 mb-4" />
                  <p className="text-sky-900">Member Price</p>
                </li>
                <li className="flex flex-row">
                  <ChevronsRight className="text-sky-500 mr-4 mb-4" />
                  <p className="text-sky-900">Special Sale</p>
                </li>
                <li className="flex flex-row">
                  <ChevronsRight className="text-sky-500 mr-4 mb-4" />
                  <p className="text-sky-900">Black Friday</p>
                </li>
              </ul>
            </div>
            {!collections || collections.length === 0 ? (
              <p className="text-body-bold ">No collections found</p>
            ) : (
              <div className="flex flex-col items-center justify-center mt-2 gap-8">
                {collections.map((collection: CollectionType) => (
                  <Link
                    href={`/collections/${collection._id}`}
                    key={collection._id}>
                    <Image
                      key={collection._id}
                      src={collection.image}
                      alt={collection.title}
                      width={550}
                      height={100}
                      className="rounded-lg cursor-pointer object-cover hover:scale-105 duration-300"
                    />
                  </Link>
                ))}
              </div>
            )}
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};

export default Collections;
