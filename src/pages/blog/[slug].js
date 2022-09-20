import { MDXRemote } from "next-mdx-remote";
import getPost from "../../helpers.js/getPost";
import getPosts from "../../helpers.js/getPosts";
import { serialize } from "next-mdx-remote/serialize";

import Seo from "../../components/seo/Seo";

function Post({ data, content, image }) {
  return (
    <>
      <Seo templateTitle={data.title} description={data.description} image={data.image} />
      <article className="max-w-2xl space-y-4 mx-auto mt-20">
        <time className="text-gray-500 ">{data.date}</time>
        <h1 className="md:text-4xl text-3xl  leading-tight  font-bold">{data.title}</h1>
        <p className="prose">
          <MDXRemote {...content} />
        </p>
      </article>
    </>
  );
}

export default Post;

export const getStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = getPost(params.slug);
  const mdxSource = await serialize(post.content);
  return {
    props: {
      data: post.data,
      content: mdxSource,
    },
  };
};
