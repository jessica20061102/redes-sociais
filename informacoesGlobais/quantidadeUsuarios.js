async function quatidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'

const res = await fetch(url)
const dados = awaitres.json()

console.log(dados)
const nomeDasRedes = Object.keys(dados)
const quantidadeUuarios = Object.values(dados)

const data = [
    {
        x:nomeDasRedes,
        y:quantidadeUuarios,
        type:'bar'
    }
]

const grafico = document.createElement('div')
grafico.className = 'grafico'
document.getElementById('graficos').appendChild(grafico)
plotly.newPlot(grafico,data)

}
quantidadeUuarios()