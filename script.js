Namespace.import ( this, 'org.tomasino.utils.ObscureText' );
Namespace.import ( this, 'org.tomasino.utils.Keyboard' );

var obscure = new ObscureText();
var keyboard = new Keyboard( document );
keyboard.addEventListener ( Keyboard.EVENT_KEY_UP, onKeyUp );

function onKeyUp ( keyObj ) {
	var enc = obscure.charByCode ( keyObj.charCode );
	$('section').append ( enc );
}

/*
			$('section').append ( '\n' );

			v = $('section').html();
			v = v.substring ( 0, v.length - 1);
			$('section').html(v);

*/
