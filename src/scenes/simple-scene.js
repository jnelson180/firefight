export class SimpleScene extends Phaser.Scene {
    preload() {
        this.load.image('crate', 'assets/crate.png');
    }

    create() {
        this.add.text(100, 100, 'Welcome to Firefight!', { fill: '#0f0' });
        this.add.image(100, 200, 'crate');
    }
}