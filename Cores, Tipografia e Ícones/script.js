document.addEventListener("DOMContentLoaded", function () {
    const themeButton = document.getElementById("themeButton");
    const themeMenu = document.getElementById("themeMenu");
    const themeOptions = document.querySelectorAll(".theme-option");
    
    // Carregar o tema salvo
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.classList.toggle("dark-theme", savedTheme === "dark");
    
    themeButton.addEventListener("click", function () {
        themeMenu.style.display = themeMenu.style.display === "block" ? "none" : "block";
    });
    
    
    themeOptions.forEach(option => {
        option.addEventListener("click", function () {
            const selectedTheme = this.dataset.theme;
            
            if (selectedTheme === "dark") {
                document.body.classList.add("dark-theme");
            } else {
                document.body.classList.remove("dark-theme");
            }
            
            localStorage.setItem("theme", selectedTheme);
            themeMenu.style.display = "none";
        });
    });
});

function changeTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('inatelTheme', theme);
    toggleThemeMenu();
}

// Carregar tema salvo
window.onload = () => {
    const savedTheme = localStorage.getItem('inatelTheme') || 'inatel';
    document.body.setAttribute('data-theme', savedTheme);
}