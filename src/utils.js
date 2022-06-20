export const randomSelect = (names) => {
  let index = ((Math.random() * 1000) % names.length) + 1;
  index = Math.ceil(index);
  const name = names[index];
  if (name) {
    return name.toUpperCase();
  } else {
    randomSelect(names);
  }
};
