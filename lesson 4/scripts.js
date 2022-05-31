//первое задание


const searchInput = document.querySelector(".js-input");
const errorMessage = document.querySelector(".error-message");
const testButton = document.querySelector(".test-button");
const successMessage = document.querySelector(".success-message");

testButton.addEventListener("click", () => {
    const inputValue = searchInput.value;
    errorMessage.innerHTML = '';
    successMessage.innerHTML = '';
    errorMessage.classList.remove('not-visible');
    searchInput.classList.remove('error-input');
    searchInput.classList.remove('success-input');
    try {
        if (inputValue == "") throw new Error('Значение инпута - пустое');
        if (isNaN(inputValue)) throw new Error('Значение инпута не является числом');
        if (inputValue < 5) throw new Error('Значение инпута слишком маленькое');
        if (inputValue > 10) throw new Error('Значение инпута слишком большое');
        if (inputValue >= 5 && inputValue <= 10 && inputValue != '' && inputValue != (isNaN(inputValue))) {
            errorMessage.classList.add('not-visible');
            searchInput.classList.add('success-input');
            successMessage.innerHTML = 'Проверка пройдена успешно';

        }
    } catch (err) {
        searchInput.classList.add('error-input');
        errorMessage.innerHTML = err.message;
    } finally {
        searchInput.value = '';
    }
})

//второе задание

async function lottery() {
    console.log("Вы начали игру");
    let promise = await new Promise(function(resolve, reject) {
        setTimeout(function() {
            Math.random(0) > 0.5 ? resolve() : reject("Вы промахнулись");
        }, 1000);
    });
    let result = await promise;
    return result;
}

async function doLottery() {
    try {
        await lottery();
        console.log("Вы выиграли")
        console.log("Вам заплатили")
    } catch {
        console.log("Вы проиграли")
    } finally {
        console.log("Игра закончена");
    }
}

doLottery();