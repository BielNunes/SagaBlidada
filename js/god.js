function smt(eID) {
    let elem = document.createElement('h1');
    let div = document.getElementById(eID);
    div.innerHTML = null;
    div.appendChild(elem);
    const all_lanes = ['mid', 'carry', 'supp', 'jungler', 'solo'];
    const random = Math.floor(Math.random() * all_lanes.length);
    elem.innerHTML = all_lanes[random];
}