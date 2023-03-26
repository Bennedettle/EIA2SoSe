var poem;
(function (poem) {
    let subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let predicates = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    //arrays werden deklariert
    function getVerse(_subj, _pred, _obj) {
        //funktion wird definiert
        const random_subj = Math.floor(Math.random() * _subj.length);
        const random_pred = Math.floor(Math.random() * _pred.length);
        const random_obj = Math.floor(Math.random() * _obj.length);
        //zufallszahlen passend zum array generiert
        const vers = _subj.splice(random_subj, 1)[0] + " " + _pred.splice(random_pred, 1)[0] + " " + _obj.splice(random_obj, 1)[0];
        //satz wird generiert
        return vers;
    }
    for (let i = 6; i >= 1; i--) {
        //schleife läuft 6 mal durch
        const sentence = getVerse(subjects, predicates, objects);
        console.log(sentence);
    }
})(poem || (poem = {}));
//# sourceMappingURL=poem.js.map