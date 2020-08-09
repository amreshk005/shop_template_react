export const filterHelper = (data, type) => {
  let newObj = {};
  data.filter((e) => {
    if (newObj[e[type]] === undefined) {
      newObj[e[type]] = 1;
      return e[type];
    }
  });
  let arr = Object.keys(newObj)
  return arr;
};
