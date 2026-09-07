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
body {
    margin : 10ch 1.1ch 42vh 1.1ch;
}
</style>

<style>
#footer_input {
    width : calc( 100vw - 100px ) !important;
}
</style>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[tick-tick]:
<https://ticktick.com/webapp/#p/6a99f28e8f086b72edb5a98b/tasks>
"Project Notes ~ Tick-Tick"

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

<!-- IMPORTANT : menu class is Required! -->
<div center class="menu">
  <button onclick="copy_above_preview(event)">Copy</button>
</div>

----------------------------------------------------------------

## Stylesheets

```hal
https://nyteowldave.neocities.org/style.css
```
<!-- IMPORTANT : menu class is Required! -->
<div center class="menu">
  <button onclick="copy_above_preview(event)">Copy</button>
</div>

----------------------------------------------------------------

<footer if="footer">
  <input id="footer_input" onchange="perform( event )" />
</footer>

<header id="messages"></header>

<script id="message.js" group="MessageOps" status="working">
   function message( s ) { messages.textContent = ( s ); }
</script>

<script id="suggest.js" group="MessageOps" status="working">
function suggest( s ) {
    footer_input.value = ( s );
}
</script>

----------------------------------------------------------------

> [Omega][me-omega]
> [Bluto Menu](./../bluto-menu.html)
> [File System](./)

----------------------------------------------------------------

<script id="iwm.js" group="Prolog" status="working">
;
; iwm = Object.keys( window ).sort()
;
</script>

<script id="doc.js" group="Prolog" status="working">
;
; doc = document
;
</script>

<script id="doc-title.js" group="Prolog" status="working">
;
; doc . title
= doc . querySelector( "H1" )
. textContent
;
</script>

<script id="cls-agn.js" group="Prolog" status="working">
;
; cls =()=> console.clear()
; agn =()=> location.reload()
;
</script>

<script id="veer.js" group="Prolog" status="working">
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

<script id="locate-above-sibling.js" group="GideonOps" status="working">
function locate_above_sibling( type, sender ) {
    if ( sender instanceof Event ) {
        sender = sender.target;
    }
    let ge = sender;
    if ( ge.parentElement.classList.contains( "menu" ) ) {
        ge = ge.parentElement;
    }
    type = str( type );
    if (! type ) {
        throw new TypeError(
            "Expected an Element Node Type"
        );
    }
    const match  =()=> ( (  ge ) && ( ge.nodeName === type   ) );
    const failed =()=> ( (! ge ) || ( ge.nodeName === "BODY" ) );
    while (! match( ge ) ) {
        if ( failed() ) {
            console.warn( "Unable to locate PRE element" );
            return ( null );
        }
        ge = ge.previousElementSibling;
    }
    return ( ge );
}
</script>

<script id="locate-above-preview.js" group="GideonOps" status="working">
function locate_above_preview( sender ) {
    return locate_above_sibling( "PRE", sender );
}
</script>

