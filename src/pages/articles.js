import PostCard from "../components/postcard/PostCard";
import getPosts from "../helpers.js/getPosts";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

function Articles({ posts }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="fade-up" data-aos-duration="800" className="mt-20">
      {posts.map((post) => (
        <PostCard key={post.slug} title={post.data.title} date={post.data.date} description={post.data.description} slug={post.slug} />
      ))}
    </div>
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
