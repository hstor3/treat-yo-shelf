module.exports = {
  formatDate: (date) => {
    return date.toLocaleDateString();
  },
  formatAmount: (amount) => {
    return parseInt(amount, 10).toLocaleString();
  },
  getEmoji: () => {
    const randomNum = Math.random();

    // Return a random emoji
    if (randomNum > 0.7) {
      return `<span for="img" aria-label="lightbulb">💡</span>`;
    } else if (randomNum > 0.4) {
      return `<span for="img" aria-label="laptop">💻</span>`;
    }

    return `<span for="img" aria-label="gear">⚙️</span>`;
  },
};
