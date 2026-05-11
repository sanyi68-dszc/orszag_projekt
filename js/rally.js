Kereses()
function Kereses(){
    tabla=`<table style="font-size: 13px;">`
    keresett=document.getElementById("rallyText").value
    for (const elem of rallyTomb) {
        szoveg=`
        <tr>
            <td>${elem.ev}</td>
            <td>${elem.hivatalos_megnevezes}</td>
            <td>${elem.versenyzo}</td>
            <td>${elem.versenyzo_nemzetiseg}</td>
            <td>${elem.navigator}</td>
            <td>${elem.navigator_nemzetiseg}</td>
            <td>${elem.auto}</td>
            <td>${elem.bajnoksag}</td>
        </tr>
        `.toLowerCase()
        if (szoveg.includes(keresett)) {
        
            tabla += `
            <tr>
                <td>${elem.ev}</td>
                <td>${elem.hivatalos_megnevezes}</td>
                <td>${elem.versenyzo}</td>
                <td>${elem.versenyzo_nemzetiseg}</td>
                <td>${elem.navigator}</td>
                <td>${elem.navigator_nemzetiseg}</td>
                <td>${elem.auto}</td>
                <td>${elem.bajnoksag}</td>
            </tr>
            `
        }
        
    }
    tabla+="</table>"
    document.getElementById("rallyTablaDiv").innerHTML=tabla
}