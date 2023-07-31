class Personagem{
    constructor(nome, agilidade,forca,intelecto,presenca,vigor,nex){
        this.nome = nome;
        this.agilidade = agilidade;
        this.forca = forca;
        this.intelecto = intelecto;
        this.presenca = presenca;
        this.vigor = vigor;
        this.nex = nex;
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
        console.log("Exposição Paranormal: "+perso.nex+"%");
        console.log(" ");
    }
}

let aliceocultista = new Personagem("Alice Gutierrez", 2, 0, 3, 3, 2, 35);
let lucascombatente = new Personagem("Lucas Catarino", 4, 1, 2, 2, 1, 35);
let abigailcombatente = new Personagem("Abigail Bianchi Lima", 2, 3, 1, 3, 2, 60)

let f = new Ficha();

f.mostrarConfigFicha(aliceocultista);
f.mostrarConfigFicha(lucascombatente);
f.mostrarConfigFicha(abigailcombatente);