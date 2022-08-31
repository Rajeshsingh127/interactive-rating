const main=document.querySelector(".main");
const thanks = document.querySelector(".hidden");
const submBtn = document.querySelector(".card-submit");
// console.log(main)
const ratOut = document.getElementById("rating");

submBtn.addEventListener('click',(e) =>{
    e.preventDefault();

    const rating = document.querySelector('.rating-point:checked')
    if(rating.value == 0) return;
    else {
        ratOut.innerHTML="&nbsp;"+rating.value+"&nbsp;";
        thanksPage();
}

});


function thanksPage(){
    main.style.display="none";
    thanks.style.display="block";
}