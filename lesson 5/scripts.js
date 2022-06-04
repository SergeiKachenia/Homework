const switchThemeButton = document.querySelector(".switch-theme-btn");
const mainPage = document.querySelector('.page-wrapper');
const currentTheme = localStorage.getItem('theme');

// логика сохранения темы в localStorage

if (currentTheme == "dark") {
    mainPage.classList.add("theme-dark");
};
switchThemeButton.innerHTML = currentTheme == 'dark' ? 'Включить светлую тему' : 'Включить темную тему';

switchThemeButton.addEventListener("click", () => {
    mainPage.classList.toggle("theme-dark");
    localStorage.setItem('theme', 'light');
    switchThemeButton.innerHTML = 'Включить темную тему';
    if (mainPage.classList.contains("theme-dark")) {
        switchThemeButton.innerHTML = 'Включить светлую тему';
        localStorage.setItem('theme', 'dark');
    }
})


// логика сохранения темы в куках

// switchThemeButton.addEventListener("click", () => {
//     mainPage.classList.toggle("theme-dark");
//     let theme = "light";
//     if (document.body.classList.contains("dark-theme")) {
//         theme = "dark";
//     }
//     document.cookie = "theme=" + theme;
// });