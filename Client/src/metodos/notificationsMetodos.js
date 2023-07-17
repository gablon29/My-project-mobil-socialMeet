import axios from "axios";

export const saveToken = async ({ token, tokenSession, loading, success, error }) => {
  try {
    const cleanedToken = token.replace('ExponentPushToken[', '').replace(']', '').toString("")
    console.log(cleanedToken);
    
    loading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${tokenSession}`,
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.post('/api/user/saveDeviceToken', {token: cleanedToken}, config);
    success(response.data);
    console.log(response.data);
    loading(false);
  } catch (err) {
    console.log(err);
    loading(false);
    error(err);
  }
};
