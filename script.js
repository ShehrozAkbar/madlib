// geeting all the spans in that story paragraphs
let noun1user = document.querySelector("#userNoun1");
let noun2user = document.querySelector("#userNoun2");
let adj1user = document.querySelector("#userAdj1");
let adj2user = document.querySelector("#userAdj2");
let actuser = document.querySelector("#userAct");
let verbuser = document.querySelector("#userVerb");
let occationuser = document.querySelector("#specialDay");

let uniInputs = document.querySelectorAll(".unistory");
// buttons
console.log(uniInputs);
const clearbtn = document.querySelector(".clear");
const displaybtn = document.querySelector(".story");

// story paragraph element
const storyPara = document.querySelector(".storypara");
// input field section
const enterWords = document.querySelector(".enterwords");

// error showing elements
const errorr = document.querySelector(".error");
const btnCloseError = document.querySelector(".error-close");
const overlayClick = document.querySelector(".overlay");

clearbtn.addEventListener("click", function () {
  for (let i = 0; i < uniInputs.length; i++) {
    uniInputs[i].value = "";
  }
});

displaybtn.addEventListener("click", function () {
  let count = 0;
  for (let i = 0; i < uniInputs.length; i++) {
    if (uniInputs[i].value == "") {
      count++;
    }
  }
  //   this is if user left any field unentered
  if (count > 0) {
    errorr.classList.remove("hidden");
    overlayClick.classList.remove("hidden");
  }
  //   this section is if user enter all the required fields
  else {
    storyPara.classList.remove("hidden");
    enterWords.classList.add("hidden");
    //   entering the user entered words

    // text fields data
    let noun1txt = document.querySelector("#noun1").value;
    let noun2txt = document.querySelector("#noun2").value;
    let adj1txt = document.querySelector("#adj1").value;
    let adj2txt = document.querySelector("#adj2").value;
    let acttxt = document.querySelector("#act").value;
    let verbtxt = document.querySelector("#verb").value;
    let occationtxt = document.querySelector("#occation").value;

    // setting all the text fields
    noun1user.textContent = noun1txt;
    noun2user.textContent = noun2txt;
    adj1user.textContent = adj1txt;
    adj2user.textContent = adj2txt;
    actuser.textContent = acttxt;
    verbuser.textContentr = verbtxt;
    occationuser.textContent = occationtxt;
  }
});

btnCloseError.addEventListener("click", function () {
  errorr.classList.add("hidden");
  overlayClick.classList.add("hidden");
});
