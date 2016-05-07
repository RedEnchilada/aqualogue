Entity = function(level, x, y, z) {
	var entity = {};
	
	entity.position = { "x": x, "y": y, "z": z };
	
	// Manage animations/sprites.
	var anims = {};
	var currentAnim;
	
	entity.addSprite = function(name, sprite) {
		anims[name] = sprite;
		level.addSprite(sprite);
	}
	
	entity.currentSprite = function(name) {
		if (!name) {
			return currentAnim;
		}
		
		if (name == currentAnim) {
			return;
		}
		
		if (entity.activeSprite) {
			entity.activeSprite.visible = false;
			if (entity.activeSprite.stop) {
				entity.activeSprite.stop();
			}
		}
		
		entity.activeSprite = anims[name];
		
		entity.activeSprite.visible = true;
		if (entity.activeSprite.play) {
			entity.activeSprite.gotoAndPlay(0);
		}
			
		currentAnim = name;
	}
	
	return entity;
};