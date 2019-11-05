
let aanestystulos = {
    aania: 0,
    aanestajia: 4510040,
    aanestysprosentti: 0,
    piirit: {
        helsinki: {
            äänestäjiä: 587436,
            aania: 0,
            äänestysprosentti: 0,
            paikkoja: 3, // 22
            dhondtinLista: [],
            puolueet: [{
                id: 1,
                nimi: "Puolue A",
                vaaliliitto: [2,3],
                aaniaYhteensa: 0,
                ehdokkaat: [{
                    nimi: "ehdokas A",
                    aania: 14456,
                    dhondtinLuku: 0,
                    puolue: 1,
                    läpi: false
                },{
                    nimi: "ehdokas B",
                    aania: 10000,
                    dhondtinLuku: 0,
                    puolue: 1,
                    läpi: false
                },{
                    nimi: "ehdokas C",
                    aania: 5000,
                    dhondtinLuku: 0,
                    puolue: 1,
                    läpi: false
                }]
            },{
                id: 2,
                nimi: "Puolue B",
                vaaliliitto: [],
                aaniaYhteensa: 0,
                ehdokkaat: [{
                    nimi: "ehdokas D",
                    aania: 1445,
                    dhondtinLuku: 0,
                    puolue: 2,
                    läpi: false
                },{
                    nimi: "ehdokas E",
                    aania: 1000,
                    dhondtinLuku: 0,
                    puolue: 2,
                    läpi: false
                },{
                    nimi: "ehdokas F",
                    aania: 500,
                    dhondtinLuku: 0,
                    puolue: 2,
                    läpi: false
                }]
            }]
        }
    }
};

let laskeLopputulos = (aanestystulos) => {
    let piirit = Object.keys(aanestystulos.piirit);
    let aaniaYhteensä = 0;
    piirit.forEach((elem, ind) => {
        let aania = 0;
        aanestystulos.piirit[elem].puolueet.forEach((elem2, ind2) => {
            elem2.ehdokkaat.sort((a, b) => {
                return b.aania - a.aania;
            });
            elem2.ehdokkaat.forEach((elem3, ind3) => {
                aania += elem3.aania;
                elem2.aaniaYhteensa += elem3.aania;
            });
            elem2.ehdokkaat.forEach((elem3, ind3) => {
                elem3.dhondtinLuku = elem2.aaniaYhteensa / (ind3+1);
                aanestystulos.piirit[elem].dhondtinLista.push(elem3);
            });
        });
        aanestystulos.piirit[elem].dhondtinLista.sort((a, b) => {
            return b.dhondtinLuku - a.dhondtinLuku;
        });
        aanestystulos.piirit[elem].dhondtinLista.forEach((elem3, ind3) => {
            if((ind3+1) <= aanestystulos.piirit[elem].paikkoja) {
                elem3.läpi = true;
            }
        });
        console.log(aanestystulos.piirit[elem].dhondtinLista);
        console.log(aanestystulos.piirit[elem].puolueet);
        aanestystulos.piirit[elem].aania = aania;
        aanestystulos.piirit[elem].äänestysprosentti = aania / aanestystulos.piirit[elem].äänestäjiä;
        aaniaYhteensä += aania;
    });
    aanestystulos.aania = aaniaYhteensä;
    aanestystulos.aanestysprosentti = aaniaYhteensä / aanestystulos.aanestajia;
    console.log(aanestystulos);
};

laskeLopputulos(aanestystulos);