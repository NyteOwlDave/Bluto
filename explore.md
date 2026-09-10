<head> <link rel="icon" href="./favicon.ico" /> </head>

<style>
@import url("https://nyteowldave.neocities.org/style.css");
</style>

<style>
#footer_input {
    width : calc( 100vw - 100px ) !important;
}
</style>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

----------------------------------------------------------------

# [Explore](https://dropbox.com)

----------------------------------------------------------------

- [Folder Tree](./tree.php)
- [File System](./)

----------------------------------------------------------------

# [Bluto Providers](http://tiny.cc/daves-notes)

> [Omega](http://dave-omega/app/bluto/bluto-menu.html)
> [Tower](http://dave-tower/app/bluto/bluto-menu.html)

----------------------------------------------------------------

<header id="messages"></header>

<footer id="footer">
  <input id="footer_input" onchange="perform(event)" />
</footer>

----------------------------------------------------------------

<script>
; iwm = Object.keys( window ).sort()
</script>

<script>
; doc = document
</script>

<script>
;
; doc . title
= doc . querySelector( "H1" )
. textContent
;
</script>

<script>
; cls =()=> console.clear()
; agn =()=> location.reload()
</script>

<script>
; veer =( h )=> ( location.hostname = ( h ) )
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script src="https://nyteowldave.github.io/std/api/gems/prolog-beta.js">
</script>

<script src="https://nyteowldave.github.io/std/api/gems/interpreter-lite.js">
</script>

<script src="https://nyteowldave.github.io/std/api/install.js">
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>

function suggest( s ) {
	const i = parseInt( s );
	if ( isFinite( i ) ) {
		const t = str( suggestions[ i ] );
		s = ( t || s );
	}
    footer_input.value = str( s );
}

addEventListener(
  "load"
, ( e ) => { suggest( 0 ); }
);

</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
suggestions = [
  "install('hud')"
];
</script>

