//? Bir funksiya yaziriq
//? Kreditə götürdüyümüz pul və aylıq(necə ay ödəməliyəm) parametr verilir. 
//? Pul bərabər hissələrə bölünərək hər ay verilməlidir.

function kreditHesabla(pul, aylarinsayi) {
    const ayliqpul = Math.floor(pul / aylarinsayi)
    const kredit = []
    for (let i = 0; i < aylarinsayi - 1; i++) {
        kredit.push(ayliqpul)
    }
    const sonayinpulu = pul - (ayliqpul * (aylarinsayi - 1))
    kredit.push(sonayinpulu)

    return kredit
}

const pul = 1000
const aylarinsayi = 3

const kreditler = kreditHesabla(pul, aylarinsayi)
kreditler.forEach(function (pul, aylarinsayi) {
    console.log(`${aylarinsayi + 1}-ci ay: ${pul} azn`);
}) 