debug = false

liikkeet = []

function etäisyys(hahmo1, hahmo2) {
    const dx = hahmo1.X - hahmo2.X
    const dy = hahmo1.Y - hahmo2.Y
    return Math.sqrt(dx * dx + dy * dy)
}

function osuuSeinään(suunta, laatikko) {
    if (debug) {
        return false
    }
    if (suunta === "ylös") {
        return map[laatikko.taulukkoY - 1][laatikko.taulukkoX] === 1
    }
    if (suunta === "alas") {
        return map[laatikko.taulukkoY + 1][laatikko.taulukkoX] === 1
    }
    if (suunta === "vasen") {
        return map[laatikko.taulukkoY][laatikko.taulukkoX - 1] === 1
    }
    if (suunta === "oikea") {
        return map[laatikko.taulukkoY][laatikko.taulukkoX + 1] === 1
    }
}

function laatikkoLiiku(suunta, laatikko, olikoMaalissa) {
    if (suunta === "ylös") {
        laatikko.Y -= 25
        if (olikoMaalissa) {
            map[laatikko.taulukkoY][laatikko.taulukkoX] = 2
        } else {
            map[laatikko.taulukkoY][laatikko.taulukkoX] = 0
        }
        laatikko.taulukkoY -= 1
        map[laatikko.taulukkoY][laatikko.taulukkoX] = 3
    } else if (suunta === "alas") {
        laatikko.Y += 25
        if (olikoMaalissa) {
            map[laatikko.taulukkoY][laatikko.taulukkoX] = 2
        } else {
            map[laatikko.taulukkoY][laatikko.taulukkoX] = 0
        }
        laatikko.taulukkoY += 1
        map[laatikko.taulukkoY][laatikko.taulukkoX] = 3
    } else if (suunta === "vasen") {
        laatikko.X -= 25
        if (olikoMaalissa) {
            map[laatikko.taulukkoY][laatikko.taulukkoX] = 2
        } else {
            map[laatikko.taulukkoY][laatikko.taulukkoX] = 0
        }
        laatikko.taulukkoX -= 1
        map[laatikko.taulukkoY][laatikko.taulukkoX] = 3
    } else if (suunta === "oikea") {
        laatikko.X += 25
        if (olikoMaalissa) {
            map[laatikko.taulukkoY][laatikko.taulukkoX] = 2
        } else {
            map[laatikko.taulukkoY][laatikko.taulukkoX] = 0
        }
        laatikko.taulukkoX += 1
        map[laatikko.taulukkoY][laatikko.taulukkoX] = 3
    }
}

function siirtyyTyhjään(suunta, laatikko) {
    if (suunta === "ylös") {
        return map[laatikko.taulukkoY - 1][laatikko.taulukkoX] === 0
    }
    if (suunta === "alas") {
        return map[laatikko.taulukkoY + 1][laatikko.taulukkoX] === 0
    }
    if (suunta === "vasen") {
        return map[laatikko.taulukkoY][laatikko.taulukkoX - 1] === 0
    }
    if (suunta === "oikea") {
        return map[laatikko.taulukkoY][laatikko.taulukkoX + 1] === 0
    }
}

function siirtyyLaatikkoon(suunta, laatikko) {
    if (suunta === "ylös") {
        return map[laatikko.taulukkoY - 1][laatikko.taulukkoX] === 3
    }
    if (suunta === "alas") {
        return map[laatikko.taulukkoY + 1][laatikko.taulukkoX] === 3
    }
    if (suunta === "vasen") {
        return map[laatikko.taulukkoY][laatikko.taulukkoX - 1] === 3
    }
    if (suunta === "oikea") {
        return map[laatikko.taulukkoY][laatikko.taulukkoX + 1] === 3
    }
}

function siirtyyPalkintoon(suunta, laatikko) {
    if (suunta === "ylös") {
        return map[laatikko.taulukkoY - 1][laatikko.taulukkoX] === 2
    }
    if (suunta === "alas") {
        return map[laatikko.taulukkoY + 1][laatikko.taulukkoX] === 2
    }
    if (suunta === "vasen") {
        return map[laatikko.taulukkoY][laatikko.taulukkoX - 1] === 2
    }
    if (suunta === "oikea") {
        return map[laatikko.taulukkoY][laatikko.taulukkoX + 1] === 2
    }
}

function asetaMaaliin(laatikko) {
    map[laatikko.taulukkoY][laatikko.taulukkoX] = 4
}

