import Link from "next/link";
import React from "react";
import Image from "next/image";

interface BlogPostCard {
  title: string;
  description: string;
  category: string;
  postURL: string;
  cardImage: string;
}

export const BlogPostCard: React.FC<BlogPostCard> = ({
  title,
  description,
  category,
  postURL,
  cardImage,
}) => (
  <div className="w-full px-4 lg:w-1/2 xl:w-1/3 flex flex-col">
    <div className="mb-10 bg-white border border-gray-200 rounded-lg shadow-md dark:border-zinc-700 dark:bg-darkSecondary flex flex-col flex-grow">
      <Link href={postURL}>
        <Image
          className="w-full rounded-t-lg aspect-video"
          src={cardImage}
          width={640}
          height={360}
          alt={title}
        />
      </Link>

      <div className="p-5 flex-grow">
        <Link
          href={`/blog/category/${category}`}
          className="mb-4 font-bold uppercase text-md text-primary dark:text-primary_dark"
        >
          {category}
        </Link>

        <h2 className="my-3 font-semibold tracking-tight text-gray-900 text-md dark:text-white">
          <Link href={postURL}>{title}</Link>
        </h2>
        <p className="mb-3 text-sm font-normal leading-relaxed text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  </div>
);
