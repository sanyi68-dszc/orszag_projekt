sz=""
for (const elem of kajaTomb) {
    /*sz+=`
    <div class="col-sm-4">
        <div class="kartya">
            <p class="text-center cim">${elem.nev}</p>
            <p class="text-center"><img class="img-fluid kep" src="kepek/${elem.kep}" alt="${elem.nev}" title="${elem.nev}"></p>
            <p class="leiras">${elem.leiras}</p>
        </div>
    </div>
    `*/
    sz+=`
    <button style="height:50px; background-color:rgba(0,60,255,0.6); color:white" data-bs-toggle="collapse" data-bs-target="#${elem.nev}">${elem.nev}</button>

    <div style="padding:10px" id="${elem.nev}" class="collapse">
        <p class="text-center"><img class="img-fluid kep" src="kepek/${elem.kep}" alt="${elem.nev}" title="${elem.nev}"></p>
        <p class="leiras">${elem.leiras}</p>
    </div>
    `
}
document.getElementById("kajaDiv").innerHTML=sz