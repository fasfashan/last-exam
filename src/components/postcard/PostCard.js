import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { HiChevronRight } from "react-icons/hi";
function PostCard({ title, date, description, slug }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="space-y-4  p-6 border border-zinc-200 mb-4 hover:shadow-md rounded-md">
      <time className="text-slate-500 text-sm">{date}</time>
      <h2 className="font-semibold text-base my-4">{title}</h2>
      <p className="text-sm text-slate-500">{description}</p>

      <Link className="" href="/blog/[slug]" as={`/blog/${slug}`}>
        <a className=" text-sm text-teal-500 font-medium hover:text-teal-200">
          Lanjut baca <HiChevronRight className="inline-block" />
        </a>
      </Link>
    </div>
  );
}

export default PostCard;
