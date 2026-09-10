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

> [JSOM Script Editor](./jsom-script-editor.html)

> [File System](./)

----------------------------------------------------------------

# Description

A spelunker and much more. The __JSOM Combo API__ contains code
for considering embedded __Scripts__ as <i>dynamically</i>
modifiable "working assets". IOW ~ Unfinished and evolving.

It's also a __PMS To-Do List__ of sorts. Each `SCRIPT` element
may have zero or more recognized __attributes__ that the system
can detect and even modify.

### These include:

- id
- title
- type
- name
- group
- lang
- status
- tikey
- tidate

Be aware that additional attributes are always possible, however
these are ignored by most of the API logic.

One crucial attribute not mentioned is `src`. This attribute
distinguishes __IMPORTED__ from __EMBEDDED__ script modules.

Another attribute I've used commonly in the past is `cdn`.
This is used as an alternative to `src`, where the script's
load is deferred or even optional. The address is known, but
to import, the `cdn` address is copied to `src` at run time.

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

# Module Groups

Individual embedded __Modules__ (`SCRIPT` elements) are grouped
by purpose or domain of concern.

The JSON Combo API has been segmented according to these
group rules.

Here's a list of the Group Names and the associate File Names.
Be aware that this individual files are duplicate code. The
Combo API is considered the official code base. All smaller
files should be kept consistent with this file.

----------------------------------------------------------------

| File Name        | Group Name | Description |
|------------------|------------|----------------------|
| copy-ops.js      | CopyOps    | Copy Buttons         |
| gather-ops.js    | GatherOps  | Script Modules       |
| gideon-ops.js    | GideonOps  | UI Gadgets           |
| list-ops.js      | ListOps    | List Gadgets         |
| message-ops.js   | MessageOps | Message Reporting    |
| zed-ops.js       | ZedOps     | Text Editor Gadgets  |

----------------------------------------------------------------

## Related Modules

| File Name         | Group Name | Description |
|-------------------|------------|----------------------|
| jsom-combo-api.js | JsomOps    | All Modules Combined |
| copy-ops-todo.js  | CopyOps    | Unfinished Code      |

----------------------------------------------------------------

# Command Suggestions

<div center>
  <select size="7" id="suggestion_droplist"></select>
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
, "jsom('status','untested',0,'+')"
, "jsom.status('working',0,'+')"
, "jsom.group('GatherOps',0,'+)"
, "jsom.name('Named Script',0,'+')"
, "jsom.id('d',0,'+')"
, "jsom.lang('javascript',0,'+')"
, "populate_list(dir())"
, "populate_list(seeker('s'))"
, "populate_droplist(dir())"
, "populate_droplist(seeker('s'))"
, "gid('list_section').remove()"
, "gid('droplist_section').remove()"
, "node.flash(one('BUTTON'));"
, "ned.fieldset('New Fieldset Gadget')"
, "alert(ned.all().length)"
, "test_ghost_editor()"
, "type(type)"
, "ntype(node.nth('A',2))"
, "asize(doc.scripts)"
, "asize(doc.title)"
, "message.hints()"
, "message.hints(location,'Location Members')"
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

