import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Postspage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data));
  }, []);

  return (
    <div className="postpage">
      <h1>Posts page</h1>
      {posts.map((post) => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          <li>{post.title}</li>
        </Link>
      ))}
    </div>
  );
};

export default Postspage;
