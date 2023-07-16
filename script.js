let boldWords = document.querySelectorAll(' p strong');

function highlight() {
//      let boldWords = document.querySelectorAll('p strong');
    for(let i = 0; i < boldWords.length; i++) {
        boldWords[i].style.color = 'green';
    }

}


function return_normal() {
    for(let i = 0; i < boldWords.length; i++) {
        boldWords[i].style.color = 'black';
}
