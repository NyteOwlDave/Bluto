<head> <link rel="icon" href="./favicon.ico" /> </head>

<style>
@import url("https://nyteowldave.neocities.org/style.css");
</style>

<style>
#footer_input {
    width : calc( 100vw - 100px ) !important;
}
</style>

<style>
body {
    margin : 10ch 1.1ch;
}
</style>


<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[me-omega]:
<http://dave-omega/app/bluto/examples/hud-installer.html>
"Omega Edition"

----------------------------------------------------------------

# HUD Installer Example

----------------------------------------------------------------

This page demonstates the requirements for installing a
__HUD Editor__ package on demand.

It requires a single function call. If you examine the HTML
source code, you'll notice there is no `TEXTAREA` element. There
is no `CSS` or `JS` support for the __HUD Editor__.

All requirements are handled automatically by the 
__HUD Installer Package__.

The filename is `hud-installer.js`. This file is currently
located in the __Web Demo Gems__ folder.

This package is requested by the `install.js` API Module, which
is the __Master Installer__. It's a short script, comprised
mostly of the list of installable packages.

This list must be updated manually. The list is embedded within
the `install.js` source file, which is stored at `Morpheus`,
within the `std/api` folder.

----------------------------------------------------------------

# Caveats

The package installer won't work in `ReText`. It requires a
modern Browser Agent for proper functionality.

# Further Reading

More details are located in the [Tick Tick Tool][tick-tick].

----------------------------------------------------------------

# Requirements

----------------------------------------------------------------

## API Modules

```hal
https://nyteowldave.github.io/std/api/gems/prolog-beta.js
https://nyteowldave.github.io/std/api/gems/interpreter-lite.js
https://nyteowldave.github.io/std/api/install.js
```

----------------------------------------------------------------

## Stylesheets

```hal
https://nyteowldave.neocities.org/style.css
```

----------------------------------------------------------------

<footer if="footer">
  <input id="footer_input" onchange="perform( event )" />
</footer>

<header id="messages"></header>

<script>
   function message( s ) { message.textContent = ( s ); }
</script>

----------------------------------------------------------------

> [Omega][me-omega]
> [Bluto Menu](./../bluto-menu.html)
> [File System](./)

----------------------------------------------------------------

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

function message( s ) {}

function suggest( s ) {
    footer_input.value = ( s );
}

addEventListener( "load", ( e ) => { 
    suggest( "install('hud')" );
} );

</script>


