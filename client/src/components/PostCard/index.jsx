import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../../utils/mutations";

const PostCard = ({ post }) => {
  const [comment, setComment] = useState("");
  const [addComment, { loading }] = useMutation(ADD_COMMENT);

  const handleSubmit = (e) => {
    e.preventDefault();

    addComment({
      postId: post._id,
      commentText: comment,
    });
  };

  //use tailwind to display the post and the comments, as well as an input field to add a new comment
  return (
    <section className="border border-solid border-black my-2">
      <h4 className="text-gray-500 text-xl">
        <span className="text-gray-300 text-sm">username: </span>
        {post.username}
        <p className="text-gray-300 text-sm">at: {post.createdAt} </p>
      </h4>
      <main>{post.postText}</main>
      <aside>
        <h5 className="text-gray-500 text-xl">Comments:</h5>
        {post.comments.map((comment) => (
          <p className="text-gray-300 text-sm">
            <span className="text-gray-300 text-sm">username: </span>
            {comment.username}
            <p className="text-gray-300 text-sm">at: {comment.createdAt} </p>
            <p className="text-gray-300 text-sm">
              comment: {comment.commentText}
            </p>
          </p>
        ))}
      </aside>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          className="border border-solid border-black"
          type="text"
          placeholder="Add a comment"
        />
        <button
          disabled={loading}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Comment
        </button>
      </form>
    </section>
  );
};

export default PostCard;