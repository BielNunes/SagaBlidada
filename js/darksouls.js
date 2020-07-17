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
        let msg = new SpeechSynthesisUtterance(
            'Primeiro de tudo escolha a classe do bandido. '+
            'Derrote o azailum dimom. Em firelink pegue '+
            'as firebombs, e os ossos de baixo do elevador. '
        );
        window.speechSynthesis.speak(msg);
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
        elem.textContent = 'comprar reinforced club';
        let msg = new SpeechSynthesisUtterance(
            'Vá ao mercador comprar a clava. '+
            'Equipe a clava. Siga para o ferreiro.'
        );
        window.speechSynthesis.speak(msg);
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
        let msg = new SpeechSynthesisUtterance(
            'Pegue uma '+
            'alma fora do primeiro elevador. Uma alma na pata do dragão, '+
            'e outra após o segundo elevador. '
        );
        window.speechSynthesis.speak(msg);
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
        let msg = new SpeechSynthesisUtterance(
            'Na floresta pegue o escudo. '+
            'Uma alma. Um set. E o lagarto cintilante.'
        );
        window.speechSynthesis.speak(msg);
        let elem = document.createElement('img');
        let telem = document.createElement('p');
        div.appendChild(elem);
        div.appendChild(telem);
        elem.setAttribute('src', 'img/drs.jpg');
        telem.textContent = (
            'grass crest logo em frente a bonfire, soul na '+
            'primeira arvore antes da hidra, set subindo na parte '+
            'acessivel por queda e lizard seguindo a subida'
        );
    } else {
        div.innerHTML = '';
    }   
}

// buy stuff with andre
function bucwb(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let msg = new SpeechSynthesisUtterance(
            'Vá para o ferreiro. Compre o crest '+
            'para abrir a floresta. O weapon box. Flechas. E considere melhorar o arco. '+
            'Aumente o nível de força.'
        );
        window.speechSynthesis.speak(msg);
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
        telem.textContent = (
            'n esquece de empurar o shiva e o barbaro '+
            'pra n ver vc matando ele, e mata pelas costas'
        );
        let msg = new SpeechSynthesisUtterance(
            'Vá para a floreta buscar o anel de estrela. Empurre os inimigos '+
            'e mate o ninja, saia do jogo e volte pegue o anel e use o osso. '+
            'Siga para fortaleza. '
        );
        window.speechSynthesis.speak(msg);
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
        let telem = document.createElement('p');
        div.appendChild(telem);
        telem.textContent = (
            'Ao passar pela fortaleza e chegar no teto colete uma alma e uma titânita. '+
            'Siga para o tarkus e compre 12 bombas pretas. voce vai usa-las para matar o '+
            'gigante ferreiro depois. '
        );
        let msg = new SpeechSynthesisUtterance(
            'Ao passar pela fortaleza e chegar no teto colete uma alma e uma titânita. '+
            'Siga para o tarkus e compre 12 bombas pretas. '
        );
        window.speechSynthesis.speak(msg);
        let elem = document.createElement('img');
        div.appendChild(elem);
        elem.setAttribute('src', 'img/sfts.png');
    } else {
        div.innerHTML = '';
    }   
}

// anor londo he youkoso
function alkg(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let telem = document.createElement('p');
        div.appendChild(telem);
        telem.textContent = (
            'Em anor londo sente na fogueira e upe até poder usar o arco longo. '+
            'Mate os gigantes com o arco e pegue a alabarda usando loyd. Use as almas, '+
            'e n deixe sobrar menos de 30 mil quando upar o nível e a alabarda. '+
            'Siga direto para a sala da pintura. '
        );
        let msg = new SpeechSynthesisUtterance(
            'Em anor londo sente na fogueira e upe até poder usar o arco longo. '+
            'Mate os gigantes com o arco e pegue a alabarda usando loyd. Use as almas, '+
            'e n deixe sobrar menos de 30 mil quando upar o nível e a alabarda. '+
            'Siga direto para a sala da pintura. '
        );
        window.speechSynthesis.speak(msg);
    } else {
        div.innerHTML = '';
    }   
}

