
/* 
	WHO : make-md-table.js
	WHY : Build Markdown Tables
	APP : hud.html
	LAN : dave-omega
	REL : bluto/api/gems
*/

function make_md_table( list, title ) {
	const m = pcl( list );
	const h = ( str( title ) || "List Items" );
	let c = m.reduce( ( a, b )=>{
  		let f = b.length;
  		return Math.max( a, f );
	}, 0 );
	c = Math.max( c, h.length );
	const z = String( "-" ).repeat( c );
	const mdrow =( s )=> {
  		let t = ( c - s.length );
  		s += String( " " ).repeat( t );
  		return [ "| ", s, " |" ].join( "" );
	};
	m . unshift( z ); // Horz Line
	m . unshift( h ); // Header
	return ( m . map( mdrow ) );
};

make_md_table.store_keys = function( cas ) {
	const title = ( str( cas ) || "Store Keys" )
	const items = dir();
	return make_md_table( items, title );
};

make_md_table.session_keys = function( cas ) {
	const title = ( str( cas ) || "Store Keys" )
	const items = tmp();
	return make_md_table( items, title );
};


;
; ( 0 ) && oscillate()
;

/* 

# Related

+ Ryzen Sulu
@ http://dave-ryzen/nav/

+ Interesting Store Keys
@ http://dave-omega/ramdisk/toolkit/interesting-keys.html

+ MD Table Composer
@ https://texteditor.co/?id=drive-1MnNk4vsTDQYU3yTU7HRGaB0LgYAENXD5

+ Omega HUD Peaches
@ http://dave-omega/app/hud/api/peaches

+ Tower HUD Peaches
@ http://dave-tower/app/hud/api/peaches

*/


