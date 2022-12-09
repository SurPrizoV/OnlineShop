function mainScreen() {
    const main = document.createElement('div');
    main.classList.add('main');
    screen.appendChild(main);

    window.application.blocks['mainBlock'] = mainBlock;
    window.application.renderBlock('mainBlock', main);
}

window.application.screens['mainScreen'] = mainScreen;
window.application.renderScreen('mainScreen');