// painting room guardians
function prgk(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let telem = document.createElement('p');
        div.appendChild(telem);
        telem.textContent = (
            'Chame os inimigos um a um para mata-los do lado de fora da sala '+
            'com tranquilidade. Use o arco para derrubar os inimigos na parte perigosa. '+
            'Sair da sala em direção ao elevador, ativá-lo e correr para o castelo '+
            'evitando os gárgolas. '
        );
        let msg = new SpeechSynthesisUtterance(
            'Chame os inimigos um a um para mata-los do lado de fora da sala '+
            'com tranquilidade. Use o arco para derrubar os inimigos na parte perigosa. '+
            'Sair da sala em direção ao elevador, ativá-lo e correr para o castelo '+
            'evitando os gárgolas. '
        );
        window.speechSynthesis.speak(msg);
        let elem = document.createElement('img');
        div.appendChild(elem);
        elem.setAttribute('src', 'img/prgk.png');
    } else {
        div.innerHTML = '';
    }   
}

// entering the castle
function rfyl(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let telem = document.createElement('p');
        div.appendChild(telem);
        telem.textContent = (
            'após as gárgolas subindo a escada siga pela direita. '+
            'drible o gigante e siga o caminho até o corredor, logo antes '+
            'de entrar nele role, pois o bicho voador vai te atacar! '+
            'siga correndo e olhando para trás, eles podem jogar lanças em você. '+
            'ao sair do corredor cole na esquina esquerda e observe o inimigo atrás da parede '+
            'para desviar e correr pelo corredor novamente olhando para trás. '+
            'ao chegar no final do caminho descanse. '
        );
        let msg = new SpeechSynthesisUtterance(
            'após as gárgolas subindo a escada siga pela direita. '+
            'drible o gigante e siga o caminho até o corredor, logo antes '+
            'de entrar nele role, pois o bicho voador vai te atacar! '+
            'siga correndo e olhando para trás, eles podem jogar lanças em você. '+
            'ao sair do corredor cole na esquina esquerda e observe o inimigo atrás da parede '+
            'para desviar e correr pelo corredor novamente olhando para trás. '+
            'ao chegar no final do caminho descanse. '
        );
        window.speechSynthesis.speak(msg);
    } else {
        div.innerHTML = '';
    }   
}

// survive the silver archers
function stsa(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let telem = document.createElement('p');
        div.appendChild(telem);
        telem.textContent = (
            'essa posição é segura, espere os arqueiros pararem de atirar e corra '+
            'até o ponto cego do arqueiro da esquerda e espere ele atirar duas flechas '+
            'seguidas, sinal de que vai descansar, então avance para o arqueiro da direita. '+
            'peça um ataque e o faça cair, caso ele não caia vai ter que fazer parry. '
        );
        let msg = new SpeechSynthesisUtterance(
            'essa posição é segura, espere os arqueiros pararem de atirar e corra '+
            'até o ponto cego do arqueiro da esquerda e espere ele atirar duas flechas '+
            'seguidas, sinal de que vai descansar, então avance para o arqueiro da direita. '+
            'peça um ataque e o faça cair, caso ele não caia vai ter que fazer parry. '
        );
        window.speechSynthesis.speak(msg);
    } else {
        div.innerHTML = '';
    }   
}

// inside the castle
function itc(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let telem = document.createElement('p');
        div.appendChild(telem);
        telem.textContent = (
            'siga direto para a escada e suba até alcançar o mesanino. '+
            'pule para o mesnino por cima do corrimão e siga para o ferreiro '+
            'gigante pela parte de cima. '
        );
        let msg = new SpeechSynthesisUtterance(
            'siga direto para a escada e suba até alcançar o mesanino. '+
            'pule para o mesnino por cima do corrimão e siga para o ferreiro '+
            'gigante pela parte de cima. '
        );
        window.speechSynthesis.speak(msg);
    } else {
        div.innerHTML = '';
    }   
}

