
document.querySelector('.burger').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.nav-left').classList.toggle('open');
});


document.addEventListener('DOMContentLoaded', function () {
    // Загружаем данные из локального хранилища при загрузке страницы
    loadFormData();

    // Обработчик отправки формы
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();

        document.getElementById('nameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('phoneError').textContent = '';
        document.getElementById('formMessage').textContent = '';

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();

        let valid = true;

        if (name.length < 2) {
            document.getElementById('nameError').textContent = 'Имя должно содержать не менее 2 символов.';
            valid = false;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            document.getElementById('emailError').textContent = 'Введите корректный адрес электронной почты.';
            valid = false;
        }

        const phonePattern = /^[0-9]{10,15}$/;
        if (!phonePattern.test(phone)) {
            document.getElementById('phoneError').textContent = 'Введите корректный номер телефона (10-15 цифр).';
            valid = false;
        }

        if (valid) {
            document.getElementById('formMessage').textContent = 'Форма успешно отправлена!';

            // Сохраняем данные в локальное хранилище
            saveFormData(name, email, phone);

            // Очищаем форму
            document.getElementById('contactForm').reset();
        }
    });
});

// Функция для сохранения данных в локальное хранилище
function saveFormData(name, email, phone) {
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
}

// Функция для загрузки данных из локального хранилища
function loadFormData() {
    const savedName = localStorage.getItem('name');
    const savedEmail = localStorage.getItem('email');
    const savedPhone = localStorage.getItem('phone');

    if (savedName) {
        document.getElementById('name').value = savedName;
    }
    if (savedEmail) {
        document.getElementById('email').value = savedEmail;
    }
    if (savedPhone) {
        document.getElementById('phone').value = savedPhone;
    }
}



const menuItems = document.querySelectorAll('#menu li');
let currentIndex = 0;
menuItems[currentIndex].classList.add('selected');

document.addEventListener('keydown', function (event) {
    menuItems[currentIndex].classList.remove('selected');
    if (event.key === 'ArrowDown') {
        currentIndex = (currentIndex + 1) % menuItems.length;
    } else if (event.key === 'ArrowUp') {
        currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
    }
    menuItems[currentIndex].classList.add('selected');
});