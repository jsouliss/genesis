import "../styles/component_styles/PostBody.css";

import PostBody from "../svg/PostBody";
import PostDetail from "../svg/PostDetail";
import PostImage from "../svg/PostImage";

const postDetails = [
  { id: 0, image: "image1.jpg", detail: "Detail 1" },
  { id: 1, image: "image2.jpg", detail: "Detail 1" },
  { id: 2, image: "image1.jpg", detail: "Detail 2" },
];

const Post = () => {
  return (
    <div className="post-body">
      <PostBody />
      {postDetails.map((post, index) => (
        <div
          key={post.id}
          className={"post-details"}
          style={{ top: `${index * 250}px`, marginTop: "50px" }}
        >
          <PostImage src={post.image} />
          <PostDetail text={post.detail} />
        </div>
      ))}
    </div>
  );
};

export default Post;
