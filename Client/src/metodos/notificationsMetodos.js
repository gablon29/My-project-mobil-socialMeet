import axios from "axios";

export const sendNotification = async ({ token, title, body, loading, success, error }) => {
  const notification = {
    to: token,
    title: title,
    body: body,
  };

  try {
    loading(true);
    const response = await axios.post('api/send/send-notification', notification);
    success(response.data);
    console.log(response.data);
    loading(false);
  } catch (err) {
    console.log(err);
    loading(false);
    error(err);
  }
};
