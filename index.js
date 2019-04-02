
document.addEventListener('click', e => {
    document.querySelectorAll('.windows-menubar').forEach(menubar => {
        if (menubar.contains(e.target)) {
            menubar.classList.toggle('mouseover');
        } else {
            menubar.classList.remove('mouseover');
        }
        if (menubar.classList.contains('mouseover') === false) {
            menubar.querySelectorAll('.menubar-item.mouseover').forEach(item => {
                item.classList.remove('mouseover');
            });
        }
    });
});

document.addEventListener('mouseenter', e => {
    console.log(e);
    if (e.target.classList && e.target.classList.contains('menubar-item')) {
        if (e.target.querySelector('.menubar-sub-items')) {
            e.target.parentElement.querySelectorAll('.menubar-item').forEach(item => {
                if (e.target !== item) {
                    item.classList.remove('last-mouseover');
                    item.classList.remove('mouseover');
                }
            });
        }
        e.target.classList.add('last-mouseover');
        e.target.classList.add('mouseover');
    }
}, true);

document.addEventListener('mouseleave', e => {
    if (e.target.classList && e.target.classList.contains('menubar-item')) {
        var timeout = setTimeout(() => {
            e.target.classList.remove('mouseover');
        }, 700);
        var mouseEnterListener = e => {
            clearTimeout(timeout);
            e.target.removeEventListener('mouseenter', mouseEnterListener);
        };
        e.target.addEventListener('mouseenter', mouseEnterListener);
    }
}, true);