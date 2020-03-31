import axios from 'axios';

const getCardDetails = async () => {
  try {
    const result = await axios.get('http://localhost:3001/example');
    return result.data;
  } catch (e) {
    throw e;
  }
};

export { getCardDetails };
