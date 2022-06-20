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

export const Keyletters = [
  { key: "a" },
  { key: "b" },
  { key: "c" },
  { key: "d" },
  { key: "f" },
  { key: "g" },
  { key: "h" },
  { key: "i" },
  { key: "j" },
  { key: "k" },
  { key: "l" },
  { key: "m" },
  { key: "n" },
  { key: "o" },
  { key: "p" },
  { key: "q" },
  { key: "r" },
  { key: "s" },
  { key: "t" },
  { key: "u" },
  { key: "v" },
  { key: "w" },
  { key: "x" },
  { key: "y" },
  { key: "z" },
];
