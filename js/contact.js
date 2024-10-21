document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll(".step");
    let currentStep = 0;

    steps[currentStep].style.display = "block";

    document.getElementById("next1").addEventListener("click", function () {
        steps[currentStep].style.display = "none";
        currentStep++;
        steps[currentStep].style.display = "block";
    });

    document.getElementById("prev1").addEventListener("click", function () {
        steps[currentStep].style.display = "none";
        currentStep--;
        steps[currentStep].style.display = "block";
    });

    document.getElementById("next2").addEventListener("click", function () {
        steps[currentStep].style.display = "none";
        currentStep++;
        steps[currentStep].style.display = "block";
    });

    document.getElementById("prev2").addEventListener("click", function () {
        steps[currentStep].style.display = "none";
        currentStep--;
        steps[currentStep].style.display = "block";
    });

    function showGreetingAndTime() {
        const currentTimeElement = document.getElementById('currentTime');
        const greetingElement = document.getElementById('greeting');

        const now = new Date();
        const currentHour = now.getHours();
        const currentTime = now.toLocaleTimeString();

        let greeting;
        if (currentHour >= 6 && currentHour < 12) {
            greeting = "Доброе утро!";
        } else if (currentHour >= 12 && currentHour < 18) {
            greeting = "Добрый день!";
        } else if (currentHour >= 18 && currentHour < 22) {
            greeting = "Добрый вечер!";
        } else {
            greeting = "Доброй ночи!";
        }

        greetingElement.textContent = greeting;
        currentTimeElement.textContent = "Текущее время: " + currentTime;
    }

    showGreetingAndTime();

    document.getElementById("multiStepForm").addEventListener("submit", function (event) {
        event.preventDefault();

        document.getElementById("multiStepForm").style.display = "none";

        const successMessage = "Ваша заявка принята!";
        const userName = document.getElementById('name').value.trim();
        alert(`${userName}, ${successMessage}`);
    });
});

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