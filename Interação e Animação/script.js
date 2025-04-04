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

//Card de Notícias
document.addEventListener('DOMContentLoaded', function() {
    const eventos = [
        {
            id: 1,
            title: 'Semana do Software 2025',
            date: '12/05',
            time: '10:00',
            location: 'Salão de Eventos',
            type: 'tech',
            description: 'Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.',
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400'
        },
        {
            id: 2,
            title: 'Workshop de IoT',
            date: '12/01',
            time: '08:00',
            location: 'Laboratório CS&I',
            type: 'tech',
            description: 'Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400'
        },
        {
            id: 3,
            title: 'Festa dos Alunos 2025',
            date: '18/05',
            time: '19:00',
            location: 'Área Esportiva do Inatel',
            type: 'cultural',
            description: 'Venha comemorar a melhor Festa dos Alunos de todos os tempos!',
            image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400'
        },
        {
            id: 4,
            title: 'Feira de Oportunidades',
            date: '04/05',
            time: '10:00',
            location: 'Salão de Eventos',
            type: 'academic',
            description: 'Venha conhecer empresas e projetos com destaque na área da engenharia.',
            image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400'
        }
    ];

    const carousel = document.querySelector('.carousel');

    //Carregando as imagens do carrossel de notícias
    eventos.forEach(event => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${event.image}" alt="${event.title}">
            <div class="info">
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <p>
                    <span class="material-symbols-outlined icon">event</span> ${event.date} às ${event.time} 
                    <span class="material-symbols-outlined icon">pin_drop</span> ${event.location}
                </p>
            </div>
        `;

        carousel.appendChild(card);
    });

    // Controle do carrossel
    let timer = 5000;
    let index = 0;
    function nextCard() {
        index = (index + 1) % eventos.length;
        updateCarousel();
    }

    function prevCard() {
        index = (index - 1 + eventos.length) % eventos.length;
        updateCarousel();
    }

    function updateCarousel() {
        carousel.style.transform = `translateX(-${index * 100}%)`;
        carousel.style.transition = "transform 0.5s ease-in-out"; // Suavidade na transição
    }

    function onMouseOver(){
        timer = 999999;
    }

    function onMouseLeft(){
        timer = 5000;
    }

    // Adicionando interatividade
    document.getElementById('nextBtn').addEventListener('click', nextCard);
    document.getElementById('prevBtn').addEventListener('click', prevCard);

    //Chamando função nextCard() a cada 5 segundos
    setInterval(nextCard, timer);
});