let sec1 = document.getElementById('section1');
let btnNext1 = document.querySelector('#section1 .btn-next1');
let btnSubmit1 = document.querySelector('#section1 .btn-submit1');
let sec1RadioB = document.getElementById('b1');

let sec2 = document.getElementById('section2');
let btnNext2 = document.querySelector('#section2 .btn-next2');
let btnSubmit2 = document.querySelector('#section2 .btn-submit2');
let sec2RadioA = document.getElementById('a2');

let sec3 = document.getElementById('section3');
let btnNext3 = document.querySelector('#section3 .btn-next3');
let btnSubmit3 = document.querySelector('#section3 .btn-submit3');
let sec3RadioD = document.getElementById('d3');

let sec4 = document.getElementById('section4');
let btnNext4 = document.querySelector('#section4 .btn-next4');
let btnSubmit4 = document.querySelector('#section4 .btn-submit4');
let sec4RadioB = document.getElementById('b4');

let sec5 = document.getElementById('section5');
let sec5Btn = document.querySelector('#section5 button');
let btnSubmit5 = document.querySelector('#section5 .btn-submit5');
let sec5RadioC = document.getElementById('c5');

let alert1 = document.querySelector('.alert1');
let alert2 = document.querySelector('.alert2');

let answers = ['b', 'a', 'd', 'b', 'c'];

btnSubmit1.addEventListener('click', sectionOneValidation);
btnNext1.addEventListener('click', goToNextSection1)
btnSubmit2.addEventListener('click', sectionTwoValidation);
btnNext2.addEventListener('click', goToNextSection2)
btnSubmit3.addEventListener('click', sectionThreeValidation);
btnNext3.addEventListener('click', goToNextSection3)
btnSubmit4.addEventListener('click', sectionFourValidation);
btnNext4.addEventListener('click', goToNextSection4)
btnSubmit5.addEventListener('click', sectionFiveValidation);

function sectionOneValidation(e) {
    e.preventDefault();
    if (sec1RadioB.checked === true && sec1RadioB.value === answers[0]) {
        alert('Well done!! Your answer is correct go to the next quiz');
        btnNext1.removeAttribute('disabled');
        btnNext1.style.cursor = 'pointer';
    } else {
        alert('Incorrect answer, try again!!');
    }
}

function goToNextSection1(e){
    e.preventDefault();
    sec1.style.display = 'none';
    sec2.style.display = 'block';
}

function sectionTwoValidation(e) {
    e.preventDefault();
    if (sec2RadioA.checked === true && sec2RadioA.value === answers[1]) {
        alert('Well done!! Your answer is correct go to the next quiz');
        btnNext2.removeAttribute('disabled');
        btnNext2.style.cursor = 'pointer';
    } else {
        alert('Incorrect answer, try again!!');
    }
}

function goToNextSection2(e){
    e.preventDefault();
    sec1.style.display = 'none';
    sec2.style.display = 'none';
    sec3.style.display = 'block';
}

function sectionThreeValidation(e) {
    e.preventDefault();
    if (sec3RadioD.checked === true && sec3RadioD.value === answers[2]) {
        alert('Well done!! Your answer is correct go to the next quiz');
        btnNext3.removeAttribute('disabled');
        btnNext3.style.cursor = 'pointer';
    } else {
        alert('Incorrect answer, try again!!');
    }
}

function goToNextSection3(e){
    e.preventDefault();
    sec1.style.display = 'none';
    sec2.style.display = 'none';
    sec3.style.display = 'none';
    sec4.style.display = 'block';
}

function sectionFourValidation(e) {
    e.preventDefault();
    if (sec4RadioB.checked === true && sec4RadioB.value === answers[3]) {
        alert('Well done!! Your answer is correct go to the next quiz');
        btnNext4.removeAttribute('disabled');
        btnNext4.style.cursor = 'pointer';
    } else {
        alert('Incorrect answer, try again!!');
    }
}

function goToNextSection4(e){
    e.preventDefault();
    sec1.style.display = 'none';
    sec2.style.display = 'none';
    sec3.style.display = 'none';
    sec4.style.display = 'none';
    sec5.style.display = 'block';
}


function sectionFiveValidation(e) {
    e.preventDefault();
    if (sec5RadioC.checked === true && sec5RadioC.value === answers[4]) {
        alert('Well done!! All answers are submited');
    } else {
        alert('Incorrect answer, try again!!');
    }
}

function goToNextSection5(e){
    e.preventDefault();
    sec1.style.display = 'none';
    sec2.style.display = 'none';
    sec3.style.display = 'none';
    sec4.style.display = 'none';
}