
/* 
    view-stored-table.js
    HUD Gems
*/

;
; doc = document
; boo = doc . body
;
; kid =( t )=> boo.appendChild( elx( t ) )
; rse =( k )=> localStorage.getItem( k )
;

function view_stored_table( k ) {
	k = ( str( k ) || "basic-edition-table.html" );
	id = "table";
	te = gid( id );
	if (! te ) {
	  	te = kid( "TABLE" );
   		te . id = id;
	}
	te . innerHTML = rse( k );
	return ( te );
}

;
; ( 1 ) && alert( "OK!" )
;

