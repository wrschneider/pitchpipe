$(document).ready(function() {
   var AudioContext = window.AudioContext || window.webkitAudioContext;
   var audioContext = new AudioContext();
   var frequencies = {
    f_low: 349.23,
    f_sharp: 369.99,
    g: 392.00,
    g_sharp: 415.30,
    a: 440.00,
    a_sharp: 466.16,
    b: 493.88,
    c: 523.25,
    c_sharp: 554.37,
    d: 587.33,
    d_sharp: 622.25,
    e: 659.25,
    f_high: 698.46};

   var currOscillator;

   var playNote = function playNote(freq, duration, waveform) {
     if (currOscillator) {
       currOscillator.stop(0);
     }
     var osc = audioContext.createOscillator();
     osc.frequency.value = freq;
     osc.type = waveform;
     osc.connect(audioContext.destination);
     osc.start(0);
     setTimeout(function() {
       osc.stop(0);
       currOscillator = undefined;
     }, duration);
     currOscillator = osc;
   }

   $("button.noteButton").click(function() {
     var noteId = $(this).data('noteId');
     var duration = $("select#duration").val();
     var baselineFreq = $('select[name="baselineFreq"]').val();
     var waveform = $('select[name="waveform"]').val();
     playNote(frequencies[noteId] * baselineFreq/440, duration * 1000, waveform);
   })
});