<script id="copy-above-preview.js" group="GideonOps" status="working">
function copy_above_preview( sender ) {
    try {
        const vw = locate_above_preview( sender );
        if (! vw ) {
            throw new Error( "No prior PRE element was found" );
        }
        node.flash( vw );
        write_clipboard( vw.innerText );
        // alert( vw.nodeName );
    } catch ( e ) {
        alert ( e );
        throw ( e );
    }
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="write-clipboard.js" group="ClipboardOps" status="working">
function write_clipboard( s ) {
    try {
        const old = doc.activeElement;
        const ed = get_ghost_editor();
        ed.value = ( s );
        ed.select();
        ed.focus();
        doc.execCommand( "copy" );
        if ( old ) { old.focus(); }
        message( `Wrote item to clipboard` );
    } catch ( e ) {
        message( e.message );
        console.error( e );
    }
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="get-ghost-editor.js" group="GideonOps" status="working">
function get_ghost_editor() {
    const id = "ghost_editor";
    const ed = gid( id );
    if ( ed ) { return ( ed ); }
    const cname = "ghost";
    const owner = ( doc . body );
    return (
        node( "TEXTAREA", id, cname, owner )
    );
}
</script>

<script id="test-ghost-editor.js" group="GideonOps" status="working">
function test_ghost_editor() {
    try {
        const ed = get_ghost_editor();
        alert( ed.nodeName );
    } catch ( e ) {
        message( e.message );
        console.error( e );
    }
}
</script>

<script id="node.js" group="GideonOps" status="working">
function node( type, id, cname, owner ) {
    const ge = elx( str( type ) );
    if ( id = str( id ) ) {
        ge . id = ( id );
    }
    if ( cname = str( cname ) ) {
        ( ge )
        . classList
        . add ( cname );
    }
    if ( owner instanceof HTMLElement ) {
        owner . appendChild( ge );
    } else if ( "undefined" !== typeof owner ) {
        console.warn( { owner } );
        throw new TypeError(
            "Expected a Gadget Reference"
        );
    }
    return ( ge );
}
</script>


<script id="node-flash.js" group="GideonOps" status="working">
node.flash = function( o, cname, delay ) {
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

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="jsom.js" group="GatherOps" status="working">
function jsom( attrib, rex, dash, ed ) {
    ed = ned( ed );
    attrib = ( str( attrib ) || "group" );
    const artie =( se )=> ( se.getAttribute( attrib ) );
    const q = ( `SCRIPT[${attrib}]` );
    const m = all( q );
    let v;
    if ( rex = str( rex ) ) {
        rex = new RegExp( rex );
        const match =( se )=> ( rex.test( artie( se ) ) );
        v = ( ( m ).filter( match ) );
    } else {
        v = ( m );
    }
    const doc = jsom.compose( v, dash );
    if ( ed === "+" ) { ed = ned(); }
    if ( ed instanceof HTMLTextAreaElement ) {
        ed . value = ( doc );
        return ( ed );
    }
    return ( doc );
}
</script>

<script id="jsom-compose.js" group="GatherOps" status="working">
jsom.compose = function( scripts, dash="-" ) {
    dash = ( str( dash ) || "-" );
    const line = String( dash ).repeat( 62 );
    const sep = [ "\n|", "|\n" ].join( line );
    const lines = (
        ( scripts )
        . map( ( se )=> ( se.innerText ) )
    );
    return lines.join( sep );
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="ned.js" group="ZedOps" status="working">
function ned( ed ) {
    ed = (
        ( ed )
        || gid( "sop" )
        || gid( "sce" )
        || gid( "sip" )
    );
    if (! ed ) {
        const owner = ned.section();
        ed = node(
            "TEXTAREA", "sop", "siox", owner
        );
    }
    return ( ed );
}
</script>

<script id="ned-section.js" group="ZedOps" status="working">
ned.section = function() {
    let section = (
           gid( "editor_section" )
        || gid( "editor-section" )
    );
    if ( section ) { return ( section ); }
    const fieldset = ned.fieldset( "Editors" );
    return node( "SECTION", "editor_section", 0, fieldset );
}
</script>

<script id="ned-fieldset.js" group="ZedOps" status="working">
ned.fieldset = function( caption, owner ) {
    owner = ( owner || document.body );
    caption = ( str( caption ) || "New Group" );
    const fieldset = node( "FIELDSET", 0, 0, owner    );
    const legend   = node( "LEGEND"  , 0, 0, fieldset );
    legend.textContent = ( caption );
    return ( fieldset );
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
;
; ( 0 ) && suggest( "install('hud')" )
; ( 0 ) && suggest( "test_ghost_editor()" )
; ( 0 ) && suggest( "btn = one( 'BUTTON' ); node.flash( btn );" )
; ( 0 ) && suggest( 'jsom( "status", "untested", 0, "+" )' )
; ( 1 ) && suggest( 'jsom( "status", "working", 0, "+" )' )
; ( 0 ) && suggest( "// Test Copy Button" )
; ( 0 ) && suggest( "// ... " )
;
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

