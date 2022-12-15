function mainScreen() {
    window.application.blocks['mainBlock'] = mainBlock;
    window.application.renderBlock('mainBlock', screen);
}

window.application.screens['mainScreen'] = mainScreen;
window.application.renderScreen('mainScreen');

function catalogScreen() {
    screen.innerHTML = '';
    window.application.blocks['catalogBlock'] = catalogBlock;
    window.application.renderBlock('catalogBlock', screen);
}

function cartScreen() {
    screen.innerHTML = '';
    window.application.blocks['cartBlock'] = cartBlock;
    window.application.renderBlock('cartBlock', screen);
}