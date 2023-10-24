class heroi
{
    constructor(nome, idade, tipo, ataque)
    {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque;
    }
}

let meu_heroi = new heroi("Slardar", 230, "guerreiro")  // Alterar aqui as informações do heroi (não é necessário informar ataque), não é case sensitive.

if (meu_heroi.tipo.toUpperCase() === "GUERREIRO")
{
    meu_heroi.ataque = "espada";
} 
else if (meu_heroi.tipo.toUpperCase() === "MAGO")
{
    meu_heroi.ataque = "magia";
} 
else if (meu_heroi.tipo.toUpperCase() === "MONGE")
{
    meu_heroi.ataque = "artes marciais";
} 
else if (meu_heroi.tipo.toUpperCase() === "NINJA")
{
    meu_heroi.ataque = "shuriken";
} 

console.log(`o ${meu_heroi.tipo.toLowerCase()} atacou usando ${meu_heroi.ataque}`);
