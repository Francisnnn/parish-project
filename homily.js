function showFileName() {
    const fileInput = document.getElementById('file');
    const fileChosen = document.getElementById('file-chosen');
    fileChosen.textContent = fileInput.files.length > 0 ? fileInput.files[0].name : "No file chosen";
}
