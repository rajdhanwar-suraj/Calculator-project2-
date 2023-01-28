let number = document.querySelectorAll('button');
let display = document.getElementsByClassName('screen');
let string = '';
Array.from(number).forEach((button)=> {
    button.addEventListener('click', (e)=>{
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
});
