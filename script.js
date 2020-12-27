const aboutList = document.querySelectorAll('.list-item');

aboutList.forEach(li => {
    li.addEventListener('mouseover', () => {
        li.classList.toggle('hover-effect');
    })

    li.addEventListener('mouseout', () => {
        li.classList.toggle('hover-effect');
    })
})

