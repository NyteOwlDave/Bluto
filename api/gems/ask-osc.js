
/* 
	WHAT  : ask-osc.js
	WHY   : Prompt w/ Oscillate
	WHO   : HUD Editor
	WHERE : HUD Gems
	WHICH : Tower-FireFox-Omega
	APP   : hud.html
	LAN   : dave-tower
	REL   : bluto/api/gems
	CAS   : tower-firefox-omegs
	VER   : 2026-SEP-26
	REV   : 12:21
*/

function ask( a, b ) {
	return str( window.prompt( a, b ) );
}

function osc() {
	main._o_ = (! main._o_  );
    if ( main._o_ ) {
		blurt( "OK!" ); 
	}
    else {
		blurt( "Ready!" ); 
	}
}

ask.test = function() {
    let s = ask( "Your Name?", "me" );
    if ( s ) {
        alert( "Hello, " + s + " !" );
    } else {
        alert( "Are we a little shy?" );
    }
};

;
; ( 1 ) && ask.test()
; ( 1 ) && osc()
;