// giant black smith
function kgs(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let telem = document.createElement('p');
        div.appendChild(telem);
        telem.textContent = (
            'pegue atrás do gigante um anel e compre umas 4 titanitas cintilantes com ele, '+
            'então mate ele usando a black fire bomb. equipe a alabarda e siga para a dupla trapalhona. '
        );
        let msg = new SpeechSynthesisUtterance(
            'pegue atrás do gigante um anel e compre umas 4 titanitas cintilantes com ele, '+
            'então mate ele usando a black fire bomb. equipe a alabarda e siga para a dupla trapalhona. '
        );
        window.speechSynthesis.speak(msg);
    } else {
        div.innerHTML = '';
    }   
}

// gwynevern
function ach(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let telem = document.createElement('p');
        div.appendChild(telem);
        telem.textContent = (
            'mata a peituda, aumenta nível, uarpa pro ferreiro e vai pro sif. '
        );
        let msg = new SpeechSynthesisUtterance(
            'mata a peituda, aumenta nível, uarpa pro ferreiro e vai pro sif. '
        );
        window.speechSynthesis.speak(msg);
    } else {
        div.innerHTML = '';
    }   
}

// slumbering ring
function dsr(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let telem = document.createElement('p');
        div.appendChild(telem);
        telem.textContent = (
            'usa o osso e tp pro andre entrar na sens fortress, '+
            'segue o caminho habitual e qnd chega na pedra rotatória '+
            'pega o caminho q cai na plataforma de madeira segue e pega anel '+
            'na beirada esquerda da area abaixo, usa o osso pra voltar'
        );
        let msg = new SpeechSynthesisUtterance(
            'usa o osso e uarpa pro ferreiro, entra na fortaleza, segue o caminho habitual '+
            'e quando chega na pedra rotatória pega o caminho que cai na plataforma de madeira '+
            'segue e pega anel na beirada esquerda da área abaixo, use o osso pra voltar. '
        );
        window.speechSynthesis.speak(msg);
    } else {
        div.innerHTML = '';
    }   
}

// back to firelink
function btfl(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let telem = document.createElement('p');
        div.appendChild(telem);
        telem.textContent = (
            'upa o martelo e o char pra dar dano e ir pra firelonk, '+
            'equip martelo e ir pro pinwheel, mata os 2 primeiros esqueletos '+
            'to be safe, o segundo é só atacar a parte esquerda da porta. segue '+
            'direto pro pyro e mata ele num hit, senta na bonfire. '
        );
        let msg = new SpeechSynthesisUtterance(
            'aumenta o nível do martelo e do char pra dar dano e vai pra firelink, '+
            'equipe o martelo e vai pra catacumba, mata os 2 primeiros esqueletos '+
            'por segurança, o segundo é só atacar a parte esquerda da porta. segue '+
            'direto pro páiro e mata ele num hite, senta na bonfáire. '
        );
        window.speechSynthesis.speak(msg);
    } else {
        div.innerHTML = '';
    }   
}

// catacombs skip
function ccs(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let telem = document.createElement('p');
        div.appendChild(telem);
        telem.textContent = (
            'segue e mata o prox pyro de longe com arco pra ele '+
            'n te acertar e mata os outros 3 esqueleto próximos ficando '+
            'em cima do banco de terra de forma a fazer '+
            'ele caírem. se posicione na parte esquerda da próxima porta e olhe para baixo. '+
            'em frente ao barrance deve ter uma ponte quebrada, tire o anel estrela e equipe o sem som '+
            'e role na direção dela ao cair na ponte role imediatamente para esquerda. caia na '+
            'plataforma da direita e use as fáire bombs pra matar os esqueletos. siga direto '+
            'pro roda alfinete. '
        );
        let msg = new SpeechSynthesisUtterance(
            'segue e mata o próximo páiro de longe com o arco. '+
            ' use uma pedra de escudo pra ele não te acertar e mata os outros '+
            '3 esqueletos próximos ficando em cima do banco de terra de forma a fazer '+
            'ele caírem. se posicione na parte esquerda da próxima porta e olhe para baixo. '+
            'em frente ao barrance deve ter uma ponte quebrada, tire o anel estrela e equipe o sem som '+
            'e role na direção dela ao cair na ponte role imediatamente para esquerda. caia na '+
            'plataforma da direita e use as fáire bombs pra matar os esqueletos. siga direto '+
            'pro roda alfinete. '
        );
        window.speechSynthesis.speak(msg);
    } else {
        div.innerHTML = '';
    }   
}

