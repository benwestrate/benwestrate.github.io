$(window).ready( function(){

    adjustPostitions();

    window.onresize = adjustPostitions;

    function adjustPostitions(){

        if( $(window).width() > 992 ){

            $('[data-hook="summary"]').css( "margin-top" , ( $('.full-width').height() - 250 ) / 2 );

        } else {
            $('[data-hook="summary"]').css( "margin-top" , ( 0 ) );
        }
    }

    var cards = document.querySelectorAll('.project-cards__card')
    var activeCard = null;

    cards.forEach( function( card ) {

        card.onclick = function( e ) {
            if( activeCard === card ){
                activeCard.classList.remove('project-cards__card--active');
            } else {
                if( activeCard ){
                    activeCard.classList.remove('project-cards__card--active');
                }
                card.classList.add('project-cards__card--active');
            }

            activeCard = card;
        }

    } )

} );
