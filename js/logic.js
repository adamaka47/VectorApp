class Logic {

	constructor(canvas) {

		this.canvas = canvas // ourcanvass
		this.frames = 0
		this.fps = 0
		this.lastFPS = 0
		this.ctx = this.canvas.getContext("2d") // даем возможность рисовать в this.ctx
		this.shapes = new Set()

		this.render() // вызываем весь наш механизм

	}


	addShape(shape) { // добавляем в Set фигуры, которые будем выводить
		this.shapes.add(shape)
	}

	setCurrentShape(shape) { // берем в руку нашу фигуру
		this.currentShape = shape
	}


	clear() { // очищает наш холст от предыдущих кадров
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
	}


	renderShape(shape) { // отвечает за отрисовку определенной фигуры

		if (shape.canRender()) {
			this.ctx.save()
			this.ctx.translate(shape.x, shape.y)
			shape.render(this.ctx) // рисуем нашу фигуру с помощью this.ctx
			this.ctx.restore()
		}

	}


	render() { // главный механизм

		requestAnimationFrame(() => {
			this.clear()

			for (const shape of this.shapes) {
				this.renderShape(shape) // отрисовываем каждые 60 раз в секунду наши все фигуры из Сета
			}

			if (this.currentShape) { // есть ли в руке что-то, если да - отрисовываем
				this.renderShape(this.currentShape)
			}

			this.render() // вызываем еще раз, тк RAF выполняется всего один раз


			// FPS подсчет
			this.frames++
			let now = performance.now()
			if (now - this.lastFPS >= 1000) {
				this.lastFPS = now
				this.fps = this.frames
				this.frames = 0
			}

			this.renderFPS()


		})

	}

	renderFPS() {
		this.ctx.save()
		this.ctx.font = '16px monospace'
		this.ctx.fillText(`Текущий ФПС ${this.fps}`, 20, 25)
		this.ctx.restore()
	}




}