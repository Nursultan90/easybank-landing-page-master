window.onload = function() {
    var parent = document.querySelector('.digital-banking');
    var div1 = document.createElement('div');
    window.addEventListener('resize', createTag);
    function createTag () {
        const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        
        if (viewport_width < 768) {
            if (!parent.classList.contains('done')) {
                div1.className = 'digital-banking__image_1';
                div1.innerHTML = '<img src="images/bg-intro-mobile.svg"/>';
                parent.insertBefore(div1, parent.children[0]);
                parent.classList.add('done');
            }
        } else {
            if (parent.classList.contains('done')) {
                parent.removeChild(div1);
                parent.classList.remove('done');
            }
        }
    }
    createTag();

    //Burger Button
    var burgerBtn = document.querySelector('.header__burger');
    var body = document.querySelector('body');
    var menu = document.querySelector('.menu');
    burgerBtn.addEventListener('click', function() {
        burgerBtn.classList.toggle('burger-active');
        menu.classList.toggle('menu-open');
        body.classList.toggle('lock');
    })

}