window.addEventListener( 'load', function(){
    console.clear();

    var s = [
        '███╗   ███╗ █████╗ ██╗  ██╗██╗ ██████╗  ██╗██████╗ ███████╗ ██╗ ███████╗ ',
        '████╗ ████║██╔══██╗██║ ██╔╝██║██╔═══██╗███║╚════██╗██╔════╝ ██║ ██╔════╝ ',
        '██╔████╔██║███████║█████╔╝ ██║██║   ██║╚██║ █████╔╝███████╗ ╚═╝ ███████╗ ',
        '██║╚██╔╝██║██╔══██║██╔═██╗ ██║██║   ██║ ██║ ╚═══██╗╚════██║     ╚════██║ ',
        '██║ ╚═╝ ██║██║  ██║██║  ██╗██║╚██████╔╝ ██║██████╔╝███████║     ███████║ ',
        '╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝ ╚═════╝  ╚═╝╚═════╝ ╚══════╝     ╚══════╝ ',
        '██████╗  █████╗ ███████╗██╗  ██╗██████╗  ██████╗  █████╗ ██████╗ ██████╗ ',
        '██╔══██╗██╔══██╗██╔════╝██║  ██║██╔══██╗██╔═══██╗██╔══██╗██╔══██╗██╔══██╗',
        '██║  ██║███████║███████╗███████║██████╔╝██║   ██║███████║██████╔╝██║  ██║',
        '██║  ██║██╔══██║╚════██║██╔══██║██╔══██╗██║   ██║██╔══██║██╔══██╗██║  ██║',
        '██████╔╝██║  ██║███████║██║  ██║██████╔╝╚██████╔╝██║  ██║██║  ██║██████╔╝',
        '╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ '
    ].map( d => '    ' + d + '    ' );
    var empty = new Array( s[ 0 ].length ).fill( ' ' ).join( '' );
    s.splice( 0, 0, empty );
    s.push( empty );
    console.log( '%c' + s.join( '\n' ), 'color: rgb( 30, 38, 48 );' );

    function randData( n, min, max){
        return [].map.call( new Array( n ).fill( 0 ), d => ~~ ( min + Math.random() * ( max - min ) ) );
    }

    console.chart( randData( 30, 0, 23 ), {
        title: 'Tweets by day over last 30 days:',
        color: 'rgb( 30, 38, 48 )',
        height: 10,
        min: 0
    } );

    console.chart( randData( 52, 0, 12 ), {
        title: 'Commits by week over a year:',
        color: 'rgb( 30, 38, 48 )',
        height: 10,
        min: 0
    } );

    console.chart( randData( 52, 1, 17 ), {
        title: 'JS Frameworks tested by week over a year:',
        color: 'rgb( 30, 38, 48 )',
        height: 10,
        min: 0
    } );

    console.chart( randData( 52, 0, 6 ), {
        title: 'Beers by week over a year:',
        color: 'rgb( 30, 38, 48 )',
        height: 10,
        min: 0
    } );

    console.chart( randData( 52, 0, 3 ), {
        title: 'Unicorns met by week over a year:',
        color: 'rgb( 30, 38, 48 )',
        height: 5,
        min: 0,
        max: 5
    } );
} );
