import { useUser } from "@clerk/clerk-react";
import Header from "./Header";
import { useEffect, useState, useCallback } from "react";
import { useSocialContext } from "../../context/SocialContext";
import ConfigFunc from "../../context/ConfigFunc";
import Posts from "./Posts";

const FeedPage = () => {
  const { registerNewUser } = useSocialContext();
  const { paddingStyles } = ConfigFunc();
  const { user } = useUser();

  const [posts, setPosts] = useState([]); // State to hold the posts
  const [page, setPage] = useState(1); // State for pagination
  const [loading, setLoading] = useState(false); // Loading indicator
  const [hasMore, setHasMore] = useState(true); // Check if more data exists

  // Fetch posts from API
  const fetchPosts = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      );
      const data = await response.json();

      if (data.length > 0) {
        setPosts((prevPosts) => [...prevPosts, ...data]); // Append posts
        setPage((prevPage) => prevPage + 1); // Increment page
      } else {
        setHasMore(false); // No more data available
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore]);

  // Register user and fetch posts
  useEffect(() => {
    if (user) registerNewUser();
    fetchPosts();
  }, [user]);

  // Infinite Scroll Handler
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 50 && // Scroll threshold
      !loading
    ) {
      fetchPosts();
    }
  }, [fetchPosts, loading]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className={`w-full ${paddingStyles}`}>
      <Header />
      <Posts posts={posts} />
      {loading && <p className="text-center my-4">Loading...</p>}
      {!hasMore && <p className="text-center my-4">No more posts available</p>}
    </div>
  );
};

export default FeedPage;
