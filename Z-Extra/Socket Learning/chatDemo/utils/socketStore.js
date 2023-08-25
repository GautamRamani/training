const users = {};

export const addSocket = (userId, socket) => {
  users[userId] = [...(users[userId] || []), socket];
};

export const removeSocket = socketId => {
  Object.keys(users).forEach(userId => {
    users[userId] = users[userId].filter(_ => _.id !== socketId);
  });
};

export const getSockets = userId => {
  return users[userId] || [];
};
