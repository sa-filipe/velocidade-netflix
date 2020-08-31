var myVar = setInterval(myTimer, 1000);
function myTimer() {
const header_content = document.querySelector("div.PlayerControlsNeo__progress-control-row");
const header_center = document.querySelector("div.PlayerControlsNeo__progress-control-row > center");
  if (header_content) {
    var vid = document.querySelector("video");
    const verify_center = document.querySelector("center")
    if (verify_center == null ) {
      const center = document.createElement("center");
      header_content.appendChild(center);
    }
    const verify_title = document.querySelector("center > h1")
    if (verify_title == null ) {
      const title = document.createElement("h1");
      title.innerHTML = "Velocidade";
      header_center.appendChild(title);
    } 
    const verify_button25 = document.querySelector("button25")
    if (verify_button25 == null ) {
      const button = document.createElement("button25");
      button.innerHTML = "0.25x";
      button.classList.add("button");
      button.addEventListener("click", () => {
        vid.playbackRate = 0.25;
      })
      header_center.appendChild(button);
    }
    const verify_button5 = document.querySelector("button5")
    if (verify_button5 == null ) {
      const button = document.createElement("button5");
      button.innerHTML = "0.5x";
      button.classList.add("button");
      button.addEventListener("click", () => {
        vid.playbackRate = 0.5;
      })
      header_center.appendChild(button);
    }
    const verify_button75 = document.querySelector("button75")
    if (verify_button75 == null ) {
      const button = document.createElement("button75");
      button.innerHTML = "0.75x";
      button.classList.add("button");
      button.addEventListener("click", () => {
        vid.playbackRate = 0.75;
      })
      header_center.appendChild(button);
    }
    const verify_button1 = document.querySelector("button1")
    if (verify_button1 == null ) {
      const button = document.createElement("button1");
      button.innerHTML = "1.0x";
      button.classList.add("button");
      button.addEventListener("click", () => {
        vid.playbackRate = 1.0;
      })
      header_center.appendChild(button);
    }
    const verify_button125 = document.querySelector("button125")
    if (verify_button125 == null ) {
      const button = document.createElement("button125");
      button.innerHTML = "1.25x";
      button.classList.add("button");
      button.addEventListener("click", () => {
        vid.playbackRate = 1.25;
      })
      header_center.appendChild(button);
    } 
    const verify_button15 = document.querySelector("button15")
    if (verify_button15 == null ) {
      const button = document.createElement("button15");
      button.innerHTML = "1.5x";
      button.classList.add("button");
      button.addEventListener("click", () => {
        vid.playbackRate = 1.5;
      })
      header_center.appendChild(button);
    } 
    const verify_button175 = document.querySelector("button175")
    if (verify_button175 == null ) {
      const button = document.createElement("button175");
      button.innerHTML = "1.75x";
      button.classList.add("button");
      button.addEventListener("click", () => {
        vid.playbackRate = 1.75;
      })
      header_center.appendChild(button);
    } 
    const verify_button20 = document.querySelector("button20")
    if (verify_button20 == null ) {
      const button = document.createElement("button20");
      button.innerHTML = "2.0x";
      button.classList.add("button");
      button.addEventListener("click", () => {
        vid.playbackRate = 2.0;
      })
      header_center.appendChild(button);
    }
  }
}
