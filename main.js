let x = 1000 //x dimension
let y = x //y dimension
let xCoord = 0 //x coordinate
let yCoord = 0 //y coordinate
let xSentinel = 0
let xFill = 10
let yFill = xFill
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
let colorRarity = ['White','Green','Blue','Yellow','Orange','Red','Purple','Maroon','Aqua','Gold']
const imgName = Math.round(Math.random()*100000)
const randomNumber = require("random-number-csprng")
const { createCanvas, loadImage } = require('canvas')
const { Console } = require('console')
const pixelCount = x*y
const canvas = createCanvas(x, y)
const ctx = canvas.getContext('2d')
const fs = require('fs')

rarityGen = async() =>{
	rare0 = Math.round(Math.random()*10)
	rare1 = Math.round(Math.random()*10)
	rare2 = Math.round(Math.random()*10)
	rare3 = Math.round(Math.random()*10)
	rare4 = Math.round(Math.random()*10)
	rare5 = Math.round(Math.random()*10)
	rare6 = Math.round(Math.random()*10)
	rare7 = Math.round(Math.random()*10)
	rare8 = Math.round(Math.random()*10)
	rare9 = Math.round(Math.random()*10)
	rareSum = rare0+rare1+rare2+rare3+rare4+rare5+rare6+rare7+rare8+rare9
	rareSumTier = Math.round(rareSum/10)
	console.log(rareSum)
	console.log(rareSumTier)
	console.log(rare0," ",rare1," ",rare2," ",rare3," ",rare4," ",rare5," ",rare6," ",rare7," ",rare8," ",rare9)


	ctx.fillStyle = colorRarity[rareSumTier]
	ctx.fillRect(0,0,x,y)
	ctx.fill()
}
imageGen = async() =>{
	for (xCoord; yCoord<x; xCoord+=xFill){
		ctx.fillStyle = await color[Math.round(Math.random()*color.length)]
		//console.log(await ctx.fillStyle," ",xCoord," ",yCoord," ",xSentinel)
		await ctx.fillRect(xCoord,yCoord,xFill,yFill)
		if (xSentinel%x === 0){
			//console.log(await ctx.fillStyle," x",xCoord," y",yCoord," xS",xSentinel)
			xCoord = 0
			xSentinel = 0
			yCoord+=yFill
			//console.log(yCoord," ",xCoord)
		}
		xSentinel++
	}
	const buffer = canvas.toBuffer("image/png");
	fs.writeFileSync('./pixelGenerator/'+imgName+'.png', buffer);
	console.log(imgName+".png saved")
}
rarityGen()
//.then(imageGen())