var colors = [ '#E8DDCB', '#CDB380', '#036564', '#033649', '#031634' ];
var articles = [ 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2 ].map( function( d, i ) {
    var obj = {
        index: i,
        height: d
    };
    return obj;
} );

var grid = d3.select( '#grid' );
for ( var i = 0; i < articles.length; i++ ) {
    var col = grid.append( 'div' )
        .attr( 'class', 'col' );

    var a = articles[ i ];
    if ( a.height == 2 ) {
        col.style( 'flex-grow', 2 );
        var article = col.append( 'article' )
            .attr( 'class', 'big' );
        createArticleContent( article, a );
    } else {
        var article = col.append( 'article');

        createArticleContent( article, a );

        if ( i + 1 < articles.length ) {
            i++;
            a = articles[ i ];
            article = col.append( 'article');

            createArticleContent( article, a );
        }
    }
}

function createArticleContent( article, a ) {
    var content = article.append( 'div' )
        .attr( 'class', 'content' );
    content.append( 'div' )
        .attr( 'class', 'bg' )
        .style( 'background', function() {
            return colors[ ~~( Math.random() * colors.length ) ]
        } );
    content.append( 'h1' )
        .text( 'Some Very Long Random Title' );
}

///////////////////////////////////////////////////////////////////
( function(){
    function isOnScreen( elem ) {
        var viewport_top = document.body.scrollTop;
        var viewport_height = window.innerHeight;
        var viewport_bottom = viewport_top + viewport_height;
        var top = elem.offsetTop;
        var height = parseInt( d3.select( d3.select( elem ).node().parentNode ).style( 'height') );
        var bottom = top + height;
        return ( top >= viewport_top && top < viewport_bottom ) ||
            ( bottom > viewport_top && bottom <= viewport_bottom ) ||
            ( height > viewport_height && top <= viewport_top && bottom >= viewport_bottom );;
    }

    function onScreen() {
        var grid = document.querySelector( '#grid'),
            onScreenContents = grid.querySelectorAll( '.content');

        [].forEach.call( onScreenContents, function( d,i ){
            d.style.height = '0%';
        } );

        [].filter.call( onScreenContents, function( d ){
            return isOnScreen( d );
        } ).forEach( function( d, i ){
            d.style.height = '100%';
        } );
    }

    window.addEventListener( 'load', onScreen );
    window.addEventListener( 'scroll', onScreen );
    window.addEventListener( 'resize', onScreen );
} )();
