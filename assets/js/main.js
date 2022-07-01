jQuery( document ).ready( function( $ ) {
    
    /* Ajax functions */
    $(document).on( 'click', ' .it-load-posts' , function() {

        var that = $(this);
        var  page = that.data( 'page' ); 
        var newPage = page+1;
        var  ajaxurl = that.data( 'url' );
        that.addClass('loading');
        that.text('Loading...');

        $.ajax({
            url     : ajaxurl,
            type   : 'post',
            data  : {
                page : page,
                action : 'aesto_load_more'
            },
            error : function( response ){
                console.log( response );
            },
            success : function( response ){
                if( response == 0 ) {
                    $( ".it-load-posts" ).css( "display", "none");
                   

                }else {
                    that.data( 'page', newPage );
                    $( '.it-postfeed' ).append( response );
                    that.removeClass( 'loading' );
                    that.text( 'Load More' );
                }
                
            }  

        })

    });

});

(function ($) {	

	$.fn.searchBox = function(ev) {

		var $searchEl = $('.search-elem');
		var $placeHolder = $('.placeholder');
		var $sField = $('#search-field');

		if ( ev === "open") {
			$searchEl.addClass('search-open')
		};

		if ( ev === 'close') {
			$searchEl.removeClass('search-open'),
			$placeHolder.removeClass('move-up'),
			$sField.val(''); 
		};

		var moveText = function() {
			$placeHolder.addClass('move-up');
		}

		$sField.focus(moveText);
		$placeHolder.on('click', moveText);
		
		$('.submit').prop('disabled', true);
		$('#search-field').keyup(function() {
	        if($(this).val() != '') {
	           $('.submit').prop('disabled', false);
	        }
	    });
	}	

}(jQuery));

$('.search-btn').on('click', function(e) {
	$(this).searchBox('open');
	e.preventDefault();
});

$('.close').on('click', function() {
	$(this).searchBox('close');
});

