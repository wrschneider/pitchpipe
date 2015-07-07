HTML5 Chromatic Pitch Pipe
=========

This is a chromatic pitch pipe using HTML5 AudioContext.  I started this as a personal experiment to learn about AudioContext to generate musical tones.  

To use it, clone or download as a ZIP and then point your browser at pitchpipe.html (no server required.)

Alternatively, you can see an HTML preview of the master directly at https://rawgit.com/wrschneider/pitchpipe/master/pitchpipe.html

I tested this with Chrome, and Safari on my iPhone 5c.  You *may* need to turn the ringer on.

The provided ocatve goes from F to F to match the range of the pipe that barbershop groups typically use.
If you want to tweak the range, you can calculate the frequency for whatever note you want with `baseline * Math.pow(2^(i/12))` where `i` is the number of half-steps (positive or negative) from the `baseline` frequency (typically A=440) assuming equal tempering.
