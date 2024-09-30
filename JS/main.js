

// animated text

let textContainer=document.getElementById("sec1-secondary-text")

const text="Our goal is top at the heart of creativity services industry as a digital creator. In has a after comment"

let idx = 1;
let speed = 400 / 5;

writeText();
function writeText() {
    // Display a portion of the text
    textContainer.innerText = text.slice(0, idx);
    idx++;
  
    if (idx > text.length) {
      idx = 1;
    }
    setTimeout(writeText, speed);
}





let List = document.querySelector("#list-icon ")
let linksList =document.querySelector("#links-list")
List.addEventListener("click",()=>{

    if(linksList.style.top=="-100%"){
        linksList.style.top="1%"
        console.log(11);
        
    }else{
        linksList.style.top="-100%"
        console.log(1111);
    }

})



