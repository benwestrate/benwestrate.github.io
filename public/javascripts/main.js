$(window).ready( function(){
    
    adjustPostitions();
    
    $(window).resize( adjustPostitions );
    
    function adjustPostitions(){
        if( $(window).width() > 992 ){
            
            $('.index .full-width').height( $(window).height() );
            $('[data-hook="summary"]').css( "margin-top" , ( $('.full-width').height() - 250 ) / 2 );
            
        }
    }
    
} );