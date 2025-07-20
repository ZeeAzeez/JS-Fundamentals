let firstArg = process.argv.length;

if (firstArg === 2) {
  console.log("No argument");
} else if (firstArg === 3) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
