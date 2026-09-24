<head> <link rel="icon" href="./favicon.ico" /> </head>

<style>
@import url("https://nyteowldave.neocities.org/style.css");
</style>

<style>
.ghost {
    position : fixed;
    left     : -2000px;
    width    : 1px;
    height   : 1px;
    opacity  : 0;
}
</style>

----------------------------------------------------------------

<h1 id="_T_"> Bluto Dialog Test </h1>

----------------------------------------------------------------

# Comments

The Bluto Dialog is a simplified derivative of the original
Dialog concept designed within the ReText Dialog Sandbox,
located on the Tower.

This page serves as a testbed for this simpler dialog.

It doesn't support Drag-Drop or any of the mouse-driven
dialog actions.

Just use the footer's Command Input and manually test the
system.

Or install the HUD Editor for more comprehensive testing.

Both Dialogs' JS and CSS is now accessible via Morpheus.

----------------------------------------------------------------

<header id="messages"></header>
<footer id="footer">
 <input id="footer_input" wide onchange="perform(event)" />
</footer>

----------------------------------------------------------------

<script id="iwm.js">
; iwm = Object.keys( window ).sort();
</script>

<script id="doc.js">
; doc = document
; doc . title = ( _T_.textContetx ).trim()
</script>

<script id="debug.js">
; cls =()=> console.clear()
; agn =()=> location.reload()
</script>

<script id="veer.js">
; veer =( h )=> ( location.hostname = ( h ) )
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script src="https://nyteowldave.github.io/std/api/gems/prolog-beta.js"></script>
<script src="https://nyteowldave.github.io/std/api/gems/interpreter-lite.js"></script>
<script src="https://nyteowldave.github.io/std/api/install.js"></script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script src="https://nyteowldave.github.io/std/api/bluto/message-ops.js"></script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script src="https://nyteowldave.github.io/std/api/bluto/gems/acquire.js"></script>
<script src="https://nyteowldave.github.io/std/api/bluto/gems/docify.js"></script>
<script src="https://nyteowldave.github.io/std/api/bluto/gems/suggestions.js"></script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script src="./gems/bluto-dialog.js"></script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script src="http://dave-tower/app/hud/api/gems/oscillate.js"></script>
<script src="http://dave-tower/app/hud/api/gems/seeker.js"></script>
<script src="http://dave-tower/app/hud/api/gems/visit.js"></script>
<script src="http://dave-tower/app/hud/api/gems/hud-jimbo.js"></script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

