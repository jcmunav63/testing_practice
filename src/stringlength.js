// Function to determine a STRING'S LENGTH
function stringLength(string) {
  return string.split('').reduce((length) => length + 1, 0);
}
