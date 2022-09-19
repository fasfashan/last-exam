import Link from "next/link";
import Button from "../button/Button";
import { HiChevronRight } from "react-icons/hi";
function PostCard({ title, date, description, slug }) {
  return (
    <div className="space-y-4 p-6 border border-zinc-200 mb-4 hover:shadow-md rounded-md">
      <time className="text-slate-600 text-sm">{date}</time>
      <h2 className="font-semibold text-base my-4">{title}</h2>
      <p className="text-sm text-slate-600">{description}</p>

      <Link href="/blog/[slug]" as={`/blog/${slug}`}>
        <a>
          <Button>
            Read More <HiChevronRight />
          </Button>
        </a>
      </Link>
    </div>
  );
}

export default PostCard;
