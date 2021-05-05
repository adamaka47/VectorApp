class FigureAbstract {

	constructor(x, y, size) {

		this.setPosition(x, y)
		this.setSize(this.size)

	}

	setPosition(x, y) {
		this.x = x
		this.y = y
	}


	setSize(size) {
		this.size = size < 0 ? 0 : size 
	}

	setStrokeColor(color) {
		this.strokeColor = color
	}

	setFillColor(color) {
		this.fillColor = color
	}

	setStrokeWidth(width) {
		this.lineWidth = width
	}

	canRender() {
		return isFinite(this.x) && isFinite(this.y) && isFinite(this.size)
	}

	render(ctx) {
		throw new Error('Абстрактный класс')
	}

}

class Rect extends FigureAbstract {
	render(ctx) {

		ctx.beginPath()

		ctx.rect(-this.size / 2, -this.size / 2, this.size, this.size)

		ctx.fillStyle = this.fillColor
		ctx.fill()

		ctx.strokeStyle = this.strokeColor
		ctx.lineWidth = this.lineWidth

		ctx.stroke()


	}
}


class Circle extends FigureAbstract {
	render(ctx) {

		ctx.beginPath()

		ctx.arc(0, 0, this.size / 2, 0, 2 * Math.PI, false)

		ctx.fillStyle = this.fillColor
		ctx.fill()

		ctx.strokeStyle = this.strokeColor
		ctx.lineWidth = this.lineWidth
		ctx.stroke()

	}
}


class Triangle extends FigureAbstract {
	render(ctx) {

		ctx.beginPath()

		ctx.moveTo(0, -this.size / 2)
		ctx.lineTo(this.size / 2, this.size / 2)
		ctx.lineTo(-this.size / 2, this.size / 2)

		ctx.closePath()

		ctx.fillStyle = this.fillColor
		ctx.fill()

		ctx.strokeStyle = this.strokeColor
		ctx.lineWidth = this.lineWidth
		ctx.stroke()

	}
}


class Smile extends FigureAbstract {
	render(ctx) {

		ctx.beginPath();
	    ctx.arc(0,0,50,0,Math.PI*2,true); // Внешняя окружность
	    ctx.moveTo(-35,0);
	    ctx.arc(0,0,35,0,Math.PI,false);  // рот (по часовой стрелке)
	    ctx.moveTo(65,65);
	    ctx.arc(-20,-25,5,0,Math.PI*2,true);  // Левый глаз
	    ctx.moveTo(95,65);
	    ctx.arc(0,-25,5,0,Math.PI*2,true);  // Правый глаз
	    ctx.stroke();

	}
}




