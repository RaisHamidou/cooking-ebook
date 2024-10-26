"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import URL from "../config/config";
const Posts = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPost, setCurrentPost] = useState();
  const [postState, setpostState] = useState(false);

  const current = loading
    ? ""
    : posts.data.filter((filtre) => filtre.id === currentPost);

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      const res = await axios.get(`${URL}/api/instagram-posts`);
      setPosts(res.data);
      setLoading(false);
    };
    loadPost();
  }, []);

  let nombreOfPosts = 5; 
  return (
    <section id="posts">
      {/*  <h1>Dernieres réalisations</h1> */}

      <div className="container-posts">

        {loading ? "": posts.data.slice(0, nombreOfPosts).map((post,index)=>{
          return(<div key={index} className="post"><img src={post.media_url} alt={post.caption} /></div>)
          
        })}
        {/* <div className="post">a</div>
        <div className="post">a</div>
        <div className="post">a</div>
        <div className="post">a</div>
        <div className="post">a</div> */}
        
      </div>
    </section>
  );
};

export default Posts;