// spookie scary skeletons
function sss(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let telem = document.createElement('p');
        div.appendChild(telem);
        telem.textContent = (
            'bota o anel do sleepy e segue as luzes. no esqueleto cola na parede e rola, '+
            'siga e role ao ver os olhos se movendo. ao chega no final siga pra fogueira pela '+
            'escada e sente nela. '
        );
        let msg = new SpeechSynthesisUtterance(
            'bote o anel da soneca e segue as luzes. no esqueleto cola na parede e rola, '+
            'siga e role ao ver os olhos se movendo. ao chegar no final siga pra fogueira pela '+
            'escada e sente nela. '
        );
        window.speechSynthesis.speak(msg);
    } else {
        div.innerHTML = '';
    }   
}

// best friend patches
function bffp(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let telem = document.createElement('p');
        div.appendChild(telem);
        telem.textContent = (
            'converse com o patches, pegue as almas e a lanterna e use um osso, '+
            'warpe para firelink e vá para o asylum novamente. mate os hollows lá '+
            'usando o arco com o hawk e hornet ring e trade a lanterna pelo fog ring. '+
            'use o osso para voltar pra tumba. '
        );
        let msg = new SpeechSynthesisUtterance(
            'converse com o patches, pegue as almas e a lanterna e use um osso, '+
            'uarpe para fáire linke e vá para o asilum novamente. mate os zumbis lá '+
            'usando o arco com o anel da aguia e da abelha e troque a lanterna pelo fog ring. '+
            'use o osso para voltar pra tumba. '
        );
        window.speechSynthesis.speak(msg);
    } else {
        div.innerHTML = '';
    }   
}

// way to nito
function wtn(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let telem = document.createElement('p');
        div.appendChild(telem);
        telem.textContent = (
            'upe e equipe o anel da névoa e a alabarda. siga até o patches e grude na '+
            'na parede direita com cuidado para rolar no momento que ver o cachorrão. '+
            'após o fog gate siga reto em direção à luz tomando distancia da parte esquerda. '+
            'caia dois andares e siga para direita co cuidado por causa do esqueleto na área. '+
            'cai pela direita e segue a parede. depois de dar um 180 vai ter um buraco na area onde você '+
            'deve cair, segue a parede e chega na caverna. '
        );
        let msg = new SpeechSynthesisUtterance(
            'aumente de nível e equipe o anel da névoa e a alabarda. siga até o patches e grude na '+
            'na parede direita com cuidado para rolar no momento que ver o cachorrão. '+
            'após o fog gate siga reto em direção à luz tomando distância da parte esquerda. '+
            'caia dois andares e siga para direita com cuidado por causa do esqueleto na área. '+
            'cai pela direita e segue a parede. depois de dar um 180 vai ter um buraco na área onde você '+
            'deve cair, segue a parede e chega na caverna. '
        );
        window.speechSynthesis.speak(msg);
    } else {
        div.innerHTML = '';
    }   
}

// dark cave
function cave(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let telem = document.createElement('p');
        div.appendChild(telem);
        telem.textContent = (
            'Logo ao entrar na caverna mate o lagarto. corra pelas minhocas e evite rolar, '+
            'a última minhoca desce então ande em direção à ela evitando os esqueletos. '+
            'siga pela esquerda na caverna e passe o fog gate sem cair no buraco. '
        );
        let msg = new SpeechSynthesisUtterance(
            'Logo ao entrar na caverna mate o lagarto. corra pelas minhocas e evite rolar, '+
            'a última minhoca desce então ande em direção à ela evitando os esqueletos. '+
            'siga pela esquerda na caverna e passe o fog gate sem cair no buraco. '
        );
        window.speechSynthesis.speak(msg);
    } else {
        div.innerHTML = '';
    }   
}

