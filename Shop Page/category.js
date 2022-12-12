let sidebar = document.getElementById('sidebar');
let filterBtn = document.getElementById('filter-btn');

filterBtn.addEventListener('click', () => {
    sidebar.classList.toggle('ml-[0px]')
    sidebar.classList.toggle('max-[500px]:ml-[300px]')
})
