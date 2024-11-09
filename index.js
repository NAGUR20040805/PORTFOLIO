const myText = document.querySelector(".stext");
const textload= () =>{
    setTimeout(()=>{
        myText.textContent="Developer";
    },0);
    setTimeout(()=>{
        myText.textContent="Freelancer";
    },4000);
    setTimeout(()=>{
        myText.textContent="Designer";
    },8000);
    setTimeout(()=>{
        myText.textContent="Developer";
    },12000);

}
textload();