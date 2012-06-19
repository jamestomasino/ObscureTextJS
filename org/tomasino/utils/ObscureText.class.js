(function() {

	var ObscureText = my.Class( {

		STATIC: { },

		constructor: function( ) {
			this.chars      = [];
			this.chars[65]  = ['À','Á','Â','Ã','Ä','Å'];
			this.chars[66]  = ['ß','Β'];
			this.chars[67]  = ['Ç','Ĉ','Ċ'];
			this.chars[68]  = ['Ð','Đ'];
			this.chars[69]  = ['È','É','Ê','Ë','€','Ĕ','Ė'];
			this.chars[71]  = ['Ĝ','Ğ','Ġ','Ģ'];
			this.chars[72]  = ['Ħ','Ĥ'];
			this.chars[73]  = ['Ì','Í','Î','Ï','Ĩ','Ī','Ĭ'];
			this.chars[74]  = ['Ĵ'];
			this.chars[75]  = ['ĸ'];
			this.chars[76]  = ['Ļ','Ŀ','Ł'];
			this.chars[78]  = ['Ñ','Ń','Ņ','Ň','Ŋ'];
			this.chars[79]  = ['Ò','Ó','Ô','Õ','Ö','Ø','Ō','Ŏ','Ő'];
			this.chars[82]  = ['Ŗ'];
			this.chars[83]  = ['Š','Ŝ','Š'];
			this.chars[84]  = ['Ŧ'];
			this.chars[85]  = ['Ù','Ú','Û','Ü','Ũ','Ū','Ŭ','Ů','Ű','Ų'];
			this.chars[87]  = ['Ŵ'];
			this.chars[89]  = ['Ý','Ÿ','Ŷ','Ÿ'];
			this.chars[90]  = ['Ž'];

			this.chars[97]  = ['à','á','â','ã','ä','å','ą'];
			this.chars[98]  = ['þ'];
			this.chars[99]  = ['ç','ć','ĉ','ċ','č'];
			this.chars[100] = ['ď','đ'];
			this.chars[101] = ['è','é','ê','ë','ĕ','ė','ě'];
			this.chars[102] = ['ƒ'];
			this.chars[103] = ['ĝ','ğ','ġ','ģ'];
			this.chars[104] = ['ĥ','ħ'];
			this.chars[105] = ['ì','í','î','ï','ĩ','ī','ĭ'];
			this.chars[106] = ['ĵ'];
			this.chars[108] = ['ĺ','ļ','ľ','ŀ','ł'];
			this.chars[110] = ['ñ','ń','ņ','ň','ŉ','ŋ'];
			this.chars[111] = ['ð','ò','ó','ô','õ','ö','ø','ō','ŏ','ő'];
			this.chars[114] = ['ŕ','ŗ','ř'];
			this.chars[115] = ['š','ś','ŝ','ş','š'];
			this.chars[116] = ['†','ţ','ť','ŧ'];
			this.chars[117] = ['ù','ú','û','ü','ũ','ū','ŭ','ů','ű','ų'];
			this.chars[119] = ['ŵ'];
			this.chars[120] = ['×'];
			this.chars[121] = ['ý','ÿ'];
			this.chars[122] = ['ź','ż','ž'];
		},

		charByCode: function ( num ) {
			if ( this.chars[num] != null ) {
				var charList = this.chars[num];
				var returnString = charList.shift();
				charList.push (returnString);
				return returnString;
			} else {
				return String.fromCharCode ( num );
			}
		}

	});

	var namespace = new Namespace ( 'org.tomasino.utils' );
	namespace.ObscureText = ObscureText;

})();