function reset() {
    pelaaja.X = 50
    pelaaja.Y = 100
    pelaaja.taulukkoX = 2
    pelaaja.taulukkoY = 4
    pelaaja.suunta = "oikea"
    pelaaja.askeleet = 0

    laatikko1.X = 50
    laatikko1.Y = 50
    laatikko1.taulukkoX = 2
    laatikko1.taulukkoY = 2
    laatikko1.maali = false

    laatikko2.X = 125
    laatikko2.Y = 75
    laatikko2.taulukkoX = 5
    laatikko2.taulukkoY = 3
    laatikko2.maali = false

    laatikko3.X = 200
    laatikko3.Y = 75
    laatikko3.taulukkoX = 8
    laatikko3.taulukkoY = 3
    laatikko3.maali = false

    laatikko4.X = 275
    laatikko4.Y = 50
    laatikko4.taulukkoX = 11
    laatikko4.taulukkoY = 2
    laatikko4.maali = false

    map = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
        [1, 2, 3, 0, 0, 0, 1, 0, 0, 1, 2, 3, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 2, 3, 0, 2, 3, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
    piirrä()
}
const piirtäjä = kangas.getContext("2d")

const pelaaja = {
    X: 50,
    Y: 100,
    taulukkoX: 2,
    taulukkoY: 4,
    suunta: "oikea",
    askeleet: 0
}

const laatikko1 = {
    X: 50,
    Y: 50,
    taulukkoX: 2,
    taulukkoY: 2,
    maali: false
}

const laatikko2 = {
    X: 125,
    Y: 75,
    taulukkoX: 5,
    taulukkoY: 3,
    maali: false
}
const laatikko3 = {
    X: 200,
    Y: 75,
    taulukkoX: 8,
    taulukkoY: 3,
    maali: false
}
const laatikko4 = {
    X: 275,
    Y: 50,
    taulukkoX: 11,
    taulukkoY: 2,
    maali: false
}

const laatikot = [laatikko1, laatikko2, laatikko3, laatikko4]

map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    [1, 2, 3, 0, 0, 0, 1, 0, 0, 1, 2, 3, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 2, 3, 0, 2, 3, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

resetCanvas.onclick = () => {
    reset()
    liikkeet = []
}
setInterval(() => {
    pelaajaLiikkui = false
    document.onkeydown = event => {
        if (event.key == "ArrowUp") {
            event.preventDefault()
            if (!osuuSeinään("ylös", pelaaja)) {
                pelaaja.suunta = "ylös"
                pelaaja.Y -= 25
                pelaaja.taulukkoY -= 1
                pelaajaLiikkui = true
            }
        }
        if (event.key == "ArrowDown") {
            event.preventDefault()
            if (!osuuSeinään("alas", pelaaja)) {
                pelaaja.suunta = "alas"
                pelaaja.Y += 25
                pelaaja.taulukkoY += 1
                pelaajaLiikkui = true
            }
        }
        if (event.key == "ArrowLeft") {
            if (!osuuSeinään("vasen", pelaaja)) {
                pelaaja.suunta = "vasen"
                pelaaja.X -= 25
                pelaaja.taulukkoX -= 1
                pelaajaLiikkui = true
            }
        }
        if (event.key == "ArrowRight") {
            if (!osuuSeinään("oikea", pelaaja)) {
                pelaaja.suunta = "oikea"
                pelaaja.X += 25
                pelaaja.taulukkoX += 1
                pelaajaLiikkui = true
            }
        }

        for (laatikko of laatikot) {
            if (etäisyys(pelaaja, laatikko) < 25) {
                if (pelaaja.suunta === "ylös") {
                    if (siirtyyPalkintoon("ylös", laatikko)) {
                        laatikkoLiiku("ylös", laatikko, false)
                        laatikko.maali = true
                        asetaMaaliin(laatikko)
                    } else if (siirtyyTyhjään("ylös", laatikko)) {
                        if (laatikko.maali) {
                            laatikkoLiiku("ylös", laatikko, true)
                            laatikko.maali = false
                        } else {
                            laatikkoLiiku("ylös", laatikko, false)
                        }
                    }
                    else {
                        pelaaja.Y += 25
                        pelaaja.taulukkoY += 1
                        pelaajaLiikkui = false
                    }
                }

                if (pelaaja.suunta === "vasen") {
                    if (siirtyyPalkintoon("vasen", laatikko)) {
                        laatikkoLiiku("vasen", laatikko, false)
                        laatikko.maali = true
                        asetaMaaliin(laatikko)
                    } else if (siirtyyTyhjään("vasen", laatikko)) {
                        if (laatikko.maali) {
                            laatikkoLiiku("vasen", laatikko, true)
                            laatikko.maali = false
                        } else {
                            laatikkoLiiku("vasen", laatikko, false)
                        }
                    } else {
                        pelaaja.X += 25
                        pelaaja.taulukkoX += 1
                        pelaajaLiikkui = false
                    }

                }

                if (pelaaja.suunta === "oikea") {
                    if (siirtyyPalkintoon("oikea", laatikko)) {
                        laatikkoLiiku("oikea", laatikko, false)
                        laatikko.maali = true
                        asetaMaaliin(laatikko)
                    } else if (siirtyyTyhjään("oikea", laatikko)) {
                        if (laatikko.maali) {
                            laatikkoLiiku("oikea", laatikko, true)
                            laatikko.maali = false
                        } else {
                            laatikkoLiiku("oikea", laatikko, false)
                        }
                    } else {
                        pelaaja.X -= 25
                        pelaaja.taulukkoX -= 1
                        pelaajaLiikkui = false
                    }

                }

                if (pelaaja.suunta === "alas") {
                    if (siirtyyPalkintoon("alas", laatikko)) {
                        laatikkoLiiku("alas", laatikko, false)
                        laatikko.maali = true
                        asetaMaaliin(laatikko)
                    } else if (siirtyyTyhjään("alas", laatikko)) {
                        if (laatikko.maali) {
                            laatikkoLiiku("alas", laatikko, true)
                            laatikko.maali = false
                        } else {
                            laatikkoLiiku("alas", laatikko, false)
                        }
                    } else {
                        pelaaja.Y -= 25
                        pelaaja.taulukkoY -= 1
                        pelaajaLiikkui = false
                    }
                }
            }
        }
        if (pelaajaLiikkui) {
            pelaaja.askeleet += 1
            liikkeet.push(" " + pelaaja.suunta)
        }
    }

}, 400)


function piirrä() {

    piirtäjä.clearRect(0, 0, 25 * 17, 25 * 6)
    for (let y = 0; y < 6; y++) {
        for (let x = 0; x < 17; x++) {
            if (map[y][x] === 1) {
                piirtäjä.fillStyle = "grey"
                piirtäjä.fillRect(25 * x, 25 * y, 25, 25)
            }
            if (map[y][x] === 2) {
                piirtäjä.fillStyle = "yellow"
                piirtäjä.fillRect(25 * x, 25 * y, 25, 25)
            }
            if (map[y][x] === 3) {
                piirtäjä.fillStyle = "blue"
                piirtäjä.fillRect(25 * x, 25 * y, 25, 25)
            }
            if (map[y][x] === 4) {
                piirtäjä.fillStyle = "green"
                piirtäjä.fillRect(25 * x, 25 * y, 25, 25)
            }
        }
    }
    //piirretään pelaaja
    piirtäjä.fillStyle = "red"
    piirtäjä.fillRect(pelaaja.X, pelaaja.Y, 25, 25)

    piirtäjä.font = '15px sans'
    piirtäjä.fillStyle = "black"
    piirtäjä.fillText("Askeleet: " + pelaaja.askeleet, 10, 20)

    voitto = true
    for (const laatikko of laatikot) {
        if (!laatikko.maali) {
            voitto = false
        }
    }
    if (voitto) {
        piirtäjä.fillStyle = "rgba(255, 255, 255, 0.5)";
        piirtäjä.fillRect(0, 0, kangas.width, kangas.height);
        piirtäjä.font = 'bold 40px sans'
        piirtäjä.fillStyle = "black"
        piirtäjä.fillText("Onneksi olkoon,", 25, 50)
        piirtäjä.fillText("voitit pelin!", 50, 90)
        piirtäjä.font = '25px sans'
        piirtäjä.fillStyle = "black"
        piirtäjä.fillText("Siirryit " + pelaaja.askeleet + " askelta.", 50, 125)

        liikkeetTulostus = document.getElementById("liikkeet")

        liikkeetTulostus.textContent = "Kopioi hahmosi tekemät askeleet hakemukseen tästä: " + liikkeet

        cancelAnimationFrame(piirrä)
    } else {
        requestAnimationFrame(piirrä)
    }

}
requestAnimationFrame(piirrä)


