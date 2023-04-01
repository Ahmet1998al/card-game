const APP_CONTENT = document.querySelector('.content');

window.application = {
    blocks: {},
    screens: {},
    levels: [],
    renderScreen: function (screenName) {
        this.screens[screenName]();
    },
    renderBlock: function (blockName, container) {
        this.blocks[blockName](container);
    },
};