const piirtäjä = kangas.getContext("2d")

const pelaaja = {
    X: 50,
    Y: 100,
    pituus: 25,
    leveys: 25,
    suunta: "oikea"
}

const seinä = {
    pituus: 25,
    leveys: 25,
    vari: "grey"
}

const laatikko1 = {
    X: 50,
    Y: 50,
    pituus: 25,
    leveys: 25,
    vari: "blue"
}

const laatikko2 = {
    X: 125,
    Y: 75,
    pituus: 25,
    leveys: 25,
    vari: "blue"
}
const laatikko3 = {
    X: 200,
    Y: 75,
    pituus: 25,
    leveys: 25,
    vari: "blue"
}
const laatikko4 = {
    X: 275,
    Y: 50,
    pituus: 25,
    leveys: 25,
    vari: "blue"
}

const map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

//piirretään seinät
for (let y = 0; y < 6; y++) {
    for (let x = 0; x < 17; x++) {
        if (map[y][x] === 1) {
            piirtäjä.fillStyle = "grey"
            piirtäjä.fillRect(25 * x, 25 * y, seinä.leveys, seinä.pituus)
        }
    }
}

function piirrä() {
    //piirtäjä.clearRect(0, 0, 425, 150)

    //piirretään pelaaja
    piirtäjä.fillStyle = "red"
    piirtäjä.fillRect(pelaaja.X, pelaaja.Y, pelaaja.leveys, pelaaja.pituus)

    //piirretään laatikot
    piirtäjä.fillStyle = laatikko1.vari
    piirtäjä.fillRect(laatikko1.X, laatikko1.Y, laatikko1.leveys, laatikko1.pituus)
    piirtäjä.fillRect(laatikko2.X, laatikko2.Y, laatikko2.leveys, laatikko2.pituus)
    piirtäjä.fillRect(laatikko3.X, laatikko3.Y, laatikko3.leveys, laatikko3.pituus)
    piirtäjä.fillRect(laatikko4.X, laatikko4.Y, laatikko4.leveys, laatikko4.pituus)


    requestAnimationFrame(piirrä)
}
requestAnimationFrame(piirrä)