// new londo ruins
function nlr(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let telem = document.createElement('p');
        div.appendChild(telem);
        telem.textContent = (
            'volte pra firelink e siga pra new londo. lá vá pra ponte e mate os zumbis pra pegar '+
            'o mãozinha e equipe-a. siga para escada evitando os fantasmas, no topo da escada use '+
            'a mãozinha e siga pela ponte e cole na parede direita mate o fantasma na porta e siga '+
            'descendo a escada lentamente na direção da parede e pegue o fog gate pela direita. '+
            'corra direto até o final da escada e veja se não tem nenhum fantasma te seguindo. '
        );
        let msg = new SpeechSynthesisUtterance(
            'volte pra fáire linke e siga pra niu londo. lá vá pra ponte e mate os zumbis pra pegar '+
            'o mãozinha e equipe-a. siga para escada evitando os fantasmas, no topo da escada use '+
            'a mãozinha e siga pela ponte e cole na parede direita mate o fantasma na porta e siga '+
            'descendo a escada lentamente na direção da parede e pegue o fog gate pela direita. '+
            'corra direto até o final da escada e veja se não tem nenhum fantasma te seguindo. '
        );
        window.speechSynthesis.speak(msg);
    } else {
        div.innerHTML = '';
    }   
}

// deflood the house
function dfth(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let telem = document.createElement('p');
        div.appendChild(telem);
        telem.textContent = (
            'suba um pouco a escada para matar o mago no topo da casa em frente com o arco. '+
            'no pé da escada procure um fantasma na água e espere ele entrar na água para. '+
            'correr até a próxima porta na esquerda e voltar até o alto da escada. '+
            'quando os fantasmas te alcançarem corra direto até a alavanca final. '
        );
        let msg = new SpeechSynthesisUtterance(
            'suba um pouco a escada para matar o mago no topo da casa em frente com o arco. '+
            'no pé da escada procure um fantasma na água e espere ele entrar na água para. '+
            'correr até a próxima porta na esquerda e voltar até o alto da escada. '+
            'quando os fantasmas te alcançarem corra direto até a alavanca final. '
        );
        window.speechSynthesis.speak(msg);
    } else {
        div.innerHTML = '';
    }   
}

// king's road
function ksr(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let telem = document.createElement('p');
        div.appendChild(telem);
        telem.textContent = (
            'mate os fantasmas na construção principal com flechas use o anel do pássaro, são 3. '+
            'logo ao sair da área do elevador haverá um fantasma à direita e caia à esquerda '+
            'da torre e siga colado na parede e entre na névoa. equipe o martelo e o anel do '+
            'abismo e se posicione na útima plataforma e caia pra direita dela. '
        );
        let msg = new SpeechSynthesisUtterance(
            'mate os fantasmas na construção principal com flechas use o anel do pássaro, são 3. '+
            'logo ao sair da área do elevador haverá um fantasma à direita e caia à esquerda '+
            'da torre e siga colado na parede e entre na névoa. equipe o martelo e o anel do '+
            'abismo e se posicione na útima plataforma e caia pra direita dela. '
        );
        window.speechSynthesis.speak(msg);
    } else {
        div.innerHTML = '';
    }   
}

// dukes archives entrance
function eta(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let telem = document.createElement('p');
        div.appendChild(telem);
        telem.textContent = (
            'vá para anor londo e siga para a entrada da biblioteca '+
            'tranquilamente. chaame o javali com um arco até a entrada e mate ele '+
            'com o martelo. na esquina pra direita tem outro javali passe '+
            'por ele pelo lado rolando e vá para o canto do elevador '+
            'para matá-lo. troque para os aneis furtivos e alabarda e'+
            'suba o elevador. '
        );
        let msg = new SpeechSynthesisUtterance(
            'vá para anor londo e siga para a entrada da biblioteca '+
            'tranquilamente. chaame o javali com um arco até a entrada e mate ele '+
            'com o martelo. na esquina pra direita tem outro javali passe '+
            'por ele pelo lado rolando e vá para o canto do elevador '+
            'para matá-lo. troque para os aneis furtivos e alabarda e'+
            'suba o elevador. '
        );
        window.speechSynthesis.speak(msg);
    } else {
        div.innerHTML = '';
    }   
}

