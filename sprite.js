/**
 * Construct a SpriteSheet.
 * @param src An Image, or an image filename to use for this sheet.
 * @param tileW Width of each tile in pixels.
 * @param tileH Height of each tile in pixels.
 * @constructor
 */
var SpriteSheet = function(img_or_src, tileW, tileH) {
	if(img_or_src instanceof Image) {
		this.img = img_or_src;
	} else {
		this.img = new Image();
		this.img.src = img_or_src;
		console.log("add w/ src");
	}
	this.tileW = tileW;
	this.tileH = tileH;
};

/**
 * Draw a specified tile of this sheet onto a canvas rendering context.
 * @param ctx Drawing context.
 * @param posX X position to draw the tile.
 * @param posY Y position to draw the tile.
 * @param tileX X position of the tile within this sheet.
 * @param tileY Y position of the tile within this sheet.
 * @param tilesX Width (in tiles) of the drawn segment.
 * @param tilesY Height (in tiles) of the drawn segment.
 */
SpriteSheet.prototype.draw = function(ctx, posX, posY, tileX, tileY, tilesX, tilesY) {
	tilesX = tilesX || 1;
	tilesY = tilesY || 1;
	ctx.drawImage(
		this.img,
		tileX * this.tileW, tileY * this.tileH, // source x, y
		tilesX * this.tileW, tilesY * this.tileH, // source width, height
		posX, posY, // dest x, y
		tilesX * this.tileW, tilesY * this.tileH // dest width, height
	);
};


/**
 * Construct a Sprite.
 * @param sheet_or_img_or_src SpriteSheet to use, or an Image or image filename.
 * @param tileX X position in the sheet (in tiles)
 * @param tileY Y position in the sheet (in tiles)
 * @param tilesX Width in tiles
 * @param tilesY Height in tiles
 * @constructor
 */
var Sprite = function(sheet_or_img_or_src, tileX, tileY, tilesX, tilesY) {
	if(sheet_or_img_or_src instanceof SpriteSheet) {
		this.sheet = sheet_or_img_or_src;
		this.tileX = tileX;
		this.tileY = tileY;
		this.tilesX = tilesX || 1;
		this.tilesY = tilesY || 1;
	} else {
		if(sheet_or_img_or_src instanceof Image) {
			this.img = sheet_or_img_or_src;
		} else {
			this.img = new Image();
			this.img.src = sheet_or_img_or_src;
		}
	}
};

/**
 * Draw this sprite onto a rendering context.
 * @param ctx
 * @param posX
 * @param posY
 */
Sprite.prototype.draw = function(ctx, posX, posY) {
	
	if(this.img) {
		ctx.drawImage(this.img, posX, posY);
	} else {
		this.sheet.draw(ctx, posX, posY, this.tileX, this.tileY, this.tilesX, this.tilesY);
	}
	
}