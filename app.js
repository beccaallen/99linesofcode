let button = document.querySelector("button");

button.addEventListener("click", function () {
  let friends = ["Spencer", "Katie", "Allie", "Roxanne", "Meghan"];
  let lines = "lines";
  for (let i = 0; i < friends.length; i++) {
    let eachFriend = document.createElement("div");
    eachFriend.className = "friend";

  let friendsName = document.createElement("h3");
  let friendsNameText = document.createTextNode(friends[i]);
  friendsName.appendChild(friendsNameText);
  eachFriend.appendChild(friendsName);

    for (counter = 99; counter >= 1; counter--) {
      
      if (counter === 1) {
        lines = "line";
      } else {
        lines = "lines";
      }
     
      if (counter <= 99) {
        let line = document.createElement('p')
        let line2 = document.createElement('p')
        let line3 = document.createElement('p')
        let line4 = document.createElement('p')
        let line51 = document.createElement('p')
        let line52 = document.createElement('p')
        let line53 = document.createElement('p')
        let line6 = document.createElement('p')
        
        line.innerHTML = (counter + " " + lines + " of code in the file,");
        line2.innerHTML = (counter + " " + lines + " of code.");
        line3.innerHTML = (friends[i] + " deletes one!");
        line4.innerHTML = ("Can’t command Z now.");

        eachFriend.appendChild(line)
        eachFriend.appendChild(line2)
        eachFriend.appendChild(line3)
        eachFriend.appendChild(line4)
      
        if (counter > 2) {
          
          line51.innerHTML = (counter - 1 + " " + lines + " of code in the file.");
          eachFriend.appendChild(line51)
        }
        if (counter === 2) {
          let lines = "line";
          line52.innerHTML = (counter - 1 + " " + lines + " of code in the file.");
          eachFriend.appendChild(line52)
        }
        if (counter === 1) {
          line53.innerHTML = ("0 lines of code in the file!");
          eachFriend.appendChild(line53)
        }
        

      }
    }
  // }
  document.body.appendChild(eachFriend)
  



}

 
 
});
