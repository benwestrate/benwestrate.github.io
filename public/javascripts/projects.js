$(window).ready( function(){

    var unlockButton      = $('[data-hook="unlockButton"]');
    var form              = $('[data-hook="unlock-form"]');
    var inputGroup        = form.children('.inputGroup');
    var input             = $('[data-hook="unlockPassword"]');
    var contentContainer  = $('[data-hook="hidden-content"]');
    var passwordContainer = $('[data-hook="password-container"]');
    var isSubmitting      = false;
    var url               = 'https://lzc63wcln7.execute-api.us-east-1.amazonaws.com/Prod/privatedata';

    unlockButton.on( 'click', function( event ) {
        submit();
    } )

    form.on( 'submit', function(event) {
        event.preventDefault();

        submit();

    } )

    function submit() {

        var inputValue = input.val();

        if( inputValue.length > 4 ){

            if( !isSubmitting ){

                isSubmitting = true;

                $.ajax({
                    method: 'POST',
                    url: url,
                    contentType: 'application/json',
                    data: JSON.stringify( { password: inputValue } ),
                    success: function( data ){
                        // TODO: refactor the endpoint to return a real error
                        if( data.indexOf('errorMessage') === -1 ){
                            contentContainer.append(data);
                            passwordContainer.addClass('hidden');
                        } else {
                            showError()
                        }
                    }
                })

            }


        } else {
            showError()
        }

    }

    function showError(){
        isSubmitting = false;
        inputGroup.addClass('has-error');
        form.addClass('has-error');
    }

})
