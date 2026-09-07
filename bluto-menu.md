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

[me-omega]:
<http://dave-omega/app/bluto/bluto-menu.html>
"Omega Edition"

----------------------------------------------------------------

<div center>
  <img src="./favicon.ico" />
</div>

# Bluto Menu

----------------------------------------------------------------

# Featured Pages

- [HUD Installer Example](./examples/hud-installer.html)
- [Icon Viewer](./icons/icons-view.html)

----------------------------------------------------------------

# Workspaces

- [api](./api/)
- [dot](./dot/)
- [examples](./examples/)
- [icons](./icons/)
- [notes](./notes/)
- [style](./style/)
- [templates](./templates/)

----------------------------------------------------------------

# Dot Rocket

<pre contenteditable>

&lt;script&gt;
location = "http://dave-omega/app/bluto/";
&lt;script&gt;

</pre>

----------------------------------------------------------------

# Linux Shortcut

<pre contenteditable>
[Desktop Entry]
Name=Bluto
Exec=xdg-open http://dave-omega/app/bluto/bluto-menu.html
Icon=/home/dave/Icons/logo/bluto.png
Type=Application
</pre>

----------------------------------------------------------------

# Windows Shortcut

<pre contenteditable>
[Windows Shortcut]
URL=http://dave-omega/app/bluto/bluto-menu.html
</pre>

----------------------------------------------------------------

> [Omega][me-omega]
> [File System](./)

----------------------------------------------------------------

<header id="messages"></header>

<footer if="footer">
  <input id="footer_input" onchange="perform( event )" />
</footer>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
;
; iwm = Object.keys( window ).sort()
;
</script>

<script>
;
; doc = document
;
</script>

<script>
;
; doc . title
= doc . querySelector( "H1" )
. textContent
;
</script>

<script>
;
; cls =()=> console.clear()
; agn =()=> location.reload()
;
</script>

<script>
;
; veer =( h )=> ( location.hostname = ( h ) )
;
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
    footer_input.value = ( s );
}

addEventListener( "load", ( e ) => { 
    suggest( "install('hud')" );
} );

</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->


