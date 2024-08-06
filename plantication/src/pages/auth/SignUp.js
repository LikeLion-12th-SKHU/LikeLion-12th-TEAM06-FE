import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [username, setUsername] = useState("");
  const [repassword, setRepassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [repsError, setRepsError] = useState("");
  const navigate = useNavigate();

  const [profileImage, setProfileImage] = useState(
    "path/to/default/profile/image.jpg"
  );
  const [profilePreview, setProfilePreview] = useState(null);

  const handleProfileEdit = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      setProfilePreview(URL.createObjectURL(file));
    }
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;
    if (!passwordRegex.test(value)) {
      setPasswordError(
        "비밀번호는 8자리에서 16자리의 영문 숫자 조합이어야 합니다."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleRepasswordChange = (event) => {
    const { value } = event.target;
    setRepassword(value);

    if (value !== password) {
      setRepsError("비밀번호가 일치하지 않습니다.");
    } else {
      setRepsError("");
    }
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("유효한 이메일 주소를 입력해주세요.");
    } else {
      setEmailError("");
    }
  };

  const handleChange = (e) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  };

  useEffect(() => {
    if (inputValue.length === 10) {
      setInputValue(inputValue.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
    }
    if (inputValue.length === 13) {
      setInputValue(
        inputValue
          .replace(/-/g, "")
          .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    }
  }, [inputValue]);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== repassword) {
      setRepsError("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const response = await axios.post(
        "http://plantication.site/api/v1/auth",
        {
          email,
          password,
          repassword,
          nickname,
          profileImage,
        }
      );

      const { accessToken, refreshToken } = response.data.data;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      alert("회원가입 완료!");
      navigate("/auth/login");
    } catch (error) {
      if (error.response) {
        console.log("error");
      }
    }
  };

  return (
    <>
      <MainContainer>
        <BackStyle onClick={() => navigate("/auth")}>←</BackStyle>
        <Container>
          <Header>회원가입하고 다양한 혜택을 누리세요!</Header>
          <ProfileImage
            src={profilePreview || profileImage}
            alt="Profile Preview"
          />
          <EditButton>
            프로필 이미지
            <input type="file" accept="image/*" onChange={handleProfileEdit} />
          </EditButton>
          <Form onSubmit={handleSignUp}>
            <Label>
              이름(닉네임) *
              <Input
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </Label>
            <Label>
              아이디 *
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Label>
            <Label>
              비밀번호(8~16자리 영문, 숫자 조합) *
              <Input
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
              {passwordError && <Error>{passwordError}</Error>}
            </Label>
            <Label>
              비밀번호 확인 *
              <Input
                type="password"
                value={repassword}
                onChange={handleRepasswordChange}
              />
              {repsError && <Error>{repsError}</Error>}
            </Label>
            <Label>
              이메일
              <Input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="email@ddd.com"
              />
              {emailError && <Error>{emailError}</Error>}
            </Label>
            <Label>
              휴대폰 번호 *
              <Input
                type="text"
                onChange={handleChange}
                value={inputValue}
                placeholder="010-0000-0000"
              />
            </Label>
            <Button type="submit">회원가입</Button>
          </Form>
        </Container>
      </MainContainer>
    </>
  );
}

export default SignUp;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 390px;
  height: 100vh;
  box-sizing: border-box;
  background-color: #fdfdfd;
  margin: 0 auto;
  padding: 20px;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const BackStyle = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
`;

const Header = styled.h1`
  font-size: 18px;
  text-align: center;
  margin-bottom: 30px;
`;

const Form = styled.form`
  width: 100%;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 6px;
  margin-top: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  height: 35px;
`;

const Button = styled.button`
  border: 1px solid #bababa;
  background-color: #0a5308;
  color: #fff;
  cursor: pointer;
  text-align: center;
  height: 35px;
  width: 100px;
  margin-top: 20px;
`;

const Error = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 4px;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const EditButton = styled.label`
  display: inline-block;
  padding: 10px;
  font-size: 12px;
  border: none;
  border-radius: 10px;
  background-color: #0a5308;
  color: white;
  cursor: pointer;
  position: relative;

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`;
