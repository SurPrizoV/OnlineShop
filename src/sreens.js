function mainScreen() {
    window.application.blocks['mainBlock'] = mainBlock;
    window.application.renderBlock('mainBlock', screen);
}

window.application.screens['mainScreen'] = mainScreen;
window.application.renderScreen('mainScreen');