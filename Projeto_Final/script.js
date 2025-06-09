// --- Gerenciamento de Tema ---
function toggleThemeMenu() {
    const themeMenu = document.getElementById("themeMenu");
    themeMenu.style.display = themeMenu.style.display === "block" ? "none" : "block";
}

function changeTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('inatelTheme', theme);
    toggleThemeMenu();
}

// Carregar tema salvo ao iniciar a página
window.onload = () => {
    const savedTheme = localStorage.getItem('inatelTheme') || 'inatel';
    document.body.setAttribute('data-theme', savedTheme);
};


// --- Funcionalidade do Carrossel de Eventos e Venda de Ingressos ---
document.addEventListener('DOMContentLoaded', function() {
    const eventos = [
        {
            id: 3,
            title: 'Festa dos Alunos 2025',
            date: '18/05',
            time: '19:00',
            location: 'Área Esportiva do Inatel',
            type: 'cultural',
            description: 'Venha comemorar a melhor Festa dos Alunos de todos os tempos!',
            image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400',
            price: 50.00
        },
        {
            id: 1,
            title: 'Semana do Software 2025',
            date: '12/05',
            time: '10:00',
            location: 'Salão de Eventos',
            type: 'tech',
            description: 'Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.',
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400',
            price: 15.00
        },
        {
            id: 4,
            title: 'Feira de Oportunidades',
            date: '04/05',
            time: '10:00',
            location: 'Salão de Eventos',
            type: 'academic',
            description: 'Venha conhecer empresas e projetos com destaque na área da engenharia.',
            image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400',
            price: 0.00 // Evento gratuito
        },
        {
            id: 2,
            title: 'Workshop de IoT',
            date: '12/01',
            time: '08:00',
            location: 'Laboratório CS&I',
            type: 'tech',
            description: 'Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400',
            price: 25.00
        }
    ];

    const carousel = document.querySelector('.carousel');
    const modal = document.getElementById('buyModal');
    const modalBody = document.getElementById('modalBody');
    const closeModalBtn = document.querySelector('.close-btn');

    // Carregando os cards de eventos no carrossel
    eventos.forEach(event => {
        const card = document.createElement('div');
        card.classList.add('card');

        let priceDisplay = event.price > 0 
            ? `<div class="price-tag">R$ ${event.price.toFixed(2)}</div><button class="buy-button" data-event-id="${event.id}">Comprar Ingresso</button>`
            : `<div class="price-tag">Gratuito</div>`;

        card.innerHTML = `
            <img src="${event.image}" alt="${event.title}">
            <div class="info">
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <p>
                    <span class="material-symbols-outlined icon">event</span> ${event.date} às ${event.time} 
                    <span class="material-symbols-outlined icon">pin_drop</span> ${event.location}
                </p>
                ${priceDisplay}
            </div>
        `;
        carousel.appendChild(card);
    });

    // Lógica de compra de ingresso
    carousel.addEventListener('click', function(e) {
        if (e.target.classList.contains('buy-button')) {
            const eventId = parseInt(e.target.dataset.eventId);
            const event = eventos.find(ev => ev.id === eventId);
            openBuyModal(event);
        }
    });

    function openBuyModal(event) {
        const convenienceFee = event.price * 0.10;
        const totalPrice = event.price + convenienceFee;

        modalBody.innerHTML = `
            <h4>Confirmação de Compra</h4>
            <p><strong>Evento:</strong> ${event.title}</p>
            <p><strong>Valor:</strong> R$ ${event.price.toFixed(2)}</p>
            <p><strong>Taxa de Conveniência:</strong> R$ ${convenienceFee.toFixed(2)}</p>
            <hr style="margin: 10px 0;">
            <p><strong>Total: R$ ${totalPrice.toFixed(2)}</strong></p>
            <button class="modal-button confirm-btn" id="confirmPurchase">Confirmar Compra</button>
            <button class="modal-button cancel-btn" id="cancelPurchase">Cancelar</button>
        `;
        modal.style.display = "block";

        document.getElementById('confirmPurchase').onclick = () => {
            modalBody.innerHTML = '<h4>Compra realizada com sucesso! ✅</h4><p>Seu ingresso foi enviado para o seu e-mail.</p>';
            setTimeout(() => {
                modal.style.display = "none";
            }, 2500);
        };

        document.getElementById('cancelPurchase').onclick = () => {
            modal.style.display = "none";
        };
    }

    closeModalBtn.onclick = () => {
        modal.style.display = "none";
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // --- Controle do Carrossel ---
    let currentIndex = 0;
    let carouselInterval = setInterval(nextCard, 5000);

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextCard() {
        currentIndex = (currentIndex + 1) % eventos.length;
        updateCarousel();
    }

    function prevCard() {
        currentIndex = (currentIndex - 1 + eventos.length) % eventos.length;
        updateCarousel();
    }
    
    // Pausar o carrossel com o mouse e reativar
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('mouseenter', () => clearInterval(carouselInterval));
    carouselContainer.addEventListener('mouseleave', () => carouselInterval = setInterval(nextCard, 5000));

    // Adicionando interatividade aos botões
    document.getElementById('nextBtn').addEventListener('click', () => {
        nextCard();
        // Reseta o intervalo para evitar pulo duplo
        clearInterval(carouselInterval);
        carouselInterval = setInterval(nextCard, 5000);
    });
    document.getElementById('prevBtn').addEventListener('click', () => {
        prevCard();
        // Reseta o intervalo para evitar pulo duplo
        clearInterval(carouselInterval);
        carouselInterval = setInterval(nextCard, 5000);
    });
});