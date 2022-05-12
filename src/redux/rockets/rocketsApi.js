const apiUrl = 'https://api.spacexdata.com/v3/rockets';

const fetchRockets = async () => {
  try {
    const response = await fetch(apiUrl);
    const rockets = await response.json();
    if (response.ok) {
      return rockets;
    }
  } catch (error) {
    return error;
  }
  return false;
};

export default fetchRockets;
