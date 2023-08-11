document.getElementById('showMore').addEventListener('click', function() {
    const extraContent = document.getElementById('extraContent');
    if (extraContent.hidden) {
        extraContent.hidden = false;
        this.textContent = "Afficher moins";
    } else {
        extraContent.hidden = true;
        this.textContent = "Afficher plus";
    }
});
