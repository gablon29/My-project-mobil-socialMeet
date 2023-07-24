import axios from "axios";

export const saveToken = async ({ token, tokenSession, loading, success, error }) => {
  try {

    loading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${tokenSession}`,
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.post('/api/user/saveDeviceToken', { token: token }, config);
    success(response.data);
    loading(false);
  } catch (err) {
    console.log(err);
    loading(false);
    error(err);
  }
};