// dukes archives main
function dukes(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let telem = document.createElement('p');
        div.appendChild(telem);
        telem.textContent = (
            'ao chegar no topo do elevador use o arco para acertar o monstro de cristal '+
            'tiro o anel soneca pra chamar a atenção dos inimigos com barulho da flecha. '+
            'quando todos estiverem reunidos no cristal corra e siga pela esquerda atras da prateleira. '+
            'suba a escada principal, siga pela esquerda e suba no elevador à direita. siga '+
            'pelo corredor, cuidado com o inimigo e mate o lagarto. '
        );
        let msg = new SpeechSynthesisUtterance(
            'ao chegar no topo do elevador use o arco para acertar o monstro de cristal '+
            'tiro o anel soneca pra chamar a atenção dos inimigos com barulho da flecha. '+
            'quando todos estiverem reunidos no cristal corra e siga pela esquerda atras da prateleira. '+
            'suba a escada principal, siga pela esquerda e suba no elevador à direita. siga '+
            'pelo corredor, cuidado com o inimigo e mate o lagarto. '
        );
        window.speechSynthesis.speak(msg);
    } else {
        div.innerHTML = '';
    }   
}

// dukes archives jail break
function jlbk(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let telem = document.createElement('p');
        div.appendChild(telem);
        telem.textContent = (
            'ainda não fez essa parte'
        );
        let msg = new SpeechSynthesisUtterance(
            'ainda não fez essa parte'
        );
        window.speechSynthesis.speak(msg);
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
        let msg = new SpeechSynthesisUtterance('só fica atrás dele mané, é o primeiro boss.');
        window.speechSynthesis.speak(msg);
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
        telem.textContent = (
            'cola na parede da porta pro outro gargoyle n te pegar. '+
            'mira jump attack no rabo dele'
        );
        let msg = new SpeechSynthesisUtterance(
            'cola na parede da porta pro outro gárgola não te pegar. '+
            'mira jump attack no rabo dele.'
        );
        window.speechSynthesis.speak(msg);
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
        telem.textContent = (
            'nao fica atras dela, espera o cuspe longo ou ataca '+
            'no cuspe rapido se ela rodar'
        );
        let msg = new SpeechSynthesisUtterance(
            'não fica atrás dela, espera o cuspe longo ou ataca '+
            'no cuspe rápido se ela rodar.'
        );
        window.speechSynthesis.speak(msg);
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
        telem.textContent = (
            'depois q ele jogar o braço soltando foguinho corre '+
            'pro fog gate e espera no meio dele, qnd ele atacar rola por via das duvidas, '+
            'ai ataca ele até ele cair no buraco'
        );
        let msg = new SpeechSynthesisUtterance(
            'depois que ele jogar o braço soltando foguinho corre '+
            'pro fog gate e espera no meio dele, quando ele atacar rola por via das duvidas, '+
            'aí ataca ele até ele cair no buraco.'
        );
        window.speechSynthesis.speak(msg);
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
        telem.textContent = (
            'tomar distancia e correr na direção dele pra triggerar '+
            'ataque com backstep, acertar no aquiles'
        );
        let msg = new SpeechSynthesisUtterance(
            'tomar distância e correr na direção dele pra triguerar '+
            'ataque com backstep, acertar no tendão de aquiles.'
        );
        window.speechSynthesis.speak(msg);
    } else {
        div.innerHTML = '';
    }   
}

