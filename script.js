const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('size');
const generatebtn = document.getElementById('generatebtn');
const downloadbtn = document.getElementById('downloadbtn');
const qrContainer = document.querySelector('.qr-body');

let size=sizes.value;
generatebtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyInput();
});

function generateQRCode(){
    qrContainer.innerHTML = "";
    new QRCode(qrContainer,{
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}

sizes.addEventListener('change',()=>{
    size = e.target.value;
    isEmptyInput();
});

downloadbtn.addEventListener('click',()=>{
    let img = document.querySelector('.qr-body img');
    if(img !== null){
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute("href", imgAtrr);
    }
    else{
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});

function isEmptyInput(){
    if(qrText.value.length > 0){
        generateQRCode();
    }
    else{
        alert("Enter the text or URL to generate your QR code");
    }
}


