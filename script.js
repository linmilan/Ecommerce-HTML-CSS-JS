const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', ()=> {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// CART SECTION

let del = document.querySelectorAll('.del')
let trs = document.querySelectorAll('tbody tr')
let tbody = document.querySelector('tbody')
let prices = document.querySelectorAll('.price')
let total = document.querySelectorAll('.total')
let qtys = document.querySelectorAll('.qtys')


for ( let i=0; i< del.length; i++) {
    // remove items
    del[i].addEventListener('click',function(){
        tbody.removeChild(trs[i])
        
    })

    

}
