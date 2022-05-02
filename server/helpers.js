/**
 * removes all leading/trailing whitespace characters and converts every character into lowercase
 * @param {string} text
 * @returns string
 */
const refineText = (text) => {
    return text.trim().toLowerCase();
};

module.exports = { refineText };
