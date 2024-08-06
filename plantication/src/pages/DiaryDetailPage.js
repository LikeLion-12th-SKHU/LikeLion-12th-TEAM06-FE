import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import { getDiary, addComment, deleteComment, updateComment } from "../api";

function DiaryDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingContent, setEditingContent] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await getDiary(id);
        setPost(response.data);
        setComments(response.data.comments);
      } catch (error) {
        console.error("Failed to fetch diary data:", error);
      }
    };

    fetchPost();
  }, [id]);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      try {
        const response = await addComment(id, newComment.trim());
        setComments([...comments, response.data]);
        setNewComment("");
      } catch (error) {
        console.error("Failed to add comment:", error);
      }
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      const userId = 1; // Replace with actual userId
      await deleteComment(id, commentId, userId);
      setComments(comments.filter((comment) => comment.id !== commentId));
    } catch (error) {
      console.error("Failed to delete comment:", error);
    }
  };

  const handleEditComment = (comment) => {
    setEditingCommentId(comment.id);
    setEditingContent(comment.content);
  };

  const handleUpdateComment = async (e) => {
    e.preventDefault();
    if (editingContent.trim()) {
      try {
        const userId = 1; // Replace with actual userId
        await updateComment(
          id,
          editingCommentId,
          userId,
          editingContent.trim()
        );
        setComments(
          comments.map((comment) =>
            comment.id === editingCommentId
              ? { ...comment, content: editingContent }
              : comment
          )
        );
        setEditingCommentId(null);
        setEditingContent("");
      } catch (error) {
        console.error("Failed to update comment:", error);
      }
    }
  };

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <DetailContainer>
      <CancelBtn onClick={() => navigate("/diary")}>←</CancelBtn>
      <PostCard>
        <Image src={post.image} alt={post.title} />
        <PostContent>
          <Title>{post.title}</Title>
          <Content>{post.content}</Content>
          <Metrics>
            <Likes>❤️ {post.likes}</Likes>
            <Comments>💬 {comments.length}</Comments>
          </Metrics>
          <Date>{new Date(post.createdAt).toLocaleDateString()}</Date>
        </PostContent>
      </PostCard>
      <CommentSection>
        <CommentList>
          {comments.map((comment) => (
            <CommentItem key={comment.id}>
              {editingCommentId === comment.id ? (
                <form onSubmit={handleUpdateComment}>
                  <CommentInput
                    type="text"
                    value={editingContent}
                    onChange={(e) => setEditingContent(e.target.value)}
                  />
                  <SubmitButton type="submit">Update</SubmitButton>
                </form>
              ) : (
                <>
                  {comment.content}
                  <EditButton onClick={() => handleEditComment(comment)}>
                    Edit
                  </EditButton>
                  <DeleteButton onClick={() => handleDeleteComment(comment.id)}>
                    Delete
                  </DeleteButton>
                </>
              )}
            </CommentItem>
          ))}
        </CommentList>
        <CommentForm onSubmit={handleCommentSubmit}>
          <CommentInput
            type="text"
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Write a comment..."
          />
          <SubmitButton type="submit">Submit</SubmitButton>
        </CommentForm>
      </CommentSection>
      <Footer />
    </DetailContainer>
  );
}

export default DiaryDetailPage;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  background-color: #fdfdfd;
  align-items: center;
  height: 100vh;
  position: relative;
`;

const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
  margin-top: 60px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const PostContent = styled.div`
  padding: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
  margin-bottom: 10px;
`;

const Content = styled.p`
  font-size: 16px;
  margin: 0;
  margin-bottom: 20px;
`;

const Metrics = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Date = styled.p`
  color: #888;
  margin: 0;
`;

const Likes = styled.div`
  color: red;
`;

const Comments = styled.div`
  color: blue;
`;

const CancelBtn = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  font-size: 30px;
  font-weight: bold;
  color: #000;
`;

const CommentSection = styled.div`
  width: 100%;
  max-width: 100%;
  margin-top: 20px;
`;

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CommentItem = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`;

const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const CommentInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const EditButton = styled.button`
  padding: 5px;
  font-size: 12px;
  border: none;
  border-radius: 3px;
  background-color: #f0ad4e;
  color: white;
  cursor: pointer;
  margin-left: 5px;

  &:hover {
    background-color: #ec971f;
  }
`;

const DeleteButton = styled.button`
  padding: 5px;
  font-size: 12px;
  border: none;
  border-radius: 3px;
  background-color: #d9534f;
  color: white;
  cursor: pointer;
  margin-left: 5px;

  &:hover {
    background-color: #c9302c;
  }
`;
