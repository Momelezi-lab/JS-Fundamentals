const args = process.argv.slice(2); // Skip "node" and script name

if (!args[0]) {
    console.log("No argument");
} else {
    console.log(args[0]);
}
