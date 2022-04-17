const message = 'Damn, you have waken up the Stackoverflow Anticopy monstor. Dont\'t you dare copying code from Stackoverflow.'
document.addEventListener("copy", () => {
    alert(message);
    navigator.clipboard.writeText('You know what, I\'ve copied it from Stackoverflow.');
});