class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings
        this.sKey = null;
        this.fKey = null;
        this.aKey = null;
        this.dKey = null;

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.rightArmX = this.bodyX + 85;
        this.rightArmY = this.bodyY + 60;

        this.leftArmX = this.bodyX - 85;
        this.leftArmY = this.bodyY + 60;
        
        this.rightLegX = this.bodyX + 40;
        this.rightLegY = this.bodyY + 160;

        this.leftLegX = this.bodyX - 40;
        this.leftLegY = this.bodyY + 160;

        this.rightEyeX = this.bodyX + 40;
        this.rightEyeY = this.bodyY - 20;

        this.leftEyeX = this.bodyX - 40;
        this.leftEyeY = this.bodyY - 20;

        this.middleEyeX = this.bodyX;
        this.middleEyeY = this.bodyY - 20;

        this.smileX = this.bodyX;
        this.smileY = this.bodyY + 80;

        this.fangsX = this.bodyX;
        this.fangsY = this.bodyY + 90;

        this.noseX = this.bodyX;
        this.noseY = this.bodyY + 40;

        this.rightHornX = this.bodyX + 55;
        this.rightHornY = this.bodyY - 104;

        this.leftHornX = this.bodyX - 55;
        this.leftHornY = this.bodyY - 104;

        this.antennaX = this.bodyX + 10;
        this.antennaY = this.bodyY - 140;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability
        this.sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_blueA.png");
        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_blueA.png");
        my.sprite.leftArm.flipX = true;

        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_whiteB.png");
        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_whiteB.png");
        my.sprite.leftLeg.flipX = true;

        my.sprite.rightHorn = this.add.sprite(this.rightHornX, this.rightHornY, "monsterParts", "detail_blue_horn_large.png");
        my.sprite.leftHorn = this.add.sprite(this.leftHornX, this.leftHornY, "monsterParts", "detail_blue_horn_large.png");
        my.sprite.leftHorn.flipX = true;

        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_whiteE.png");

        my.sprite.rightEye = this.add.sprite(this.rightEyeX, this.rightEyeY, "monsterParts", "eye_yellow.png");
        my.sprite.leftEye = this.add.sprite(this.leftEyeX, this.leftEyeY, "monsterParts", "eye_yellow.png");
        my.sprite.middleEye = this.add.sprite(this.middleEyeX, this.middleEyeY, "monsterParts", "eye_yellow.png");

        my.sprite.smile = this.add.sprite(this.smileX, this.smileY, "monsterParts", "mouth_closed_happy.png");
        my.sprite.fangs = this.add.sprite(this.fangsX, this.fangsY, "monsterParts", "mouthJ.png");
        my.sprite.fangs.visible = false;

        my.sprite.nose = this.add.sprite(this.noseX, this.noseY, "monsterParts", "nose_red.png");

        my.sprite.antenna = this.add.sprite(this.antennaX, this.antennaY, "monsterParts", "detail_red_antenna_large.png");

    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        if(Phaser.Input.Keyboard.JustDown(this.sKey)) {
            my.sprite.smile.visible = true;
            my.sprite.fangs.visible = false;
        }

        if(Phaser.Input.Keyboard.JustDown(this.fKey)) {
            my.sprite.smile.visible = false;
            my.sprite.fangs.visible = true;
        }

        if(this.aKey.isDown) {
            for (let sprite in my.sprite) {
                my.sprite[sprite].x -= 2;
            }
        }

        if(this.dKey.isDown) {
            for (let sprite in my.sprite) {
                my.sprite[sprite].x += 2;
            }
        }
    }

}