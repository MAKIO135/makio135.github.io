---
layout: post
title: SensorShield Library
image: SensorShield.jpg
categories: [ big, arduino ]
---
<p>Easilly attach and communicate sensors value in JSON.<p>

<img class="large" src="/images/previews/SensorShield.jpg">

<h3>Example:</h3>

<img class="large" src="/images/SensorShieldLib.png">

<code><pre>
#include <sensorShieldLib.h>

SensorShield board;

void setup()
{
	board.init(); // initialises and starts Serial

	board.addSensor( "btn1", 2 );
	board.addSensor( "btn2", 8, INPUT_PULLUP );
	board.addSensor( "pot1", A0 );
}

void loop()
{
	board.update();
}
</pre></code>

<p>On <em>board.update();</em>, the lib checks sensors values and if any changed from previous <em>loop</em>, outputs JSON on Serial 9600 bds: <em>{"btn1":1,"btn2":0,"pot1":768}</em></p>

<p>https://github.com/MAKIO135/sensorShieldLib</p>
