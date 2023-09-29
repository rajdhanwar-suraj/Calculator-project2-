let input = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')
let string = '';

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            if (string == '') {
                string = '';
            }else{
                string = eval(string).toString();
            }
            input.value = string;
            console.log(string);
        }else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0,string.length-1);
            input.value = string;
            console.log(string);
        }else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
            console.log(string);
        }else if (e.target.innerHTML == '%') {
            string = (parseInt(string)/100).toString();
            input.value = string;
            console.log(string);
        }
        else {
            string = string + e.target.innerHTML;
            input.value = string;
            console.log(string);
        }

    })
})















// let number = document.querySelectorAll('button');
// let display = document.getElementsByClassName('screen');
// let string = '';
// Array.from(number).forEach((button)=> {
//     button.addEventListener('click', (e)=>{
//         if (e.target.innerHTML == '=') {
//             string = eval(string);
//             document.querySelector('input').value = string;
//         }else if (e.target.innerHTML == 'C') {
//             string = "";
//             document.querySelector('input').value = string;
//         }
//         else {
//             console.log(e.target)
//             string = string + e.target.innerHTML;
//             document.querySelector('input').value = string;
//         }
//     })
// });