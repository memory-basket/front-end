const CLIENT_ID = "b913f165f8102aef32d20dae9ee33126";
const REDIRECT_URI =  "http://localhost:8080/api/users/login/oauth2/kakao";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
