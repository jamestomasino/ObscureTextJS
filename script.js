Namespace.import ( this, 'org.tomasino.utils.ObscureText' );

var obscure = new ObscureText();

$(document).unbind( 'keyup' );
$(document).unbind( 'keydown' );
$(document).unbind( 'keypress' );

$(document).bind( 'keyup', onKeyUp );
$(document).bind( 'keydown', onKeyDown);
$(document).bind( 'keypress', onKeyPress );

var shift = false;
var capslock = false;

function onKeyUp ( e ) {
	var k = (window.event) ? event.keyCode : e.keyCode;
	switch (k)
	{
		case 8: // backspace
			break;
		case 20: // capslock
			break;
		case 16: // shift
			shift = false;
			break;
		case 13: // enter
			$('section').append ( '\n' );
			break;
		default:
			if (!shift && (k >= 65 && k <= 90))
			{
				k += 32;
			}

			var enc = obscure.charByCode ( k );
			$('section').append ( enc );
			break;
	}
	e.preventDefault();
}

function onKeyPress ( e ) {
	e.preventDefault();
}

function onKeyDown ( e ) {
	e = e || event;
	var k = e.keyCode || e.which;

	switch (k)
	{
		case 8: // backspace
			v = $('section').html();
			v = v.substring ( 0, v.length - 1);
			$('section').html(v);
			break;
		case 20: // capslock
			break;
		case 16: // shift
			shift = true;
			break;
	}
	e.preventDefault();
}

function getChar(event) {
  if (event.which == null) {
	console.log ('ie');
    return String.fromCharCode(event.keyCode) // IE
  } else if (event.which != 0 && event.charCode != 0) {
	console.log ('rest');
    return String.fromCharCode(event.which)   // the rest
  } else {
	console.log ('special');
    return null // special key
  }
}

