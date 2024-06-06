"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Rating } from "./Rating";
import Image from "next/image";
import { Separator } from "./ui/separator";
import ImageUpload from "./ImageUpload";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Stars from "./Stars";

const formSchema = z.object({
  product: z.string().min(2).max(100),
  customer: z.string().min(2).max(100),
  order: z.string().min(2).max(100),
  title: z.string().min(2).max(100),
  rating: z.number(),
  body: z.string().min(2).max(800).trim(),
  media: z.string(),
});

const Review = ({
  productReviews,
  customerId,
  productId,
  orderId,
}: {
  productReviews: ReviewType[];
  customerId: string;
  productId: string;
  orderId: string;
}) => {
  const [stars, setStarts] = useState<number>(0);
  const handleCallback = (number: number) => {
    setStarts(number);
  };
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      product: productId,
      customer: customerId,
      order: orderId,
      title: "",
      rating: 0,
      body: "",
      media: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    values.rating = stars;
    try {
      setLoading(true);
      const url = `${process.env.NEXT_PUBLIC_API_URL}/reviews`;
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setLoading(false);
        toast.success("Review this product successfully");
        window.location.reload()
      }
    } catch (err) {
      toast.error("Something went wrong! Please try again.");
    }
  };
  const handleKeyPress = (
    e:
      | React.KeyboardEvent<HTMLInputElement>
      | React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };
  return (
    <div className="flex flex-col justify-center items-start gap-8 px-96 py-1 max-md:px-10">
      <p className="text-heading3-bold text-sky-900">Reviews:</p>
      {orderId && (
        <>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex gap-4 flex-col w-full">
              <p className="font-bold">Write a review:</p>
              <div className="flex flex-col">
                <p className="font-bold mb-2">Click for Rating</p>
                <Stars callback={handleCallback} />
              </div>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Add a title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="What is the most important to know?"
                        className=" h-8 rounded-md"
                        {...field}
                        onKeyDown={handleKeyPress}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="body"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">
                      Add a written review
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="What did you like or dislike? What did you use this produce for?"
                        {...field}
                        rows={5}
                        onKeyDown={handleKeyPress}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="media"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="font-bold">Add a photo</FormLabel>
                    <p className="text-gray-400">
                      Shoppers find images and videos more helpful than text
                      alone.
                    </p>
                    <FormControl>
                      <ImageUpload
                        value={field.value ? [field.value] : []}
                        onChange={(url) => field.onChange(url)}
                        onRemove={() => field.onChange("")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-10">
                <Button
                  type="submit"
                  className="bg-sky-900 rounded-lg text-white">
                  Submit
                </Button>
              </div>
            </form>
            <Separator />
          </Form>
        </>
      )}
      {productReviews?.map((review: ReviewType) => (
        <div key={review._id} className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>{review.customer.name}</AvatarFallback>
            </Avatar>
            <p className="font-bold">{review.customer.name}</p>
          </div>
          <div className="my-2">
            <Rating value={review.rating} caption={" "} />
            <p className="font-bold text-heading4-bold my-2">{review.title}</p>
            <p className="text-gray-400 my-2">
              Reviewed on{" "}
              <span className="font-bold">
                {new Date(review.createdAt).toDateString()}
              </span>
            </p>
            <p className="my-2">{review.body}</p>
            {review.media[0] ? (
              <Image
                src={review.media[0]}
                alt="product"
                width={250}
                height={300}
                className="h-[220px] rounded-lg object-cover my-2 "
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      ))}

      <Separator />
    </div>
  );
};

export default Review;
