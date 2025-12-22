/* eslint-disable @typescript-eslint/no-unused-vars */
import { MessageSquare } from "lucide-react";
import Image from "next/image";
import React from "react";
import Button from "../../ui/button/Button";
import ScrollAnimator from "../../../utils/animation/scrollAnimation/ScrollAnimator";
import Link from "next/link";

interface BlogCardProps {
  id?: number;
  image: string;
  date: string;
  comments: number;
  title: string;
  description: string;
  onReadMore?: string;
  slug?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  date,
  comments,
  title,
  description,
  // onReadMore,
  slug,
  id,
}) => {
  return (
    <div className="hover:border-primary rounded-xl overflow-hidden border border-border-color-one  w-full h-[525px] animate-flip-down animate-once">
      <ScrollAnimator effect="fadeIn" repeatOnScroll duration={1.5}>
        <div className="px-4 w-full">
          <div className="relative w-full h-[231px] overflow-hidden rounded-xl my-4">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover object-center rounded-xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </ScrollAnimator>

      <div className="flex flex-col justify-between h-[246px] px-4 mb-4 ">
        <div className="flex items-center justify-between text-xs text-gray-500 gap-5">
          <span className="font-light">{date}</span>
          <div className="flex items-center gap-1.5 bg-primary text-white px-2.5 py-1 rounded">
            <MessageSquare size={14} fill="white" />
            <span className="font-medium">{comments}</span>
          </div>
        </div>
        <ScrollAnimator effect="fadeIn" repeatOnScroll duration={1.5}>
          <Link
            href={`/blog-details/${slug}`}
            className="text-xl font-title font-bold text-gray-900 leading-snug "
          >
            {title}
          </Link>
        </ScrollAnimator>
        <ScrollAnimator effect="fadeIn" repeatOnScroll duration={1.5}>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            {description}
          </p>
        </ScrollAnimator>
        <Button variant="primary" href={`/blog-details/${slug}`}>
          Read More
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;
