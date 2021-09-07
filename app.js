let friends = ["Spencer", "Katie", "Allie", "Roxanne", "Meghan"];

theLineSong = (friends) => {
  let lines = "lines";

  for (counter = 99; counter >= 1; counter--) {
    if (counter === 1) {
      lines = "line";
    } else {
      lines = "lines";
    }

    if (counter <= 99) {
      console.log(counter + " " + lines + " of code in the file,");
      console.log(counter + " " + lines + " of code.");
      console.log(friends + " deletes one!");
      console.log("Can’t command Z now.");
      if (counter > 2) {
        console.log(counter - 1 + " " + lines + " of code in the file.");
      }
      if (counter === 2) {
        let lines = "line";
        console.log(counter - 1 + " " + lines + " of code in the file.");
      }
      if (counter === 1) {
        console.log("0 lines of code in the file!");
      }
      console.log(" ");
    }
  }
};

for (let i = 0; i < friends.length; i++) {
  theLineSong(friends[i]);
}
