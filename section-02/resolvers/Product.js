module.exports = {
  priceWithDiscount(parent) {
    if (!parent.discount || parent.discount < 0) {
      return null;
    }

    return parent.price - parent.discount;
  },
};
