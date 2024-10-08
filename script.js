/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

const predictionBtn = document.querySelector('.forecast-btn');
const currentForecast = document.querySelector('.current-forecast');
const mainForecast = document.querySelector('h1');
const mainProbability = currentForecast.querySelector('p');
const forecastItem = document.querySelector('#forecast-item');
const forecastContainer = document.querySelector('.forecasts');
let probability = null;
let predictionText = null;

function generateNumber(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}

function makeForecastList(percent, text) {
    const forecastCard = forecastItem.content.cloneNode(true);
    forecastCard.querySelector('p').textContent = 'Вероятность: ' + percent + '%';
    forecastCard.querySelector('h3').textContent = text;

    if (!probability || !predictionText) {
        return;
    }

    return forecastCard;
}

predictionBtn.addEventListener('click', function() {

    const addedCard = makeForecastList(probability, predictionText);

    if (addedCard) {
        forecastContainer.prepend(addedCard);
    }

    const predictionNumber = generateNumber(0, 10);
    probability = generateNumber(0, 100);

    switch (predictionNumber) {
        case 1:
            predictionText = 'Твой день пройдёт отлично!';
            break;
        case 2:
            predictionText = 'Время читать любимые книги!';
            break;
        case 3:
            predictionText = 'Сегодня всё получится';
            break;
        case 4:
            predictionText = 'Сегодня тебя ждут приятные приключения';
            break;
        case 5:
            predictionText = 'Твоя главная мечта осуществится';
            break;
        case 6:
            predictionText = 'Сегодня высока вероятность встретить нового друга!';
            break;
        case 7:
            predictionText = 'Всё будет замечательно!';
            break;
        case 8:
            predictionText = 'Тебя ждёт плодотворная учёба';
            break;
        case 9:
            predictionText = 'Кто-то угостит тебя вкусной шоколадкой';
            break;
        default:
            predictionText = 'Тебе что-то подарят :)';
            break;
    }

    mainForecast.textContent = predictionText;
    mainProbability.textContent = 'Вероятность: ' + probability + '%';

})