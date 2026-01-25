import "../styles/PostBody.css";

// import PostBody from "../svg/PostBody";
// import PostDetail from "../svg/PostDetail";
// import PostImage from "../svg/PostImage";
import mockPosts from "../data/mockPosts";
import { useState } from 'react';

const Post = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 3;

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = mockPosts.slice(startIndex, endIndex);
  const totalPages = Math.ceil( mockPosts.length / POSTS_PER_PAGE);

  return (
    <div className={"post-container"}>
      <div className={"card-container"}>
        <div className={"image-container"}>

        </div>
        <div className={"details-container"}>
          
        </div>
      </div>
    </div>
  );
};

export default Post; 