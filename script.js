const imgBox = document.querySelector("#imgBox");
const qrImage = document.querySelector("#qrImage");
const qrText = document.querySelector("#qrText");
const button = document.querySelector("#btn");


button.addEventListener("click", () => {
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;

    imgBox.classList.add("show-img");

    setTimeout(() => {
        imgBox.classList.remove("show-img");
    }, 9000);
});


