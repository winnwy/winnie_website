window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    var totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var movingElement = document.getElementById('movingElement');
    var movingIcon = this.document.querySelector('#movingElement img')

    // Calculate the percentage of page scrolled
    var translateY = (scrollPosition / totalHeight) * 100;
    movingElement.style.transform = 'translateY(' + translateY + 'svh)';
    if(translateY < 25) {
        movingIcon.src = "./images/sunrise.png";
        
    } else if (translateY >= 25 && translateY < 50) {
        movingIcon.src = "./images/sun.png";
    } 
    else if (translateY >= 50 && translateY < 75) {
        movingIcon.src = "./images/sunrise.png";
    }
    else {
        movingIcon.src = "./images/moon.png";
    }
});

document.querySelector('#menu-icon').addEventListener('click', function() {
    var sidebar = document.querySelector('.sidebar');
    var navbar = document.querySelector('.navbar');
    if (sidebar.classList.contains('sidebar-active')) {
        sidebar.classList.remove('sidebar-active');
    } else {
        sidebar.classList.add('sidebar-active');
        navbar.style.display = 'none';
    }
});

document.querySelector('#close-icon').addEventListener('click', function() {
    var sidebar = document.querySelector('.sidebar');
    var navbar = document.querySelector('.navbar');
    if (sidebar.classList.contains('sidebar-active')) {
        sidebar.classList.remove('sidebar-active');
        navbar.style.display = 'flex';
    } else {
        sidebar.classList.add('sidebar-active');
    }
});

