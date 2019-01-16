const secMeldinger = document.querySelector("#secMeldinger");
const skjemaFraAndre = document.querySelector("#skjemaFraAndre");
const skjemaFraMeg = document.querySelector("#skjemaFraMeg");
const inpFraAndre = document.querySelector("#inpFraAndre");
const inpFraMeg = document.querySelector("#inpFraMeg");


// Vi lagrer alle meldingene i et array
const meldinger = [];

function visMeldinger() {
    // Nuller ut alle meldinger
    secMeldinger.innerHTML = "";

    // Traverserer arrayet
    for (const melding of meldinger) {
        secMeldinger.innerHTML += `
            <div class="${melding.type}">${melding.tekst}</div>
        `;
    }
}

function lagreMeldingFraMeg(evt) {
    evt.preventDefault();
    const melding = {
        tekst: inpFraMeg.value,
        type: "me"
    };
    meldinger.push(melding);
    skjemaFraMeg.reset();
    visMeldinger();
}

function lagreMeldingFraAndre(evt) {
    evt.preventDefault();
    const melding = {
        tekst: inpFraAndre.value,
        type: "others"
    };
    meldinger.push(melding);
    skjemaFraAndre.reset();
    visMeldinger();
}

skjemaFraAndre.addEventListener("submit", lagreMeldingFraAndre);
skjemaFraMeg.addEventListener("submit", lagreMeldingFraMeg);