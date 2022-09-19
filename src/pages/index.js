import Seo from "../components/seo/Seo";
import PostCard from "../components/postcard/PostCard";
import getPosts from "../helpers.js/getPosts";
import Hero from "../components/hero/Hero";
import Experience from "../components/experience/experience";
export default function Home({ posts }) {
  return (
    <>
      <Seo />
      <Hero />
      <div className="grid md:grid-cols-12 grid-cols-4 gap-4  mt-20">
        <article className="md:col-span-6 col-span-12">
          {posts.map((post) => (
            <PostCard key={post.slug} title={post.data.title} date={post.data.date} description={post.data.description} slug={post.slug} />
          ))}
        </article>
        <div className="col-span-12 rounded-md md:col-start-8 md:col-end-13">
          <Experience />
        </div>
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
