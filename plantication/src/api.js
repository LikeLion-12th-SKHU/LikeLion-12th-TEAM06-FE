import axios from "axios";

const api = axios.create({
  baseURL: "http://plantication.site", // API의 기본 URL 설정
});

// 식물 도감 리스트를 가져오는 함수cd
export const getPlantGuides = () => api.get("/guide");

// 새로운 식물 정보를 생성하는 함수
export const createPlant = (plantData) => {
  const formData = new FormData();
  formData.append("user", plantData.user);
  formData.append("title", plantData.title);
  formData.append("sentence", plantData.sentence);
  formData.append("content", plantData.content);
  formData.append("image", plantData.image);

  return api.post("/guide", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getDiaries = () => api.get("/diary");

export const getDiary = (diaryId) => api.get(`/diary/${diaryId}`);

export const getDiaryLikes = (diaryId) => api.get(`/diary/${diaryId}/count`);

export const addComment = (diaryId, content) =>
  api.post(`/diary/${diaryId}/comment`, { content });

export const deleteComment = (diaryId, commentId, userId) =>
  api.delete(`/diary/${diaryId}/comment/${commentId}`, { params: { userId } });

export const updateComment = (diaryId, commentId, userId, content) =>
  api.patch(
    `/diary/${diaryId}/comment/${commentId}`,
    { content },
    { params: { userId } }
  );
