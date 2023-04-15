namespace ToDo {
    window.addEventListener("load", handleload);

    function handleload(_event: Event): void {

    }


    document.querySelector("#finished")!.addEventListener('click', function () {

        console.log("fertig");

    })

    document.querySelector("#edit")!.addEventListener('click', function () {

        console.log("geändert");

    })
    document.querySelector("#trashbin")!.addEventListener('click', function () {

        console.log("gelöscht");

    })
}

