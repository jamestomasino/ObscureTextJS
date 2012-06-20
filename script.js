Namespace.import ( this, 'org.tomasino.utils.ObscureText' );
Namespace.import ( this, 'org.tomasino.utils.Keyboard' );

var obscure = new ObscureText();
var keyboard = new Keyboard( document );
keyboard.addEventListener ( Keyboard.EVENT_KEY_UP, onKeyUp );
keyboard.addEventListener ( Keyboard.EVENT_BACKSPACE_UP, onBackspace );
keyboard.addEventListener ( Keyboard.EVENT_ENTER_UP, onEnter );

function onKeyUp ( keyObj ) {
	var enc = obscure.charByCode ( keyObj.charCode );
	$('section').append ( enc );
}

function onBackspace ( ) {
	v = $('section').html();
	v = v.substring ( 0, v.length - 1);
	$('section').html(v);
}

function onEnter ( ) {
	$('section').append ( '\n' );
}
