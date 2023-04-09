var ToDo;
(function (ToDo) {
    window.addEventListener("load", handleload);
    function handleload(_event) {
    }
    document.querySelector("#finished").addEventListener('click', function () {
        console.log("fertig");
    });
    document.querySelector("#edit").addEventListener('click', function () {
        console.log("geändert");
    });
    document.querySelector("#trashbin").addEventListener('click', function () {
        console.log("gelöscht");
    });
})(ToDo || (ToDo = {}));
//# sourceMappingURL=L03.js.map