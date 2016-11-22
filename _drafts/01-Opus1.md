---
layout: post
title: Opus1
image: opus1_7.jpg
categories: [ big, install, mapping, vjing ]
---
<p>Mapping and live VJing show at Transbordeur for closing night of Mirage Festival.<br>
In collaboration with Adrien Jollivet, Matias Pagès and Dolus&Dolus.</p>
<p>Photos by Tiphaine Buccino</p>

<iframe src="https://player.vimeo.com/video/61168034" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

<img src="/images/previews/opus1_7.jpg" class="large">
<img src="/images/opus1_9.jpg" class="large">
<img src="/images/opus1_5.jpg" class="large">
<img src="/images/opus1_6.jpg" class="large">
<img src="/images/opus1_8.jpg" class="large">
<img src="/images/opus1_2.jpg" class="large">

<h3>Behind the scene</h3>
___

Controler MIDI -> Server P5 -> Router + Communication OSC -> 4 Slaves P5 -> 4 Beamers

<p data-height="610" data-theme-id="dark" data-slug-hash="wWmkpV" data-default-tab="result" data-user="MAKIO135" data-embed-version="2" data-pen-title="Proto Opus1" data-preview="true" class="codepen">See the Pen <a href="http://codepen.io/MAKIO135/pen/wWmkpV/">Proto Opus1</a> by Lionel Radisson (<a href="http://codepen.io/MAKIO135">@MAKIO135</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

<p data-height="610" data-theme-id="dark" data-slug-hash="amwbvO" data-default-tab="result" data-user="MAKIO135" data-embed-version="2" data-pen-title="p5JS + DelaunayJS" data-preview="true" class="codepen">See the Pen <a href="http://codepen.io/MAKIO135/pen/amwbvO/">p5JS + DelaunayJS</a> by Lionel Radisson (<a href="http://codepen.io/MAKIO135">@MAKIO135</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

<iframe src="https://player.vimeo.com/video/73611895" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


<script>
    function resizeVideos(){
        var articleWidth = document.querySelector( '.title' ).clientWidth;

        [].forEach.call( document.querySelectorAll( 'iframe' ), function( d ){
            var w = d.getAttribute( 'width' );
            var h = d.getAttribute( 'height' );
            d.setAttribute( 'width', articleWidth );
            d.setAttribute( 'height', ~~ ( h * articleWidth / w ) );
        } );
    };

    window.addEventListener( 'load', resizeVideos );
    window.addEventListener( 'resize', resizeVideos );
</script>
