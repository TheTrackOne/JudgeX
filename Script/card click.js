class CardManager {
    constructor(cardSelector) {
        this.cards = document.querySelectorAll(cardSelector);
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            card.addEventListener('click', () => this.onCardClick(card));
        });
    }

    onCardClick(clickedCard) {
        this.removeActiveClasses();
        const selectedButton = localStorage.getItem('selectedButton');
        if (selectedButton) {
            const activeClass = `active${this.mapButtonToDifficulty(selectedButton)}`;
            clickedCard.classList.add(activeClass);
        }
    }

    removeActiveClasses() {
        this.cards.forEach(card => {
            card.classList.remove('activeBasic', 'activeMedium', 'activeHard', 'activeVeryHard');
        });
    }

    mapButtonToDifficulty(buttonNumber) {
        switch (buttonNumber) {
            case '1':
                return 'Basic';
            case '2':
                return 'Medium';
            case '3':
                return 'Hard';
            case '4':
                return 'VeryHard';
            default:
                return ''; 
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const cardManager = new CardManager('.swiper-slide');
});

