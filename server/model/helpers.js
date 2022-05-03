/**
 * Removes all leading/trailing whitespace characters and converts every character into lowercase
 * @param {string} text - the text to be refined
 * @returns {string} the refined text
 */
const refineText = (text) => {
    return text.trim().toLowerCase();
};

module.exports = { refineText };
