import Link from "next/link";
import Button from "../button/Button";

function PostCard({ title, date, description, slug }) {
  return (
    <article className="my-4 py-4 ">
      <h2 className="font-bold text-2xl my-4">{title}</h2>
      <time className="text-gray-400">{date}</time>
      <p className="mt-4 italic">{description}</p>

      <Link href="/blog/[slug]" as={`/blog/${slug}`}>
        <a>
          <Button>Read More</Button>
        </a>
      </Link>
    </article>
  );
}

export default PostCard;
