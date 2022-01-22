function smt(eID) {
    let elem = document.createElement('h1');
    let div = document.getElementById(eID);
    div.innerHTML = null;
    div.appendChild(elem);
    const all_lanes = ['mid', 'carry', 'supp', 'jungler', 'solo'];
    var random = Math.floor(Math.random() * all_lanes.length);
    const lane = all_lanes[random]
    if (lane === 'mid') {
        const mid_gods = ['agni', 'ahpuch', 'anubis', 'afrodite', 'baba yaga', 'barão samedi', 'change', 'cronos', 'discordia', 'isis', 'freya', 'hades', 'hebo', 'hela', 'hera', 'jano', 'kukulkan', 'merlin', 'morgana', 'nox', 'nuwa', 'olorun', 'persefone', 'poseidon', 'ra', 'raijin', 'cila', 'sunna', 'morrigan', 'thoth', 'tiamat', 'vulcano', 'zeus', 'zhongkui', 'quiron', 'medusa', 'neith', 'muzancab', 'baco'];
        random = Math.floor(Math.random() * mid_gods.length);
        const god = mid_gods[random];
    } else if (lane === 'carry') {
        const carry_gods = ['muzancab', 'onuris', 'apolo', 'artemis', 'cernunos', 'caribdis', 'chernobog', 'quiron', 'cupido', 'danzaburou', 'hachiman', 'hendallr', 'hou yi', 'izanami', 'jing wei', 'medusa', 'neith', 'rama', 'skadi', 'uller', 'xisbalanque', 'freya', 'cronos', 'olorun', 'sunna', 'set', 'poseidon'];
        random = Math.floor(Math.random() * carry_gods.length);
        const god = carry_gods[random];
    } else if (lane === 'supp') {
        const supp_gods = ['atlas', 'ares', 'artio', 'atena', 'baco', 'cabrakan', 'cerberos', 'cthulhu', 'fafnir', 'ganesha', 'geb', 'jormungadr', 'khepri', 'kumbhakarna', 'kuzenbo', 'sobek', 'silvano', 'terra', 'xing tian', 'iemanja', 'ymir', 'aquiles', 'belona', 'chac', 'guan yu', 'hercules', 'horos', 'mulan', 'nike', 'odin', 'tyr', 'isis', 'nox', 'fenrir', 'serqet', 'samedi', 'vamana', 'ratatoskr'];
        random = Math.floor(Math.random() * supp_gods.length);
        const god = supp_gods[random];
    } else if (lane === 'jungler') {
        const jungler_gods = ['aracne', 'awilix', 'bakasura', 'bastet', 'camazotz', 'cliodhna', 'da ji', 'fenrir', 'hun batz', 'kali', 'loki', 'mercurio', 'ne zha', 'nemesis', 'ratatoskr', 'pele', 'ravana', 'serqet', 'set', 'suzano', 'thanatos', 'thor', 'tsukuyomi', 'ao kuang', 'freya', 'he bo', 'poseidon', 'morrigan', 'aquiles', 'belona', 'erlang shen', 'gilgamesh', 'guan yu', 'hercules', 'mulan', 'nike', 'odin', 'osiris', 'sun wukong', 'tyr', 'onuris', 'apolo', 'ullr', 'atena', 'baco', 'cabrakan', 'ymir', 'chernobog', 'anubis', 'vamana', 'geb']
        random = Math.floor(Math.random() * jungler_gods.length);
        const god = jungler_gods[random];
    } else if (lane === 'solo') {
        const solo_gods = ['agni', 'ahpuch', 'anubis', 'afrodite', 'afrodite', 'baba yaga', 'barão samedi', 'change', 'change', 'change', 'cronos', 'discordia', 'isis', 'freya', 'hades', 'hades', 'hades', 'hebo', 'hela', 'hela', 'hera', 'jano', 'kukulkan', 'merlin', 'morgana', 'nox', 'nuwa', 'olorun', 'persefone', 'poseidon', 'ra', 'raijin', 'cila', 'sunna', 'morrigan', 'thoth', 'tiamat', 'vulcano', 'zeus', 'zhongkui', 'zhongkui', 'aracne', 'awilix', 'bakasura', 'bastet', 'camazotz', 'camazotz', 'camazotz', 'cliodhna', 'da ji', 'fenrir', 'hun batz', 'kali', 'loki', 'mercurio', 'ne zha', 'nemesis', 'ratatoskr', 'ratatoskr', 'pele', 'ravana', 'serqet', 'set', 'set', 'set', 'suzano', 'thanatos', 'thor', 'tsukuyomi', 'ao kuang', 'muzancab', 'onuris', 'apolo', 'artemis', 'cernunos', 'caribdis', 'chernobog', 'quiron', 'cupido', 'danzaburou', 'hachiman', 'hendallr', 'hou yi', 'izanami', 'jing wei', 'medusa', 'neith', 'rama', 'skadi', 'uller', 'xisbalanque', 'atlas', 'ares', 'artio', 'artio', 'artio', 'atena', 'baco', 'cabrakan', 'cabrakan', 'cabrakan', 'cerberos', 'cerberos', 'cerberos', 'cthulhu', 'cthulhu', 'cthulhu', 'fafnir', 'ganesha', 'geb', 'jormungadr', 'khepri', 'kumbhakarna', 'kuzenbo', 'sobek', 'sobek', 'sobek', 'silvano', 'terra', 'xing tian', 'iemanja', 'ymir', 'aracne', 'awilix', 'bakasura', 'bastet', 'camazotz', 'cliodhna', 'da ji', 'fenrir', 'hun batz', 'kali', 'loki', 'mercurio', 'ne zha', 'nemesis', 'ratatoskr', 'pele', 'ravana', 'serqet', 'set', 'suzano', 'thanatos', 'thor', 'tsukuyomi', 'aquiles', 'amaterasu', 'belona', 'chac', 'kuchulain', 'gilgamesh', 'guan yu', 'hercules', 'horus', 'rei artur', 'erlang shen', 'mulan', 'nike', 'odin', 'osiris', 'sun wukong', 'tyr', 'vamana', 'aquiles', 'amaterasu', 'belona', 'chac', 'kuchulain', 'gilgamesh', 'guan yu', 'hercules', 'rei artur', 'mulan', 'nike', 'odin', 'osiris', 'sun wukong', 'tyr', 'vamana', , 'aquiles', 'amaterasu', 'belona', 'chac', 'kuchulain', 'gilgamesh', 'guan yu', 'hercules', 'rei artur', 'mulan', 'nike', 'odin', 'osiris', 'sun wukong', 'tyr', 'vamana']
        random = Math.floor(Math.random() * solo_gods.length);
        const god = solo_gods[random];
    }
    elem.innerHTML = lane+': '+god;
}