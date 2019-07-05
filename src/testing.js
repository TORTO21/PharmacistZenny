import Pill from './assets/pill'


const canvas = document.getElementById('zenny')
const context = canvas.getContext('2d')

const scaleUp = 20
const size = 1
context.scale(scaleUp, scaleUp)

const colors = ['red','yellow','deepskyblue'] //temp


const pill1 = new Pill(context, { x: 0 * size, y: 1 * size }, colors, size)
const pill2 = new Pill(context, { x: 0 * size, y: 3 * size }, colors, size)
const pill3 = new Pill(context, { x: 0 * size, y: 4 * size }, colors, size)

pill1.draw()
pill2.draw()
pill3.draw()


setTimeout(() => {
  pill1.rotate(1)
  pill1.draw()
  setTimeout(() => {
    pill1.rotate(1)
    pill1.draw()
    setTimeout(() => {
      pill1.rotate(1)
      pill1.draw()
      setTimeout(() => {
        pill1.rotate(1)
        pill1.draw()
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000)
// pill1.rotate(1)
// setTimeout(() => pill1.draw(), 2000)
// pill1.rotate(1)
// setTimeout(() => pill1.draw(), 1000)
// pill1.rotate(1)
// setTimeout(() => pill1.draw(), 1000)