var carousel = document.getElementById('gymCarousel');
var textItems = document.querySelectorAll('.carousel-text-item');
const clickSound = document.getElementById('clickSound');

carousel.addEventListener('slide.bs.carousel', function (event) {
    textItems.forEach(function(item) {
        item.classList.remove('active');
    });

    var slideIndex = event.to;
    document.getElementById('textSlide' + (slideIndex + 1)).classList.add('active');
});

function changeImage(imageSrc) {
    document.getElementById('main-image').src = imageSrc;
}

function openModal() {
    var modal = document.getElementById("imageModal");
    var modalImage = document.getElementById("modal-image");
    var mainImage = document.getElementById("main-image");

    modalImage.src = mainImage.src;
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}


// ASSIK 5 - MANSUR'S BLOCK

// Выбираем кнопку и скрытый текст
const readMoreBtn = document.getElementById('readMoreBtn');
const moreText = document.getElementById('moreText');
readMoreBtn.style.backgroundColor = "#43964f";

// Обработчик для нажатия на кнопку
readMoreBtn.addEventListener('click', function () {
    clickSound.play();
        // Проверяем, скрыт ли текст
    if (moreText.style.display === "none" || moreText.style.display === "") {
        // Показываем текст и меняем текст кнопки
        moreText.style.display = "inline";
        readMoreBtn.textContent = "Скрыть";
    } else {
        // Скрываем текст и меняем текст кнопки
        moreText.style.display = "none";
        readMoreBtn.textContent = "Читать больше";
    }
});


// Выбираем кнопку и скрытые отзывы
const reviewBtn = document.querySelector('.review-btn');
const hiddenReviews = document.querySelectorAll('.hidden-review');
const reviewSection = document.querySelector('.review');

// Функция для обработки нажатия на кнопку
reviewBtn.addEventListener('click', function () {
    clickSound.play();
    // Проверяем состояние текста кнопки через textContent
    if (reviewBtn.textContent === "Смотреть дальше") {
        // Показываем все скрытые изображения
        hiddenReviews.forEach(img => {
            img.style.display = "block"; // Меняем стиль через display
        });

        // Меняем текст кнопки с помощью textContent
        reviewBtn.textContent = "Скрыть";
    } else {
        // Скрываем все изображения
        hiddenReviews.forEach(img => {
            img.style.display = "none"; // Меняем стиль обратно
        });

        // Меняем текст кнопки обратно через innerText
        reviewBtn.innerText = "Смотреть дальше";
    }
});

// ASSIK 5 - MANSUR'S BLOCK


// ASSIK 5 - AITAS'S BLOCK
const coaches = [
    {
        name: 'Владимир',
        image: 'gym/photo_2024-09-20_22-08-49.jpg',
        description: 'Индивидуальные тренировки, силовые тренировки.'
    },
    {
        name: 'Сергей',
        image: 'gym/photo_2024-09-21_19-06-59.jpg',
        description: '10+ лет опыта в силовом тренинге. Особое внимание к технике и безопасности.'
    },
    {
        name: 'Виолетта',
        image: 'gym/DSV_1002.jpg',
        description: 'Кардио и анаэробные упражнения, улучшение выносливости.'
    },
    {
        name: 'Дмитрий',
        image: 'gym/DSV_1007.jpg',
        description: 'Фитнес тренер для начинающих и опытных тренирующихся.'
    }
];

// Получаем элемент для списка тренеров
const coachesList = document.getElementById('coaches-list');

// Функция для создания HTML-карточки тренера
function createCoachCard(coach) {
    return `
        <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
            <div class="coach-card shadow-sm h-100" style="cursor: pointer;" onclick="playSound()">
                <img src="${coach.image}" class="card-img-top" alt="${coach.name}">
                <div class="card-body text-center">
                    <h5 class="card-title">${coach.name}</h5>
                    <p class="card-text">${coach.description}</p>
                </div>
            </div>
        </div>
    `;
}

// Используем forEach для добавления карточек тренеров на страницу
coaches.forEach(coach => {
    coachesList.innerHTML += createCoachCard(coach);
});

// Анимация при наведении на карточки
document.querySelectorAll('.coach-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.transition = 'transform 0.3s ease';
    });
});

// Функция для воспроизведения звука

// ASSIK 5 - AITAS'S BLOCK







ymaps.ready(function () {
    var map = new ymaps.Map("yandex-map", {
        center: [42.313467, 69.621923],
        zoom: 16,
        controls: []
    });

    map.controls.add('zoomControl', {
        size: 'small'
    });

    var placemark = new ymaps.Placemark([42.313467, 69.621923], {
        balloonContent: '<strong>Beket Batyra 86 </strong><br>Shymkent'
    });

    map.behaviors.enable('drag');
    map.behaviors.disable(['scrollZoom', 'rightMouseButtonMagnifier']);

    map.geoObjects.add(placemark);
});