// ornstein and smough
function onstips(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let telem = document.createElement('p');
        div.appendChild(telem);
        telem.textContent = (
            'matar ornstein primeiro. deixe o smough sempre atrás da pilastra, '+
            'só atacar o O qnd for absolutamente safe: dps do combo de 3 ataques, '+
            'depois do dash atacando (NAO CONFUNDIR COM O PULO). smough sozinho fácil, '+
            'prender ele num pilar e aguardar jump attack. '
        );
        let msg = new SpeechSynthesisUtterance(
            'mate ornstein primeiro. deixe o smough sempre atrás da pilastra, '+
            'só ataque o ornstein quando for absolutamente safe: depois do combo de 3 ataques ou '+
            'depois do dash atacando. a luta contra o smough sozinho é fácil, '+
            'prenda ele num pilar e aguarde jump attack. '
        );
        window.speechSynthesis.speak(msg);
    } else {
        div.innerHTML = '';
    }   
}

// sif
function siftips(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let telem = document.createElement('p');
        div.appendChild(telem);
        telem.textContent = (
            'ficar longe na frente dele pra baitar ataque da espada, '+
            'cuidado com o jump attack dele, atacar qnd ele ficarem duas patas. '
        );
        let msg = new SpeechSynthesisUtterance(
            'fique longe na frente dele pra beitar ataque da espada, '+
            'cuidado com o jump attack dele. ataque quando ele ficar em duas patas. '
        );
        window.speechSynthesis.speak(msg);
    } else {
        div.innerHTML = '';
    }   
}

// pinwheel
function pwbtips(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let telem = document.createElement('p');
        div.appendChild(telem);
        telem.textContent = (
            'luta fácil, equipa o anel estrela, afoba no início e fica cauteloso depois. '+
            'pode usar weapon switch pra n levar stagger qnd cair. '
        );
        let msg = new SpeechSynthesisUtterance(
            'luta fácil, equipa o anel estrela, afoba no início e fica cauteloso depois. '+
            'pode usar troca de arma pra não levar stagger qnd cair. '
        );
        window.speechSynthesis.speak(msg);
    } else {
        div.innerHTML = '';
    }   
}

// nito
function nitotips(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let telem = document.createElement('p');
        div.appendChild(telem);
        telem.textContent = (
            'equipe o anel soneca e o vape, esteja com a alabarda e pule no buraco. '+
            'PRESTE MUITA ATENÇÃO, QUANDO ELE LEVANTA A ESPADA ELE VAI USAR A BANANA, '+
            'ESQUIVE IMEDIATAMENTE AO DESCER DA ESPADA. evite se aproximar muito para não '+
            'chamar os esqueletos. puna todos os ataques. quando ele '+
            'descer em posição fetal CORRA VAI EXPLODIR. '
        );
        let msg = new SpeechSynthesisUtterance(
            'equipe o anel soneca e o vêipe, esteja com a alabarda e pule no buraco. '+
            'PRESTE MUITA ATENÇÃO, QUANDO ELE LEVANTA A ESPADA ELE VAI USAR A BANANA, '+
            'ESQUIVE IMEDIATAMENTE AO DESCER DA ESPADA. evite se aproximar muito para não '+
            'chamar os esqueletos. puna todos os ataques. quando ele '+
            'descer em posição fetal CORRA VAI EXPLODIR. '
        );
        window.speechSynthesis.speak(msg);
    } else {
        div.innerHTML = '';
    }   
}

// 4 kings
function kingstips(eID) {
    let div = document.getElementById(eID);
    if (div.innerHTML == '') {
        let telem = document.createElement('p');
        div.appendChild(telem);
        telem.textContent = (
            'ao cair ande para frente e um pouco pra direita pra encontrar com ele. '+
            'não fique longe dele. ataque nos ataques longos e ataque mesmo depois '+
            'deles morrerem. siga na direção oposta para achar o outro rei. o último rei '+
            'não se sabe de onde vem. '
        );
        let msg = new SpeechSynthesisUtterance(
            'ao cair ande para frente e um pouco pra direita pra encontrar com ele. '+
            'não fique longe dele. ataque nos ataques longos e ataque mesmo depois '+
            'deles morrerem para dano extra. siga na direção oposta para achar o outro rei. o último rei '+
            'não se sabe de onde vem. '
        );
        window.speechSynthesis.speak(msg);
    } else {
        div.innerHTML = '';
    }   
}