const buyBtns = document.querySelectorAll('.js-ticket-button');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const modalClose = document.querySelector('.js-modal-close-button');

function showTicketButton() {
    modal.classList.add('open');
}

function hideTicketButton() {
    modal.classList.remove('open');
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showTicketButton);
}

modalClose.addEventListener('click', hideTicketButton);

modal.addEventListener('click', hideTicketButton);

modalContainer.addEventListener('click', function(event) {
    event.stopPropagation();
})

/* Responsive in mobile */
var menuBtn = document.querySelector('.js-menu-button');
var menuIcon = menuBtn.querySelector('.js-menu-icon')
var navList = document.querySelectorAll('.js-nav > li');
var menuItems = document.querySelectorAll('#nav li a');
var html = document.querySelector('html');

function toggleNavBar() {
    for (var i = 1; i < navList.length; i++)
        navList[i].classList.toggle('showed');
}
function toggleSubnavBar() {
    subnavBar.classList.toggle('showed');
}
function hideNavBar() {
    for (var i = 1; i < navList.length; i++)
        navList[i].classList.remove('showed');
}
function showOnclickButton() {
    menuBtn.classList.add('onclick-menu-button');
    menuIcon.classList.add('onclick-menu-icon');
}
function hideOnclickButton() {
    menuBtn.classList.remove('onclick-menu-button');
    menuIcon.classList.remove('onclick-menu-icon');
}

for (var item of menuItems) {
    if (this.nextElementSibling) {
        addEventListener('click', toggleSubnavBar);
    }        
}

// Toggle navbar 
menuBtn.addEventListener('click', toggleNavBar);
for (var item of menuItems) {
    item.addEventListener('click', function(e) {
        if (getComputedStyle(menuBtn).display !== 'none' && !this.nextElementSibling) {
            hideNavBar();
        } else {
            e.stopPropagation();
        }
    });
}
    
// Decorate menu button
menuBtn.addEventListener('click', function(e) {
    showOnclickButton();
    e.stopPropagation();
});
html.addEventListener('click', function() {
    if (getComputedStyle(menuBtn).display !== 'none') {
        hideOnclickButton();
        hideNavBar();
    }
});