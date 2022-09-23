import PostCard from "../components/postcard/PostCard";
import getPosts from "../helpers.js/getPosts";
import Seo from "../components/seo/Seo";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

function Articles({ posts }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Seo templateTitle="Artikel" />
      <ul className="mt-20 grid gap-4 sm:grid-cols-2 xl:grid-cols-3" data-aos="fade-up" data-aos-duration="800">
        {posts.map((post) => (
          <PostCard key={post.slug} title={post.data.title} date={post.data.date} description={post.data.description} slug={post.slug} />
        ))}
      </ul>
    </>
  );
}

export default Articles;
export const getStaticProps = () => {
  const posts = getPosts();
  return {
    props: {
      posts,
    },
  };
};
