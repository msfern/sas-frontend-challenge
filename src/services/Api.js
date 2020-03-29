import axios from 'axios';

const getToken = async () => {
  const token = await axios
    .get('https://opentdb.com/api_token.php?command=request')
    .then((result) => result.data.token);
  return token;
};

const api = async () => {
  const token = await getToken();
  const url = `https://opentdb.com/api.php?token=${token}&encode=url3986`;
  return url;
};

export default api;
