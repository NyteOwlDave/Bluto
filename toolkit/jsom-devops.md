<head> <link rel="icon" href="./favicon.ico" /> </head>

<style>
@import url("./../style/jsom-devops.css");
</style>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[tick-tick]:
<https://ticktick.com/webapp/#p/6a99f28e8f086b72edb5a98b/tasks>
"Project Notes ~ Tick-Tick"

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[me-omega]:
<http://dave-omega/app/bluto/toolkit/jsom-devops.html>
"Omega Edition"

----------------------------------------------------------------

# JSOM DevOps Tool

> [Omega][me-omega]
> [Bluto Menu](./../bluto-menu.html)
> [File System](./)

----------------------------------------------------------------

# Description

- ( `pending` )

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
http://dave-omega/app/bluto/style/jsom-devops.css
```
<!-- IMPORTANT : menu class is Required! -->
<div center class="menu">
  <button onclick="copy_above_preview(event)">Copy</button>
</div>

----------------------------------------------------------------

# Command Suggestions

<div center>
  <select id="suggestion_droplist"></select>
  <button onclick="try_suggestion(event)">Try</button>
</div>

----------------------------------------------------------------

<footer if="footer">
  <input id="footer_input" onchange="perform( event )" />
</footer>

<header id="messages"></header>

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

<script src="./../api/jsom-combo-api.js"></script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="try-suggestion.js" group="AppUI" lang="javascript" status="working">
function try_suggestion( event ) {
    try {
        const ge = suggestion_droplist;
        const js = ( ge.value );
        if (! js ) { return; }
        suggest( js );
    } catch ( e ) {
        message( e.message );
        console.error( e );
    }
}
</script>

<script id="init-suggestion-droplist.js" group="AppUI" lang="javascript" status="working">
function init_suggestion_droplist() {
    try {
        const ge = suggestion_droplist;
        ge . innerHTML = "";
        const add =( js )=> {
            const ce = elx( "OPTION" );
            ge . appendChild( ce );
            ce . textContent = (
                ce . value = ( js )
            );
        };
        suggestions.forEach( add );
    } catch ( e ) {
        message( e.message );
        console.error( e );
    }
}
</script>

<script id="page-load.js" group="EventOps" lang="javascript" status="working">
addEventListener( "load", init_suggestion_droplist );
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="suggestions.js" group="DebugOps" name="Footer Suggestions" lang="javascript" status="untested">
suggestions = [
  "install('hud')"
, "test_ghost_editor()"
, "btn = one( 'BUTTON' ); node.flash( btn );"
, "jsom( 'status', 'untested', 0, '+' )"
, "jsom.status( 'working', 0, '+' )"
, "jsom.group( 'GatherOps', 0, '+ )"
, "jsom.name( 'Named Script', 0, '+' )"
, "jsom.id( 'd', 0, '+' )"
, "jsom.lang( 'javascript', 0, '+' )"
, "ned.fieldset( 'New Fieldset Gadget' )"
, "message.hints()"
];
</script>

<script>
;
; ( _op = 0 )
; ( _op > 0 ) ? suggest( suggestions[ _op ] )
: suggest( suggestions[ 0 ] )
;
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

