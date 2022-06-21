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
  { key: "A" },
  { key: "B" },
  { key: "C" },
  { key: "D" },
  { key: "E" },
  { key: "F" },
  { key: "G" },
  { key: "H" },
  { key: "I" },
  { key: "J" },
  { key: "K" },
  { key: "L" },
  { key: "M" },
  { key: "N" },
  { key: "O" },
  { key: "P" },
  { key: "Q" },
  { key: "R" },
  { key: "S" },
  { key: "T" },
  { key: "U" },
  { key: "V" },
  { key: "W" },
  { key: "X" },
  { key: "Y" },
  { key: "Z" },
];
