import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Singlepage = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPost(res.data));
  }, [id]);

  return (
    <div>
      {post && (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default Singlepage;
