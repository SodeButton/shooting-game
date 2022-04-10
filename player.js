class Player extends Phaser.GameObjects.Image {
	constructor(scene, x, y) {
		super(scene, x, y, "player", 0);

		this.scene = scene;
		this.scene.add.existing(this);

		this.x = x;
		this.y = y;
		this.texture = "player";

		this.speed = 4;
	}

	update(...args) {
		super.update(...args);
	}
}