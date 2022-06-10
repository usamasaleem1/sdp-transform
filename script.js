const uploadInput = document.querySelector("input[type=file]");
const dropContainer = document.getElementById("drag-upload");
const fileListDisplay = document.getElementById("fileList");

let fileList = undefined;

function handleFiles(files) {
    fileList = Array.from(files);
    fillList(files);
}

function dropHandler(evt) {
    evt.preventDefault();
    uploadInput.value = '';
    handleFiles(evt.dataTransfer.files);
};

function dragOverHandler(evt) {
    evt.preventDefault();
}

function deleteElement(index) {
    fileList.splice(index, 1);
    fillList(fileList);
}

function fillList(files) {
    fileListDisplay.innerHTML = '';

    var nBytes = 0,
        nFiles = files.length;
    for (var nFileId = 0; nFileId < nFiles; nFileId++) {
        nBytes += files[nFileId].size;
    }
    console.log(nBytes);
    var sOutput = nBytes + " octets";
    // partie de code facultative pour l'approximation des multiples
    for (var aMultiples = ["Ko", "Mo", "Go"], nMultiple = 0, nApprox = nBytes / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
        sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple] + " (" + nBytes + " octets)";
        console.log(sOutput);
    }
    document.getElementById("fileWeight").innerText = sOutput;

    for (let i = 0; i < files.length; i++) {
        fileListDisplay.innerHTML += `<div class="file-line">
      <span class="material-icons file-icon">upload_file</span>
      <span>${files[i].name}</span>
      <span class="material-icons close-icon" onclick="deleteElement(${i})">close</span>
    </div>`;
    }
}