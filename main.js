class Personagem{
    constructor(nome, agilidade,forca,intelecto,presenca,vigor){
        this.nome = nome;
        this.agilidade = agilidade;
        this.forca = forca;
        this.intelecto = intelecto;
        this.presenca = presenca;
        this.vigor = vigor;
    }
}
class Ficha{
    mostrarConfigFicha(perso){
        console.log("Nome: "+perso.nome);
        console.log("Agilidade: "+perso.agilidade);
        console.log("Força: "+perso.forca);
        console.log("Intelecto: "+perso.intelecto);
        console.log("Presença: "+perso.presenca);
        console.log("Vigor: "+perso.vigor);
    }
}

let ocultista = new Personagem("Alice Gutierrez", 2, 0, 3, 3, 2);
let combatente = new Personagem("Lucas Catarino", 4, 1, 2, 2, 1);

let f = new Ficha();

f.mostrarConfigFicha(ocultista);
f.mostrarConfigFicha(combatente);