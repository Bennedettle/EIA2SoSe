namespace poem {
   
    let subjects: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"]
    let predicates: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"]
    let objects: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"]
 //arrays werden deklariert
    
 
    function getVerse(_subj: string[], _pred: string[], _obj: string[]): string {
        //funktion wird definiert
        const random_subj: number = Math.floor(Math.random() * _subj.length);
        const random_pred: number = Math.floor(Math.random() * _pred.length);
        const random_obj: number = Math.floor(Math.random() * _obj.length);
    //zufallszahlen passend zum array generiert
        const vers: string = _subj.splice(random_subj, 1)[0] + " " + _pred.splice(random_pred, 1)[0] + " " + _obj.splice(random_obj, 1)[0];
    //satz wird generiert
        return vers;
    }
    
    for (let i = 6; i >= 1; i--) {
        //schleife läuft 6 mal durch
        const sentence: string = getVerse(subjects, predicates, objects);
        console.log(sentence);
    }
}