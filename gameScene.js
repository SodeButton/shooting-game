"use strict";

let nowScene;

class GameScene extends Phaser.Scene {
	constructor() {
		super({ key: "gameScene" });
	}

	create() {
		nowScene = this;

		this.keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
		this.keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
		this.keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
		this.keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
		this.keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
		this.keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);

		this.fc = 0;
		this.fade = new Fade(this, 1);

	}

	update(time, delta) {
		nowScene = this;
		if (!this.fade.isComplete) {
			return;
		}

		if (this.fc % 120 === 0) {

		}

		if (Phaser.Input.Keyboard.JustDown(this.keyLeft)) {
		}

		let pointer = this.input.activePointer;
		if (pointer.isDown) {
			console.log("hogehoge");
		}

		this.scene.systems.displayList.removeAll();
		this.fc++;
	}
}