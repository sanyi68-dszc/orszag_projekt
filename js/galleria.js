kepek=""
for (let i = 1; i <= 12; i++) {
    kepek+=`
    <div class="col-sm-3 text-center">
        <p><img style="margin-top: 6px; margin-bottom: 6px; padding: 6px" src="kepek/szauna${i}.jpg" width="300px"></p>
    </div>
    `
}
document.getElementById("galleriaDiv").innerHTML=kepek