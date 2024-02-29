function toggleQA() {
    var qa = document.getElementById('qa');
    if (qa.style.display === 'none') {
        qa.style.display = 'block';
        qa.scrollIntoView({behavior: 'smooth'});
    } else {
        qa.style.display = 'none';
    }
}

