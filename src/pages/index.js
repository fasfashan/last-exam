import Seo from "../components/seo/Seo";
import { useEffect } from "react";
import PostCard from "../components/postcard/PostCard";
import getPosts from "../helpers.js/getPosts";
import Hero from "../components/hero/Hero";
import Experience from "../components/experience/experience";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home({ posts }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Seo />
      <Hero />
      <div className="grid md:grid-cols-12 grid-cols-4 gap-4  mt-20">
        <article data-aos="fade-up" data-aos-duration="800" className="md:col-span-6 col-span-12">
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
