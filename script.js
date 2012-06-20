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
	console.log (k);
	switch (k)
	{
		case 8: // backspace
			return;
			break;
		case 20: // capslock
			return;
			break;
		case 16: // shift
			shift = false;
			return;
			break;
		case 13: // enter
			$('section').append ( '\n' );
			return;
			break;
		case 48: // 0
			if (shift) k = 41;
			break;
		case 49: // 1
			if (shift) k = 33;
			break;
		case 50: // 2
			if (shift) k = 64;
			break;
		case 51: // 3
			if (shift) k = 35;
			break;
		case 52: // 4
			if (shift) k = 36;
			break;
		case 53: // 5
			if (shift) k = 37;
			break;
		case 54: // 6
			if (shift) k = 94;
			break;
		case 55: // 7
			if (shift) k = 38;
			break;
		case 56: // 8
			if (shift) k = 42;
			break;
		case 57: // 9
			if (shift) k = 40;
			break;
		case 44: // ,
		case 188: // should be , but is ¼
			k = (shift) ? 60 : 44;
			break;
		case 46: // .
		case 190: // should be . but is ¾
			k = (shift) ? 62 : 46;
			break;
		case 39: // '
		case 222: // should be ' but is Þ
			k = (shift) ? 34 : 39;
			break;
		case 59: // ;
		case 186: // º
			k = (shift) ? 58 : 59;
			break;
		case 91:
		case 219: // [
			k = (shift) ? 123 : 91;
			break;
		case 93:
		case 221: // ]
			k = (shift) ? 125 : 93;
			break;
		case 47:
		case 191: // /
			k = (shift) ? 63 : 47;
			break;
		case 61:
		case 187: // =
			k = (shift) ? 43 : 61;
			break;
		case 39:
		case 220: // \
			k = (shift) ? 124 : 39;
			break;
		case 45:
		case 189: // -
			k = (shift) ? 95 : 45;
			break;

		default:
			if (!shift && (k >= 65 && k <= 90))
			{
				k += 32;
			}
			break;
	}
	var enc = obscure.charByCode ( k );
	$('section').append ( enc );

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
