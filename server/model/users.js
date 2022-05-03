const { refineText } = require('./helpers');
const users = [];

/**
 * A representation of a user
 * @typedef User
 * @type {object}
 * @property {string} socketId - socket id associated with user connection
 * @property {string} name - name associated with user
 * @property {string} roomId - room id of the user
 */

/**
 * A representation of error
 * @typedef Error
 * @type {object}
 * @property {string} error - error message
 */

/**
 * Adds a new user to a room if there is no other users currently in the room with the same name
 * @param {User} user - the user to be added
 * @returns {User | Error} the added user or error message
 */
const addUser = ({ socketId, name, roomId }) => {
    name = refineText(name);
    roomId = refineText(roomId);

    const existingUser = users.find(
        (user) => user.roomId === roomId && user.name === name
    );

    // if there is an existing user then return error object:
    if (existingUser) {
        return { error: 'username is taken' };
    }

    // otherwise add and return new user:
    const user = { socketId, name, roomId };
    users.push(user);

    return { user };
};

/**
 * Removes the user with specified socketId if it exists, otherwise returns error message
 * @param {string} socketId - the socket id associated with the user to be removed
 * @returns {User | Error} the removed user or error message
 */
const removeUser = (socketId) => {
    const ERROR_MESSAGE = `User with socketId: ${socketId}, does not exist`;

    const userIndex = users.findIndex((user) => user.socketId === socketId);
    if (userIndex === -1) {
        return { error: ERROR_MESSAGE };
    }

    // remove user with given id from users and store in array:
    const removedUser = users.splice(userIndex, 1);
    return removedUser[0];
};

/**
 * Gets the user associated with the specified socketId
 * @param {string} socketId - the socketId associated with user
 * @returns {User | Error} the retrieved user or error message
 */
const getUser = (socketId) => {
    const ERROR_MESSAGE = `User with socketId: ${socketId}, does not exist`;

    const user = users.find((user) => user.socketId === socketId);
    if (!user) {
        return { error: ERROR_MESSAGE };
    }

    return user;
};

/**
 * Gets all the users in a specific room
 * @param {string} roomId - the room id associated
 * @returns {User[]} an array of users
 */
const getUsersInRoom = (roomId) => {
    return users.filter((user) => user.roomId === roomId);
};

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
