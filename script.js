const playGameBtn = document.querySelector("#playGameBtn");

playGameBtn.addEventListener("click", SetGameBoard);


function SetGameBoard () {
    const allNodes = document.querySelectorAll("html > .container")
    allNodes.forEach((node) => {
        node.remove();
    })


    const containerDiv1 = document.createElement("div");
    containerDiv1.classList.add("container");
    const imgContainerDiv1 = document.createElement("div");
    imgContainerDiv1.classList.add("img-containerP");
    const heading1 = document.createElement("h4");
    heading1.textContent = "You Chose:";
    const imgContainerDiv2 = document.createElement("div");
    imgContainerDiv2.classList.add("img-containerC");
    const heading2 = document.createElement("h4");
    heading2.textContent = "Computer Chose:";
    
    containerDiv1.appendChild(imgContainerDiv1)
    containerDiv1.appendChild(imgContainerDiv2)
    
    imgContainerDiv1.appendChild(heading1)
    
    
    imgContainerDiv2.appendChild(heading2)
    
    
    
    
    
    const containerDiv2 = document.createElement("div");
    containerDiv2.classList.add("container");
    
    const hpContainerDiv1 = document.createElement("div");
    hpContainerDiv1.classList.add("hp-container");
    
    const heading3 = document.createElement("h4");
    heading3.textContent = "Your HP left:";
    
    const hpDiv1 = document.createElement("div");
    hpDiv1.classList.add("hp-player")
    
    for (let i = 0; i < 5; i++) {
        const img = document.createElement('img');
        img.src = "./assets/heart.svg";
        img.classList.add("hp-img")
    
        hpDiv1.appendChild(img);
    
    }
    
    
    const hpContainerDiv2 = document.createElement("div");
    hpContainerDiv2.classList.add("hp-container");
    
    const heading4 = document.createElement("h4");
    heading4.textContent = "Computer HP left:";
    const hpDiv2 = document.createElement("div");
    hpDiv2.classList.add("hp-comp")
    for (let i = 0; i < 5; i++) {
        const img = document.createElement('img');
        img.src = "./assets/heart.svg";
        img.classList.add("hp-img")
    
        hpDiv2.appendChild(img);
    
    }
    
    containerDiv2.appendChild(hpContainerDiv1)
    containerDiv2.appendChild(hpContainerDiv2)
    
    hpContainerDiv1.appendChild(heading3)
    hpContainerDiv1.appendChild(hpDiv1)
    
    hpContainerDiv2.appendChild(heading4)
    hpContainerDiv2.appendChild(hpDiv2)

    
    
    
    const containerDiv3 = document.createElement("div");
    containerDiv3.classList.add("container")
    containerDiv3.setAttribute("id", "choice-container")
    const heading5 = document.createElement("h4");
    heading5.textContent = "Pick Your Move: ";
    const choiceDiv = document.createElement("div");
    choiceDiv.classList.add("choice")
    
    const img = document.createElement('img');
    img.src = "./assets/rock.svg";
    img.classList.add("choice-img")

    img.addEventListener("click" , RockClicked);
    
    const img2 = document.createElement('img');
    img2.src = "./assets/paper.svg";
    img2.classList.add("choice-img")
    
    const img3 = document.createElement('img');
    img3.src = "./assets/scissors.svg";
    img3.classList.add("choice-img")
    
    choiceDiv.appendChild(img)
    choiceDiv.appendChild(img2)
    choiceDiv.appendChild(img3)
    
    containerDiv3.appendChild(heading5)
    containerDiv3.appendChild(choiceDiv)
    
    
    const html = document.querySelector("html");
    
    html.appendChild(containerDiv1)
    html.appendChild(containerDiv2)
    html.appendChild(containerDiv3)
    html.appendChild(playGameBtn)
}

function RockClicked () {
    
    

    compChoice= getCompPick();

    handleMove(0, compChoice);
}

function getCompPick () {
    return Math.floor(Math.random() * 3);
}

function handleMove (playerChoice, compChoice) {
    handleMoveImage(playerChoice, compChoice);


    if (playerChoice == compChoice) {
        
        return;
    }
    else if ( ((playerChoice == 0 ) && (compChoice == 1)) ||
              ((playerChoice == 1 ) && (compChoice == 2)) ||
              ((playerChoice == 2 ) && (compChoice == 0))) {
        const hpMinus = document.querySelector(".hp-container > .hp-player")
        hpMinus.removeChild(hpMinus.lastChild);
        return;
    }
    else {
        const hpMinus = document.querySelector(".hp-container > .hp-comp")
        hpMinus.removeChild(hpMinus.lastChild);
        return;
    }
}

function handleMoveImage (playerChoice, compChoice) {
    if (document.querySelector(".img-containerP > .rps-img")) {
        document.querySelector(".img-containerP > .rps-img").remove();
        document.querySelector(".img-containerC > .rps-img").remove();
    } 
    
    
    const playerImg = document.createElement('img');
    playerImg.classList.add("rps-img")
    

    if (playerChoice == 0) {
        playerImg.src = "./assets/rock.svg"
    } else if (playerChoice == 1) {
        playerImg.src = "./assets/paper.svg"
    } else {
        playerImg.src = "./assets/scissors.svg"
    }

    const imgContainer = document.querySelector(".img-containerP");
    imgContainer.appendChild(playerImg);

    const compImg = document.createElement('img');
    compImg.classList.add("rps-img")

    if (compChoice == 0) {
        compImg.src = "./assets/rock.svg"
    } else if (compChoice == 1) {
        compImg.src = "./assets/paper.svg"
    } else {
        compImg.src = "./assets/scissors.svg"
    }

    const imgContainer2 = document.querySelector(".img-containerC");
    imgContainer2.appendChild(compImg);

}