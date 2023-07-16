
const boldWords = document.querySelectorAll('strong');
function highlight() {
      
    for(let i = 0; i < boldWords.length; i++) {
        boldWords[i].style.color = 'green';
    }

}


function return_normal() {
	
    for(let i = 0; i < boldWords.length; i++) {
         boldWords[i].style.color = 'black';
}
