let xCoord = 0 //x coordinate
let yCoord = 0 //y coordinate
let x = Math.round(Math.random()*1000) //x dimension
let y = Math.round(Math.random()*1000) //y dimension
let xSentinel = 0
xFill = Math.round(Math.random()*100) //pixel length and width
yFill = Math.round(Math.random()*100)
let xRand = 10
let yRand = 10

const imgName = Math.round(Math.random()*100000)
const { createCanvas, loadImage } = require('canvas')
const { Console } = require('console')
const pixelCount = x*y
const canvas = createCanvas(x, y)
const ctx = canvas.getContext('2d')
const fs = require('fs')
let color = ['AliceBlue',
'Aqua',
'Aquamarine',
'Blue',
'BlueViolet',
'Brown',
'CadetBlue',
'Chartreuse',
'Chocolate',
'Coral',
'CornflowerBlue',
'Crimson',
'Cyan',
'DarkBlue',
'DarkCyan',
'DarkGoldenRod',
'DarkGreen',
'DarkMagenta',
'DarkOliveGreen',
'DarkOrange',
'DarkOrchid',
'DarkRed',
'DarkSalmon',
'DarkSeaGreen',
'DarkSlateBlue',
'DarkSlateGray',
'DarkSlateGrey',
'DarkTurquoise',
'DarkViolet',
'DeepPink',
'DeepSkyBlue',
'DodgerBlue',
'FireBrick',
'ForestGreen',
'Fuchsia',
'Gold',
'GoldenRod',
'Green',
'GreenYellow',
'HotPink',
'IndianRed',
'Indigo',
'Lavender',
'LavenderBlush',
'LawnGreen',
'LightBlue',
'LightCoral',
'LightCyan',
'LightGoldenRodYellow',
'LightGreen',
'LightPink',
'LightSalmon',
'LightSeaGreen',
'LightSkyBlue',
'Lime',
'LimeGreen',
'Linen',
'Magenta',
'Maroon',
'MediumAquaMarine',
'MediumBlue',
'MediumOrchid',
'MediumPurple',
'MediumSeaGreen',
'MediumSlateBlue',
'MediumSpringGreen',
'MediumTurquoise',
'MediumVioletRed',
'MidnightBlue',
'MintCream',
'MistyRose',
'Navy',
'Olive',
'OliveDrab',
'Orange',
'OrangeRed',
'Orchid',
'PaleGoldenRod',
'PaleGreen',
'PaleTurquoise',
'PaleVioletRed',
'PapayaWhip',
'PeachPuff',
'Peru',
'Pink',
'Plum',
'PowderBlue',
'Purple',
'RebeccaPurple',
'Red',
'RosyBrown',
'RoyalBlue',
'SaddleBrown',
'Salmon',
'SandyBrown',
'SeaGreen',
'Sienna',
'Silver',
'SkyBlue',
'SlateBlue',
'SpringGreen',
'SteelBlue',
'Teal',
'Thistle',
'Tomato',
'Turquoise',
'Violet',
'YellowGreen']
ctx.fillStyle = color[Math.round(Math.random()*color.length)]
ctx.fillRect(0,0,x,y)
ctx.fill()

imageGen = async() =>{
	for (xCoord; yCoord<=x; xCoord++){
        xFill = Math.round(Math.random()*50) //pixel length and width
        yFill = Math.round(Math.random()*50)
		ctx.fillStyle = await color[Math.round(Math.random()*color.length)]
		//console.log(await ctx.fillStyle," ",xCoord," ",yCoord," ",xSentinel)
		await ctx.fillRect(xCoord,yCoord,xFill,yFill)
		if (xSentinel%x === 0){
			xCoord=0
			yCoord+=yFill
			//console.log(yCoord," ",xCoord)
		}
		xSentinel++
	}
	const buffer = canvas.toBuffer("image/png");
	fs.writeFileSync('./insane/'+imgName+'.png',buffer);
	console.log(imgName+".png saved")
}
imageGen()
