const { refineText } = require('./helpers');
const users = [];

/**
 * Adds the new user to a room if there is no other users currently in the room with the same name
 * @param {socketId} param0
 * @returns {id, name, room}
 */
const addUser = ({ socketId, name, roomId }) => {
    name = refineText(name);
    roomId = refineText(roomId);

    const existingUser = users.find(
        (user) => user.roomId === roomId && user.name === name
    );
    if (existingUser) {
        return { error: 'username is taken' };
    }

    // add user
    const user = { socketId, name, roomId };
    users.push(user);

    return user;
};

/**
 * Removes and returns the user with specified id if it exists, otherwise returns error message
 * @param {socketId} param0
 * @returns {id, name, room}
 */
const removeUser = (socketId) => {
    const userIndex = users.findIndex((user) => user.socketId === socketId);
    if (index === -1) {
        return { error: `user with id: ${socketId}, does not exist` };
    }

    // remove user with given id from users and store in array:
    const removedUser = users.splice(userIndex, 1);
    return removedUser[0];
};

/**
 * gets the user with specified id
 * @param {socketId} param0
 * @returns {id, name, room}
 */
const getUser = (socketId) => {
    const user = users.find((user) => user.socketId === socketId);
    if (!user) {
        return { error: `user with id: ${socketId}, does not exist` };
    }
    return user;
};

/**
 * gets all the users in a specified room
 * @param {socketId} param0
 * @returns {id, name, room}
 */
const getUsersInRoom = (roomId) => {
    return users.filter((user) => user.roomId === roomId);
};

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
