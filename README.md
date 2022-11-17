# orbit
Venus and Earth orbit pattern 

https://youtu.be/vU-g6mC1F0g

Inspired by the #Numberphile video showing Matt Henderson's work.  

I coded up a simple version using #javaScript #p5js plotting the Earth and Venus moving around circles at different speeds corresponding to the time it takes them to go around the sun, Venus 225 Earth days, Earth 365 days. A line connects them and then I plot a yellow point at the midsection of that line, using lerp(). What I came to understand is that this process can be used to create patterns for any two things that happen at different rates. For example you could plot the number of steps you get each day with a friends and you may get some interesting patterns.  for instance if you have the ratio of 360 to 225 you will just get three petals instead of 5. #createivecoding #venus #earth #space #orbit #math

p5js version live:

https://greggelong.github.io/orbit


Processing version:

in folder

## November 2022

Revising this topic and writing code from scratch as a distraction from the mess on modern day Earth.

Imagine the Earth is at the center. The Sun turns around it in 365 days. The Venus celestial circle travels faster. One Venus year being 225 days, and creating the yellow pentagram flower in 8 years. The Mars celestial circle creates its 8 loop pattern cycle in just under 16 years. A mars year is almost twice an Earth year at 687 days. Of course I guess the concept of a year on Mars or Venus would be meaningless in a geocentric model.

## venus orbit fourier
Sketched up another model of the Venus orbit pattern, in p5js. This model uses additive motion of two circles, called epicycles. It is like the Fourier series. In this model we imagine that the Earth is in the center the bigger circle is the sun's path around the Earth in a year. The smaller circle is the path of Venus around the sun. This model is Tycho Brahe 16th century model which combines geocentric and heliocentric models. It also does describe what we actually see from our vantage point stuck on Earth. #astronomy #p5js #creativecoding #math #processing #venus Code at https://github.com/greggelong/orbit
