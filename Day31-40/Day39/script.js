function createCard(title, cName, views, monthsOld, thumbnail) {
    let viewStr;
    if (views < 100000) {
        viewStr = (views / 1000).toFixed(1) + "K";
    } else if (views >= 1000000) {
        viewStr = (views / 1000000).toFixed(1) + "M";
    } else {
        viewStr = (views / 1000).toFixed(1) + "K";
    }

    let html = `
        <div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="" height="300px" width="400px">
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} • ${viewStr} students • ${monthsOld} months ago</p>
            </div>
        </div>
    `;

    document.querySelector(".container").innerHTML += html;
}
