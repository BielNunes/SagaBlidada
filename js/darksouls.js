// itens, eventos, etc

function rules(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let elem = document.createElement('ul');
        div.appendChild(elem);
        let setrules = [
            'se morrer volta do início do jogo',
            'não pode quitar pra evitar uma morte',
            'nao pode usar glitch, clip, bug nem dupe, mas skips sao permitidos',
            'não pode usar magia',
            'não pode bloquear ataques com escudo',
            'É PERMITIDO, e recomendado, JOGAR OFFLINE'
        ];
        for (let index = 0; index < setrules.length; index++) {
            const setrule = setrules[index];
            let telem = document.createElement('li');
            elem.appendChild(telem);
            telem.textContent = setrule
        }
    } else {
        div.innerHTML = '';
    }   
}

// bandit class
function bd(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let elem = document.createElement('img');
        div.appendChild(elem);
        elem.setAttribute('src', 'img/bd.jpg');
    } else {
        div.innerHTML = '';
    }   
}

// undead merchant
function ud(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let elem = document.createElement('p');
        div.appendChild(elem);
        elem.textContent = 'comprar reinforced club, arco e flechas';
    } else {
        div.innerHTML = '';
    }   
}

// elevadores e stone dragon
function sds(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let telem = document.createElement('p');
        div.appendChild(telem);
        telem.textContent = 'antes do stone dragon, tem soul fora dos dois elevadores';
        let elem = document.createElement('img');
        div.appendChild(elem);
        elem.setAttribute('src', 'img/sds.jpg');
    } else {
        div.innerHTML = '';
    }   
}

// darkroot forest
function drs(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let elem = document.createElement('img');
        let telem = document.createElement('p');
        div.appendChild(elem);
        div.appendChild(telem);
        elem.setAttribute('src', 'img/drs.jpg');
        telem.textContent = 'grass crest logo em frente a bonfire, soul na primeira arvore antes da hidra, set subindo na parte acessivel por queda e lizard seguindo a subida';
    } else {
        div.innerHTML = '';
    }   
}

// flip ring
function fpr(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let telem = document.createElement('p');
        div.appendChild(telem);
        telem.textContent = 'n esquece de mepurar o shiva e o barbaro pra n ver vc matando ele, e mata pelas costas';
        let elem = document.createElement('img');
        div.appendChild(elem);
        elem.setAttribute('src', 'img/fpr.png');
    } else {
        div.innerHTML = '';
    }   
}

// soul at the top of sens fortress
function sfts(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let elem = document.createElement('img');
        div.appendChild(elem);
        elem.setAttribute('src', 'img/sfts.png');
    } else {
        div.innerHTML = '';
    }   
}

// painting room guardians
function prgk(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let elem = document.createElement('img');
        div.appendChild(elem);
        elem.setAttribute('src', 'img/prgk.png');
    } else {
        div.innerHTML = '';
    }   
}

// BOSSES tips

// asylum demon
function asdtips(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let telem = document.createElement('p');
        div.appendChild(telem);
        telem.textContent = 'só fica atras dele mane, é o primeiro boss carai';
    } else {
    div.innerHTML = '';
    }   
}

// bell gargoyles
function bgbtips(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let telem = document.createElement('p');
        div.appendChild(telem);
        telem.textContent = 'cola na parede da porta pro outro gargoyle n te pegar. mira jump attack no rabo dele';
    } else {
    div.innerHTML = '';
    }   
}

// quelaag
function qlbtips(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let telem = document.createElement('p');
        div.appendChild(telem);
        telem.textContent = 'nao fica atras dela, espera o cuspe longo ou ataca no cuspe rapido se ela rodar';
    } else {
    div.innerHTML = '';
    }   
}

// ceaseless discharge
function cldbtips(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let telem = document.createElement('p');
        div.appendChild(telem);
        telem.textContent = 'depois q ele jogar o braço soltando foguinho corre pro fog gate e espera no meio dele, qnd ele atacar rola por via das duvidas, ai ataca ele até ele cair no buraco';
    } else {
    div.innerHTML = '';
    }   
}

// iron golem
function igbtips(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let telem = document.createElement('p');
        div.appendChild(telem);
        telem.textContent = 'tomar distancia e correr na direção dele pra triggerar ataque com backstep, acertar no aquiles';
    } else {
    div.innerHTML = '';
    }   
}