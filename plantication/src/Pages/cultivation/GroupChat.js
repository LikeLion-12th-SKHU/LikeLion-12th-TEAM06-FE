import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";
import { BsSend } from "react-icons/bs";

function GroupChat() {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [group, setGroup] = useState("");

  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem("joinedGroups")) || [];
    const currentGroup = storedGroups[groupId];
    setGroup(currentGroup);
  }, [groupId]);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    setMessages([
      ...messages,
      { text: newMessage, sender: "You", type: "text" },
    ]);
    setNewMessage("");
  };

  return (
    <MainContainer>
      <ChatHeader>
        <BackButton onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </BackButton>
        {group && (
          <>
            <HeaderText>{group.title}</HeaderText>
            <Participants>{group.number}</Participants>
          </>
        )}
      </ChatHeader>
      <MessagesContainer>
        {messages.map((message, index) => (
          <Message key={index}>
            <UserAvatar
              src="https://via.placeholder.com/40"
              alt="User Avatar"
            />
            <MessageContent>
              <MessageSender>{message.sender}</MessageSender>
              {message.type === "text" ? (
                <MessageText>{message.text}</MessageText>
              ) : (
                <MessageImage src={message.text} alt="Message Image" />
              )}
            </MessageContent>
          </Message>
        ))}
      </MessagesContainer>
      <MessageInputContainer>
        <MessageInput
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="메시지를 입력하세요"
        />
        <SendButton onClick={handleSendMessage}>
          <BsSend />
        </SendButton>
      </MessageInputContainer>
    </MainContainer>
  );
}

export default GroupChat;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 390px;
  height: 100vh;
  box-sizing: border-box;
  background-color: #fdfdfd;
  margin: 0 auto;
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #4caf50;
  color: white;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`;

const HeaderText = styled.h1`
  font-size: 18px;
  margin: 0;
`;

const Participants = styled.div`
  font-size: 14px;
`;

const MessagesContainer = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const Message = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 1rem;
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const MessageSender = styled.div`
  font-weight: bold;
  margin-bottom: 0.2rem;
`;

const MessageText = styled.div`
  background-color: #f1f1f1;
  padding: 0.5rem;
  border-radius: 5px;
`;

const MessageImage = styled.img`
  width: 200px;
  border-radius: 10px;
`;

const MessageInputContainer = styled.div`
  display: flex;
  padding: 1rem;
  background-color: #f1f1f1;
`;

const MessageInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 0.5rem;
`;

const SendButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;

  &:hover {
    background-color: #45a049;
  }
`;
