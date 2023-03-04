function throwDice(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}
let turn = 1
let counter
let enemyP = 0
let enemyH = 0
let output = ''
let playerHealth = 30
let playerHealthMax = 30
let playerPoints = 'player_points'
let playerHealthBar = 'player_bar'
let lock = false

function opponent(
    name,
    health,
    maxHealth,
    pointsId,
    healthbarId,
    hardAttackDamage,
    hardAttackDice,
    weakAttackDamage,
    weakAttackDice
) {
    this.name = name
    this.health = health
    this.maxHealth = maxHealth
    this.pointsId = pointsId
    this.healthbarId = healthbarId
    this.attack = async function() {
        let x = throwDice(1, 10)
        let attackMessage = name + ' attempt to attack...'
        logText(attackMessage)
        await sleep(1000)
        if (x >= hardAttackDice) {
            damageTaken('attacke', 'enemyBox')
            playerHealth = playerHealth - hardAttackDamage
            healthBarUpdate(
                playerHealth,
                playerHealthMax,
                playerPoints,
                playerHealthBar
            )
            // logText('The enemy waves his spear at you');
            let damageText =
                '⚔️ You take ' + hardAttackDamage + ' points of critical damage'
            logText(damageText, 'damage')
            damageTaken('damages', 'playerBox')
        } else if (x > weakAttackDice && x < hardAttackDice) {
            damageTaken('attacke', 'enemyBox')
            playerHealth = playerHealth - weakAttackDamage
            healthBarUpdate(
                playerHealth,
                playerHealthMax,
                playerPoints,
                playerHealthBar
            )
            // logText('The enemy charges at you with a spear');
            let damageText = '⚔️ You take ' + weakAttackDamage + ' points of damage'
            logText(damageText, 'damage')
            damageTaken('damages', 'playerBox')
        } else {
            logText('💫 The opponent stumbles over his own feet', 'miss')
            damageTaken('attacke', 'enemyBox')
            damageTaken('playermiss', 'playerBox')
        }
    }
}

//Enemies
let goblin = new opponent("👾 Goblin Warrior", 12, 12, "enemy_points", "enemy_bar", 4, 8, 2, 3),
playerAttacks = [
    ["Shield Bash", 2, 3, "🛡️ You are trying to bash the opponent away with your shield ...", "💫 The enemy dodges your attack ..."],
    ["Mace Attack", 6, 6, "🔨 You are trying hit the enemy with a huge mace ...", "💫 The enemy dodges your attack ..."],
    ["Magic Attack", 1, 4, "🌀 You are trying to cast a spell on your opponent ...", "💫 The enemy dodges your attack ..."]
];

const init = () => {
    healthBarUpdate(
        goblin.health,
        goblin.maxHealth,
        goblin.pointsId,
        goblin.healthbarId
    )
    healthBarUpdate(
        playerHealth,
        playerHealthMax,
        playerPoints,
        playerHealthBar
    )
    nameUpdate(goblin.name, 'enemyName')
    turnCounterUpdate(turn)
}

function nameUpdate(name, headerId) {
    console.log(`Id: ${headerId} / name: ${name}`)
}

async function damageTaken(animationClass, targetId) {
    await sleep(300)
    console.log(`DamageTaken | Id: ${targetId} / animation: ${animationClass}`)
}

function lockActionButtons(condition) {
    lock = true
}

function turnCounterUpdate(turn) {
    counter = '⌛ Turn ' + turn
    logText(counter, 'end')
}

function healthBarUpdate(
    objectHealth,
    objectHealthMax,
    pointsClass,
    healthBar
) {
    let x = (objectHealth / objectHealthMax) * 100
    enemyH = x
    enemyP = x + '%'
    console.log(`Health | healthBar: ${healthBar} / pointsClass: ${pointsClass} / val: ${x}%`)
}

function logText(string, objectClass) {
    console.log(`logText | msg: ${string} / objClass: ${objectClass}`)
    output = output + string
}

function resetHealth() {
    turn = 0
    logText('-------------------')
    logText('RESET')
    logText('-------------------')
    goblin.health = goblin.maxHealth
    healthBarUpdate(
        goblin.health,
        goblin.maxHealth,
        goblin.pointsId,
        goblin.healthbarId
    )
    playerHealth = playerHealthMax
    healthBarUpdate(
        playerHealth,
        playerHealthMax,
        playerPoints,
        playerHealthBar
    )
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

async function weaponAttack(
    attackDescription,
    successDice,
    damage,
    missDescription
) {
    lockActionButtons(true)
    turn = turn + 1
    let x = throwDice(1, 10)
    if (goblin.health > 0) {
        logText(attackDescription)
        await sleep(1000)
        damageTaken('swing', 'playerBox')
        if (x > successDice) {
            goblin.health = goblin.health - damage
            damageTaken('damages', 'enemyBox')
            healthBarUpdate(
                goblin.health,
                goblin.maxHealth,
                goblin.pointsId,
                goblin.healthbarId
            )
            damagedeal =
                '⚔️ You successfully deal ' +
                damage +
                ' points of damage to the opponent'
            logText(damagedeal, 'success')
        } else {
            logText(missDescription, 'miss')
            damageTaken('enemymiss', 'enemyBox')
        }
        await sleep(1000)
        if (goblin.health > 0) {
            goblin.attack()
        } else {
            logText('☠️ Creatura is dead', 'damage')
        }
        await sleep(2000)
        turnCounterUpdate(turn)
        lockActionButtons(false)
    } else {
        logText('☠️ Creatura is dead', 'damage')
        lockActionButtons(false)
    }
}