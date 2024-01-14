const generateQrCode=document.querySelector("#generateQrCode");
const imgBox=document.querySelector("#imgBox");
const qrImg=document.querySelector("#qrImg");


function addQRCode(){
    const userInputText=document.querySelector("#userInputText").value;
    const userInputHeight=document.querySelector("#userInputHeight").value;
    const userInputWidth=document.querySelector("#userInputWidth").value;
    console.log(userInputText);
    console.log(userInputHeight);
    console.log(userInputWidth);
    getQrCode(userInputHeight,userInputWidth,userInputText);
    document.querySelector("#userInputText").value="";
    document.querySelector("#userInputHeight").value="";
    document.querySelector("#userInputWidth").value="";
};

generateQrCode.addEventListener("click", function(){
    addQRCode();
});

userInputWidth.addEventListener('keyup', (event)=> {
    if(event.which === 13){
        addQRCode();
    }
})

function getQrCode(height, width, qrText){
    // let genQr= `https://api.qrserver.com/v1/create-qr-code/?size=${height}x${width}&data=${qrText}` ;
    // qrImg.src=genQr;
    fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${height}x${width}&data=${qrText}`)
    .then((response) => response.blob())
    .then((response) => {qrImg.src = URL.createObjectURL(response);
      });
    
};
