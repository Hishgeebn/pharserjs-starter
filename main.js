const config = {
    type: Phaser.AUTO,
    width: 800, //urgun
    height: 600, // undur
    scene: {
        // door bga function uud
        preload: preload,
        create: create,
    },
}

const game = new Phaser.Game(config)

function preload() {
    // map.json, bg.png g ajiluulah
    this.load.tilemapTiledJSON("mapkey", "./map.json")
    this.load.image("tiles", "assets/bg.png")
}

function create() {
    // map.json oos map uusgeh
    const map = this.make.tilemap({ key: "mapkey" })

    // map.json -> tilesets -> name == MyTileset baih yostoi
    const tileset = map.addTilesetImage("MyTileset", "tiles")

    // map.json -> layers -> name == background_layer_1
    const layer = map.createLayer("background_layer_1", tileset, 0, 0)
}
