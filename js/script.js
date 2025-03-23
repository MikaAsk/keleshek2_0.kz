// Пример интерактивности
const btn = document.querySelector('.btn');

btn.addEventListener('mouseover', () => {
    btn.style.backgroundColor = '#FF4500'; // Изменение цвета при наведении
});

btn.addEventListener('mouseout', () => {
    btn.style.backgroundColor = '#FF6F61'; // Возврат к исходному цвету
});
