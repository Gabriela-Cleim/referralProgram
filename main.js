function toggleQA() {
    var qa = document.getElementById('qa');
    if (qa.style.display === 'none') {
        qa.style.display = 'block';
        qa.scrollIntoView({behavior: 'smooth'});
    } else {
        qa.style.display = 'none';
    }
}
// Inicialização
var index = 0;
var topics = document.getElementsByClassName('topic-item');
var image = "src/img/first.gif"; // Use apenas uma imagem

// Todos os tópicos começam cinzas
for (var i = 0; i < topics.length; i++) {
    topics[i].classList.add('grayed-out');
}

// Destaque inicial apenas para o primeiro tópico
topics[index].classList.remove('grayed-out');
topics[index].classList.add('highlighted');

// Função para alternar os tópicos
function changeTopic() {
    // Remover destaque do tópico atual
    topics[index].classList.remove('highlighted');
    topics[index].classList.add('grayed-out');

    // Mudar a imagem para a mesma imagem em todos os tópicos
    document.getElementById('phone-image').src = image;

    // Mover para o próximo tópico
    index = (index + 1) % topics.length;

    // Destacar o próximo tópico
    topics[index].classList.remove('grayed-out');
    topics[index].classList.add('highlighted');
}

// Chamar a função a cada x segundos (por exemplo, 3000 ms)
setInterval(changeTopic, 6100);

