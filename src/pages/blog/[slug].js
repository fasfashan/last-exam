import { MDXRemote } from "next-mdx-remote";
import getPost from "../../helpers.js/getPost";
import getPosts from "../../helpers.js/getPosts";
import { serialize } from "next-mdx-remote/serialize";

import Seo from "../../components/seo/Seo";

function Post({ data, content, image }) {
  return (
    <>
      <Seo templateTitle={data.title} description={data.description} image={data.image} />

      <h1 className="font-bold text-7xl mt-24 mb-12">{data.title}</h1>
      <time className="text-gray-500 italic">{data.date}</time>
      <p className="prose mt-12">
        <MDXRemote {...content} />
      </p>
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
