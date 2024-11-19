var carousel = document.getElementById('gymCarousel');
var textItems = document.querySelectorAll('.carousel-text-item');

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



document.querySelector('.burger').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.nav-left').classList.toggle('open');
});



const readMoreBtn = document.getElementById('readMoreBtn');
const moreText = document.getElementById('moreText');

readMoreBtn.addEventListener('click', function () {
    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        readMoreBtn.textContent = "Скрыть";
    } else {
        moreText.style.display = "none";
        readMoreBtn.textContent = "Читать больше";
        readMoreBtn.style.backgroundColor = "";
    }
});

function animateTimeline() {
    const events = document.querySelectorAll('.event');
    const windowHeight = window.innerHeight;

    events.forEach(event => {
      const eventTop = event.getBoundingClientRect().top;

      if (eventTop < windowHeight - 100) {
        event.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', animateTimeline);

  animateTimeline();

  const goals = document.querySelectorAll('.goal');
  const boxes = document.querySelectorAll('.box');
  const goalsContainer = document.getElementById('goals');

  goals.forEach(goal => {
    goal.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text', e.target.id);
    });
  });

  // Обработка всех зон (включая исходный контейнер целей)
  const dropZones = [...boxes, goalsContainer];

  dropZones.forEach(zone => {
    zone.addEventListener('dragover', e => {
      e.preventDefault();
      zone.classList.add('over');
    });

    zone.addEventListener('dragleave', () => {
      zone.classList.remove('over');
    });

    zone.addEventListener('drop', e => {
      e.preventDefault();
      zone.classList.remove('over');
      const goalId = e.dataTransfer.getData('text');
      const goal = document.getElementById(goalId);

      // Если цель перетаскивается в новую зону
      if (!zone.contains(goal)) {
        if (zone.classList.contains('box')) {
          const placeholder = zone.querySelector('.placeholder');
          placeholder.style.display = 'none'; // Скрыть текст, если зона занята
        }

        if (zone.id === 'goals') {
          // Вернуть текст в программу, если цель перемещается обратно
          const parentBox = goal.parentElement;
          if (parentBox.classList.contains('box')) {
            const placeholder = parentBox.querySelector('.placeholder');
            placeholder.style.display = 'block';
          }
        }
        zone.appendChild(goal);
      }
    });
  });

  // Следим за количеством целей в программах
  function checkAllMatched() {
    let allMatched = true;

    boxes.forEach(box => {
      if (!box.querySelector('.goal')) {
        allMatched = false;
      }
    });

    return allMatched;
  }

  // Событие для проверки состояния
  document.addEventListener('drop', () => {
    if (checkAllMatched()) {
      alert('Все цели размещены! Теперь вы можете вернуть их обратно.');
    }
  });



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
            <div class="coach-card shadow-sm h-100" style="cursor: pointer;">
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

 // Highcharts Pie Chart Configuration
 Highcharts.chart('container', {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Отзывы в 2Gis'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [{
      name: 'Reviews',
      colorByPoint: true,
      data: [
        { name: '5 звезд', y: 65 },
        { name: '4 звезд', y: 25 },
        { name: '2 звезд', y: 10 }
      ]
    }],
    credits: {
      enabled: false // This disables the Highcharts.com text
    }
  });


// Questions Array
const questions = [
    {
        text: "Какую цель вы преследуете?",
        options: ["Набор массы", "Похудение", "Улучшение выносливости", "Общее здоровье"]
    },
    {
        text: "Какой уровень у вас сейчас?",
        options: ["Начинающий", "Средний", "Продвинутый"]
    },
    {
        text: "Сколько времени вы готовы уделять тренировкам?",
        options: ["1-2 раза в неделю", "3-4 раза в неделю", "5-6 раз в неделю"]
    },
    {
        text: "Какой тип тренировок вам больше нравится?",
        options: ["Силовые", "Кардио", "Смешанные", "Йога/растяжка"]
    }
];

// Current Question Index
let currentQuestionIndex = 0;
let answers = [];

// DOM Elements
const testModal = new bootstrap.Modal(document.getElementById('testModal'));
const questionContainer = document.getElementById('questionContainer');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// Function to Render Question
function renderQuestion(index) {
    const question = questions[index];
    // Generate HTML for options
    const optionsHTML = question.options
        .map(
            (option, i) =>
                `<li class="list-group-item option-item" data-index="${i}">${option}</li>`
        )
        .join("");

    // Update question container
    questionContainer.innerHTML = `
        <h4>${question.text}</h4>
        <ul class="list-group my-3">${optionsHTML}</ul>
    `;

    // Add Event Listeners for Options
    const options = document.querySelectorAll('.option-item');
    options.forEach(option => {
        option.addEventListener('click', function () {
            // Deselect all options
            options.forEach(opt => opt.classList.remove('selected'));
            // Select current option
            this.classList.add('selected');
            // Save the answer
            answers[currentQuestionIndex] = parseInt(this.getAttribute('data-index'), 10);
        });
    });

    // Update navigation buttons
    prevBtn.style.display = index > 0 ? "inline-block" : "none";
    nextBtn.textContent = index < questions.length - 1 ? "Далее" : "Завершить";
}

// Event Listeners
document.getElementById('startTestBtn').addEventListener('click', function () {
    currentQuestionIndex = 0;
    answers = [];
    renderQuestion(currentQuestionIndex);
    testModal.show();
});

nextBtn.addEventListener('click', function () {
    if (answers[currentQuestionIndex] === undefined) {
        alert("Пожалуйста, выберите ответ перед продолжением.");
        return;
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        renderQuestion(currentQuestionIndex);
    } else {
        // Test Complete
        testModal.hide();
        alert("Спасибо за прохождение теста! Наши специалисты свяжуться с вами для дальнейший консультации." );
    }
});

prevBtn.addEventListener('click', function () {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion(currentQuestionIndex);
    }
});


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
