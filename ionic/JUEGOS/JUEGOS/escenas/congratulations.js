import {RestartButton} from '../componentes/restart-button'

export class Congratulations extends Phaser.Scene {
    
    constructor() {
        super({ key: 'congratulations' });
        this.restartButton = new RestartButton(this);

    }

    preload() {
        this.load.image('congratulations', 'images/congratulations.png');
        //Precargamos el componente restartbutton:
        this.restartButton.preload();
    }

    create() {
        this.add.image(410,250, 'background'); //No necesita precarga, ya estaba precargada en la escena game.js
        this.restartButton.create();
        this.congratsImage = this.add.image(400,90, 'congratulations');
    }
        
}