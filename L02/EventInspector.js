window.addEventListener(`load`, function handleLoad() {
    document.addEventListener(`mousemove`, setInfoBox);
    document.addEventListener(`click`, logInfo);
    document.addEventListener(`keyup`, logInfo);
    document.body.addEventListener(`click`, logInfo);
    document.body.addEventListener(`keyup`, logInfo);
    const divs = document.querySelectorAll("div");
    divs.forEach(function addingListener(div) {
        div.addEventListener(`click`, logInfo);
        div.addEventListener(`keyup`, logInfo);
    });
});
function setInfoBox(_event) {
    let mouseX = _event.clientX;
    let mouseY = _event.clientY;
    let x = String(mouseX + 20);
    let y = String(mouseY + 20);
    const infobox = document.getElementById("InfoBox");
    infobox.innerHTML = "Mouse x: " + x + " Mouse y: " + y + "Event-Target: " + _event.target;
    infobox.style.position = "fixed";
    infobox.style.top = y + "px";
    infobox.style.left = x + "px";
}
function logInfo(_event) {
    console.log(_event.type + _event.target + _event.currentTarget + _event);
}
//# sourceMappingURL=EventInspector.js.map