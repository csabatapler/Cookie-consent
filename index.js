
const modalEl = document.getElementById("modal");
const modalCLoseBtn = document.getElementById("modal-close-btn");
const modalForm = document.getElementById("modal-form")
const modalText = document.getElementById("modal-text")
const acceptBtn = document.getElementById("accept")
const modalInner = document.getElementById("modal-inner")
const declineBtn = document.getElementById("decline")
const modalChoiceBtns = document.getElementById("modal-choice-btns")

modalForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const formData = new FormData(modalForm)
  const fullName = formData.get("fullName")
  console.log(fullName)

  modalText.innerHTML=`
    <div class="modal-inner-loading">
      <img src="images/loading.svg" class="loading">
      <p id="uploadText">
        Uploading your data to the dark web...
      </p>
    </div>`

  setTimeout(() => {
      uploadText.textContent = "Making the sale..." 
  }, 1500)

  setTimeout(() => {
    modalInner.innerHTML=`   <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>`
    modalCLoseBtn.disabled = false
  }, 3000)
})



modalCLoseBtn.addEventListener("click", () => {
   modalEl.style.display = "none";
})

setTimeout(() => {
  console.log("Modal Opened!");
  modalEl.style.display = "block";
}, 1500)


declineBtn.addEventListener("mouseenter", () => {
  modalChoiceBtns.classList.toggle("swap")
})


