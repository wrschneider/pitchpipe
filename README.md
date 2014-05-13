pitchpipe
=========

This is a chromatic pitch pipe using HTML5 AudioContext.  I started this as an experiment to learn about AudioContext to generate musical tones, the same way I did with an IBM PC speaker a few decades ago.  The ocatve goes from F to F to match the range of the pipe that barbershop groups typically use.

To use it, clone or download as a ZIP and then point your browser at pitchpipe.html (no server required.)

Alternatively, you can see an HTML preview of the master directly at http://goo.gl/LUch1p

I tested this with Chrome, and Safari on an iPhone.

If you want to tweak the range, you can calculate the frequency for whatever note you want with `baseline * Math.pow(2^(i/12))` where `i` is the number of half-steps (positive or negative) from the `baseline` frequency (typically A=440) assuming equal tempering.
