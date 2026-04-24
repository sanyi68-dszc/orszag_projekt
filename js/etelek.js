sz=""
for (const elem of kajaTomb) {
    sz+=`
    <div class="col-sm-6">
        <div class="kartya">
            <p class="text-center cim">${elem.nev}</p>
            <p class="text-center"><img class="img-fluid kep" src="kepek/${elem.kep}" alt="${elem.nev}" title="${elem.nev}"></p>
            <p class="leiras">${elem.leiras}</p>
        </div>
    </div>
    `
}
document.getElementById("kajaDiv").innerHTML=sz