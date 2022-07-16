const USER_ID_KEY = 'user_id';

const getUserId = () => {
  const storedUserId = localStorage.getItem(USER_ID_KEY);

  if (!storedUserId) {
    const userId = new Date().getTime().toString();
    localStorage.setItem(USER_ID_KEY, userId);
    return userId;
  }

  return storedUserId;
};

export default getUserId;
