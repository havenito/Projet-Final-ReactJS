import { useState } from "react";
import { useAuth } from "../../auth/AuthProvider";
import { Login } from "../../auth/LoginOut";
import "./Comments.scss";

export function Comment() {
  const { user } = useAuth();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      text: newComment,
      author: user?.username || "Anonyme",
      date: new Date(),
    };

    setComments([...comments, comment]);
    setNewComment("");
  };

  return (
    <div className="comments-container">
      <h2 className="comments-title">Commentaires</h2>
      {user ? (
        <form className="comment-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="newComment">Ajouter un commentaire</label>
            <textarea
              id="newComment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      ) : (
        <Login />
      )}
      <ul className="comment-list">
        {comments.map((comment) => (
          <li key={comment.id} className="comment-item">
            <div className="comment-author">{comment.author}</div>
            <div className="comment-date">{comment.date.toLocaleString()}</div>
            <div className="comment-text">{comment.text}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}