function openModal(img) {
    const modal = document.getElementById("lightbox");
    const modalImg = document.getElementById("modalImg");

    modal.style.display = "block";
    modalImg.src = img.src.replace("_small", "_large");
}

function closeModal() {
    document.getElementById("lightbox").style.display = "none";
}
