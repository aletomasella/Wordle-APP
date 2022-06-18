export const randomSelect = (names) => {
  let index = ((Math.random() * 1000) % 250) + 1;
  index = Math.ceil(index);
  const name = names[index];
  if (name) {
    if (name.includes(" ")) {
      const newName = name.split(" ").join("");
      return newName;
    } else {
      return name;
    }
  } else {
    randomSelect(names);
  }
};
