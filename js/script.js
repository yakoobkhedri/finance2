// acardeon

let acardeonBtn = document.getElementById('acardeonBtn');
let ticketFooter = document.getElementById('ticketFooter');
let detail = document.getElementById('detail');
let hide = document.getElementById('hide');
let arrow = document.getElementById('arrow');

acardeonBtn.addEventListener('click', function () {
    ticketFooter.classList.toggle('open');
    if (ticketFooter.className === 'open') {
        detail.style.display = 'none';
        hide.style.display = 'block';
        arrow.style.transform = 'rotate(89deg) translate(2px, 0px)';
    } else {
        hide.style.display = 'none';
        detail.style.display = 'block';
        arrow.style.transform = 'rotate(-89deg)translate(-1px, 31px)';
    }
})

// history tab

let all=document.getElementById('all');
let your=document.getElementById('your');
let yourHistory=document.getElementById('yourHistory');
let allHistory=document.getElementById('allHistory');

all.addEventListener('click',function () {
    all.classList.add('active');
    your.classList.remove('active');
    allHistory.style.display='block';
    yourHistory.style.display='none';
})
your.addEventListener('click',function () {
    your.classList.add('active');
    all.classList.remove('active');
    yourHistory.style.display='block';
    allHistory.style.display='none';
})
// acardeon2

let historyBtn = document.getElementById('allHistoryBtn');
let historyFooter = document.getElementById('allHistoryFooter');
let detail2 = document.getElementById('detail2');
let hide2 = document.getElementById('hide2');
let arrow2 = document.getElementById('arrow2');

historyBtn.addEventListener('click', function () {
    historyFooter.classList.toggle('open');
    if (historyFooter.className === 'open') {
        detail2.style.display = 'none';
        hide2.style.display = 'block';
        arrow2.style.transform = 'rotate(89deg) translate(2px, 0px)';
    } else {
        hide2.style.display = 'none';
        detail2.style.display = 'block';
        arrow2.style.transform = 'rotate(-89deg)translate(-1px, 31px)';
    }
})

//modal

let modal=document.getElementById('buyTicketModal');
let closeModal=document.getElementById('close');
let buyBtn=document.getElementById('buy');
let buyBtn2=document.getElementById('buy2');
let dark=document.getElementById('dark');

buyBtn.addEventListener('click',function () {
    modal.style.display='block';
    dark.style.display='block';
})
buyBtn2.addEventListener('click',function () {
    modal.style.display='block';
    dark.style.display='block';
})
closeModal.addEventListener('click',function () {
    modal.style.display='none';
    dark.style.display='none';
})
dark.addEventListener('click',function () {
    modal.style.display='none';
    dark.style.display='none';
})

//change theme

let day=document.getElementById('day');
let night=document.getElementById('night');
let section5=document.getElementById('section5');

day.addEventListener('click',function () {
        day.style.display='none';
        night.style.display='block';
        section5.style.background='#3A384C';
})
night.addEventListener('click',function () {
        day.style.display='block';
        night.style.display='none';
    section5.style.background='#FAF9FA';
})

//show languages

let worldIcon=document.getElementById('worldIcon');
let languages=document.getElementById('languages');

worldIcon.addEventListener('click',function () {
    languages.classList.toggle('active')

})