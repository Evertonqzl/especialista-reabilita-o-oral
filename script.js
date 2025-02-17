window.addEventListener('scroll', function () {
    document.getElementById('btnTopo').style.display = window.scrollY > 300 ? 'block' : 'none';
});
