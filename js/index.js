linkTomb=["https://www.mountaindew.com/","https://hu.wikipedia.org/wiki/Michael_Jackson_(%C3%A9nekes,_1958%E2%80%932009)","https://imgflip.com/"]
rnd=Math.floor(Math.random()*linkTomb.length)
document.getElementById("bevezetoDiv").innerHTML=`<p>Ha szeretnél tudni valamit Finnországról, akkor jó helyen jársz!<br>Ha nem érdekel téged az ország, akkor <a href="${linkTomb[rnd]}">menj innen!</a></p>`