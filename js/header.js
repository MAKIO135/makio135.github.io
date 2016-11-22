window.addEventListener('load', function(){
    // Logo

    var size = 35,
        logo = d3.select( '#nav-logo' )
            .append( 'svg' )
            .attrs( {
                width: size,
                height: size,
                viewBox: '0 0 70 70'
            } );

    [
        'M0 0 h70 v70 h-70 v-70 M4 4 v62 h62 v-62 h-62',
        'M10 10 h10 l40 50 h-50 v-50',
        'M60 10 h-10 l-40 50 h50 v-50'
    ].forEach( ( d, i ) => {
        logo.append( 'path' )
            .attrs( {
                d,
                style: ( i ? '' : 'fill-rule: nonzero;' )
            } );
    } );

    document.querySelector('#nav-logo').addEventListener( 'click', function(){
        window.location = window.location.origin;
    } );

    document.querySelector('#nav-title').addEventListener( 'click', function(){
        window.location = window.location.origin;
    } );

    //////////////////////////////////////////
    // Captions

    var captions = [
            'Lionel Radisson',
            'Meta Designer',
            'Creative Coder',
            'Algorithm Lover',
            'Design Teacher',
            'Software Crafter',
            'Data Miner',
            'Hardware Hacker',
            'Computational Thinker'
        ],
        count = 0;

    var captionSVG = d3.select( '#top' )
        .append( 'svg' )
        .attrs( {
            width: 230,
            height: 25,
            style: 'margin: 0 20px;'
        } );

    var mask = captionSVG.append( 'defs' )
        .append( 'mask' )
        .attrs( {
            id: 'mask',
            x: 0,
            y: 0,
            width: 230,
            height: 25
        } )
        .append( 'rect' )
        .attrs( {
            x: 0,
            y: 0,
            width: 230,
            height: 25,
            fill: '#FFF'
        } );


    var caption = captionSVG.append( 'text' )
        .attrs( {
            x: 0,
            y: 17,
            fill: '#FFF',
            style: 'font-weight: 300; font-size: 22px; mask: url(#mask);'
        } )
        .text( captions[ count ] );

    var rect = captionSVG
        .append( 'rect' )
        .attrs( {
            x: 0,
            y: 0,
            width: 0,
            height: 25,
            fill: '#FFF'
        } );

    function maskTransition(){
        // rect.transition()
        //     .delay( 5000 )
        //     .duration( 200 )
        //     .attr( 'width', 230)
        //     .on( 'end', function(){
        //         count++;
        //         count = count % captions.length;
        //         caption.text( captions[ count ] );
        //
        //         rect.transition()
        //             .delay( 100 )
        //             .duration( 200 )
        //             .attrs( {
        //                 x: 230,
        //                 width: 0
        //             } )
        //             .on( 'end', function(){
        //                 rect.attr( 'x', 0 );
        //                 maskTransition();
        //             } );
        //     } );

        mask.transition()
            .delay( 5000 )
            .duration( 200 )
            .attrs( {
                x: 230,
                width: 0
            } )
            .on( 'end', function(){
                count++;
                count = count % captions.length;
                caption.text( captions[ count ] );
                mask.attr( 'x', 0 )
                mask.transition()
                    .delay( 200 )
                    .duration( 500 )
                    .attr( 'width', 230 )
                    .on( 'end', function(){
                        maskTransition();
                    } );
            } );
    }
    maskTransition();
} );
