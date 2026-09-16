<head> <link rel="icon" href="./favicon.ico" /> </head>

<style>
@import url("https://nyteowldave.neocities.org/style.css");
</style>

<style>
.flashing {
    animation : linear 0.42s flash forwards;
}
@keyframes flash {
    from {
        transform        : scale( 1.2 );
        opacity          : 0.2;
        background-color : gold;
        color            : midnight-blue;
        box-shadow       : 0px 0px 2.4ch black;
    }
    to {
        transform : scale( 1.0 );
        opacity   : 1.0;
    }
}
</style>

<style>
[zztop] {
	box-sizing : border-box;
	padding : 16px;
}
</style>

----------------------------------------------------------------

# Gadget Flasher Example

----------------------------------------------------------------

<div center zztop>
  <button onclick="_flash(one('H1'))">Flash Header</button>
  <button onclick="_flash(this)">Flash Me</button>
</div>

----------------------------------------------------------------

<script>
; iwm = Object.keys( window ).sort()
</script>

<script>
; doc = document
; doc . title = ( `Flash Example` )
</script>

<script>
; str =( s )=> String( s || "" ).trim()
; one =( q )=> ( doc.querySelector( q ) )
</script>

<script>
function flash( o, cname, delay ) {
    cname = ( str( cname ) || "flashing" );
    delay = ( parseInt( delay ) || 800 );
    if ( delay < 1 ) { return; }
    o = ( o || document.activeElement );
    const cl = o.classList;
    const off =()=> { cl.remove( cname ); }
    cl.add( cname );
    setTimeout( off, delay );
};
</script>

<script>
function _flash( o ) {
	try {
		if ( o.nodeName === "BUTTON" ) {
			o = o.parentElement;
		}
		flash( o );
	} catch ( e ) {
		console.error( e );
		alert ( e );
	}
}
</script>

