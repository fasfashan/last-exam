import Seo from "../components/seo/Seo";
import PostCard from "../components/postcard/PostCard";
import getPosts from "../helpers.js/getPosts";
import Hero from "../components/hero/Hero";
export default function Home({ posts }) {
  return (
    <>
      <Seo />
      <Hero />
      <div>
        <h1 className="mt-24 mb-12 font-bold text-3xl">Latest Posts</h1>
        {posts.map((post) => (
          <PostCard key={post.slug} title={post.data.title} date={post.data.date} description={post.data.description} slug={post.slug} />
        ))}
      </div>
    </>
  );
}
export const getStaticProps = () => {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
};
