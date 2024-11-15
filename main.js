//<img src="img_chania.jpg" alt="Flowers in Chania">

//Do not show heart Button
document.getElementById("heartBtn").style.display = "none";

//When Clickme button is click, change display settings to show makeheart button
document
  .getElementById("makeheartBtn")
  .addEventListener("click", makeheartBtnClicked);

function makeheartBtnClicked() {
  document.getElementById("heartBtn").style.display = "block";
  document.getElementById("makeheartBtn").style.display = "none";
}

//When Heart button is clicked, change hearts html to whatever
document.getElementById("heartBtn").addEventListener("click", heartBtnClicked);

function heartBtnClicked() {
  document.getElementById("hearts").outerHTML += `          <p>Love you😘😘😘😘😘😘😘</p>
  `;
  document.getElementById("heartBtn").style.display = "none";
}
