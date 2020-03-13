const Tone = require('tone')
const Meta = require('metaesquema-util')

let waveformUI = Meta.Tone.ui.waveform({
  canvas: document.querySelector('#waveform-canvas'),
  canvasWidth: window.innerWidth,
  canvasHeight: window.innerHeight,

  size: 512,

  render: {
    // fillStyle: 'black',
    strokeStyle: 'white',
  },
})

let synth = new Tone.Synth()
synth.fan(Tone.Master, waveformUI.audioNode)


exports.conga = new Tone.MembraneSynth({
	'pitchDecay': 0.008,
	'octaves': 2,
	'envelope': {
		'attack': 0.0006,
		'decay': 0.5,
		'sustain': 0
	}
})
.toMaster()
// .fan(Tone.Master, waveformUI.audioNode)

exports.chord = new Tone.PluckSynth({
	attackNoise: 2,
	dampening: 4000,
	resonance: 0.95
})
.fan(Tone.Master, waveformUI.audioNode)
// .toMaster()

exports.chords = [
	{
		attackNoise: 1,
		dampening: 4000,
		resonance: 0.95
	},
	{
		attackNoise: 1,
		dampening: 4000,
		resonance: 1.05
	},
	{
		attackNoise: 1,
		dampening: 4000,
		resonance: 1.15
	},
	{
		attackNoise: 1,
		dampening: 4000,
		resonance: 1.25
	},
]
.map(options => {
	return new Tone.PluckSynth(options).fan(Tone.Master, waveformUI.audioNode)
})
