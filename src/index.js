function createShakeImages(){
	var img = scene.addImage({filename: niv.__img(), movable: true});
	img.resize(400, 300);

	var sel = {
		item: null,
		x: 0,
		y: 0
	}

	let dir = "up";
	const shakeTimer = scene.createTimer(20, () => {
		if (dir === "up") {
			img.move(0, -3);
			dir = "down";
		} else if (dir === "down") {
			img.move(0, 3);
			dir = "left";
		} else if (dir === "left") {
			img.move(-3, 0);
			dir = "right";
		} else if (dir === "right") {
			img.move(3, 0);
			dir = "up";
		}
	});

	img.setMouseCallbacks({
		mousePress: (x, y) => {
			sel.item = img;
			sel.x = x;
			sel.y = y;
			shakeTimer.start();
		},
		mouseRelease: () => {
			sel.item = null;
			shakeTimer.stop();
		}
	});

	scene.installMouseMoveHandler("dragging", (x, y) => {
		if (sel.item)
			sel.item.setPos(x - sel.x, y - sel.y);
	});
	return img;
}

module.exports = {
	createShakeImages
}
