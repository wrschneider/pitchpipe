$(document).ready(function() {
   var AudioContext = window.AudioContext || window.webkitAudioContext;
   var audioContext = new AudioContext();
   var frequencies = [349.23, 369.99, 392.00, 415.30, 440.00, 466.16, 493.88, 523.25, 554.37, 587.33, 622.25, 659.25, 698.46];
   var currOscillator;
   
   var playNote = function playNote(freq, duration) {
	 if (currOscillator) {
	   currOscillator.noteOff(0);
	 }
     var osc = audioContext.createOscillator();
	 osc.frequency.value = freq;
	 osc.type = 1;
	 osc.connect(audioContext.destination);
	 osc.noteOn(0);
	 setTimeout(function() { osc.noteOff(0); }, duration);
	 currOscillator = osc;
   }
   
   $("button.noteButton").click(function() {
     var noteId = $(this).data('buttonIndex');
	 var duration = $("select#duration").val();
	 playNote(frequencies[noteId], duration * 1000);
   })
});
