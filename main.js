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
	console.log(perso.nome);
	console.log(perso.agilidade);
    console.log(perso.forca);
    console.log(perso.intelecto);
    console.log(perso.presenca);
    console.log(perso.vigor);
    }
}
