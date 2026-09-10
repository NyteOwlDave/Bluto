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
td select ,
td input {
    display : inline-block;
    width   : inherit;
}
</style>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[me-omega]:
<http://dave-omega/app/bluto/toolkit/jsom-script-editor.html>
"Omega Edition"

----------------------------------------------------------------

# JSOM Script Editor

> [Omega][me-omega]
> [File System](./)

----------------------------------------------------------------

## Script Details

| Property  | Value |
|-----------|----------------------------------------|
| id        | <input id="id_input" />                |
| title     | <input id="title_input" />             |
| nametag   | <input id="nametag_input" />           |
| group     | <input id="group_input" />             |
| lang      | <input id="lang_input" />              |
| status    | <input id="status_input" />            |
| tikey     | <input id="tikey_input" />             |
| tidate    | <input id="tidate_input" />            |
| code      | <textarea id="code_editor"></textarea> |


----------------------------------------------------------------

## Actions

| Property  | Value |
|-----------|----------------------------------------|
| actions   | <select id="action_droplist" oninput="do_show_action(event)"></select> |
| action    | <input id="action_input" onchange="do_action(event)" />                |
| param1    | <input id="param1_input" />             |
| param2    | <input id="param2_input" />             |
| param3    | <input id="param3_input" />             |

----------------------------------------------------------------

## Modules

| Property  | Value |
|-----------|--------------------------------------------|
| index     | <input readonly="true" id="index_input" /> |
| count     | <input readonly="true" id="count_input" /> |

----------------------------------------------------------------

# Comments

----------------------------------------------------------------

## To-Do Items

- [`.`] Test Before Unload Event
- [`.`] Persistent Storage
- [`.`] File Transport
- [`.`] Mail
- [`.`] Populate UI Gadgets
- [`.`] Create Some Default Actions
- [`.`] Test all Methods

----------------------------------------------------------------

## Suggested Default Actions

| `✅` | Title             | Action |
|------|-------------------|---------------------------------|
| `❎` | Show Action Key   | `alert( actions.key );`         |
| `❎` | Generate ID       | `generate.id();`                |
| `❎` | Generate Title    | `generate.title();`             |
| `❎` | Generate Name Tag | `generate.nametag();`           |
| `❎` | Generate Group    | `generate.group();`             |
| `❎` | Generate Language | `generate.language();`          |
| `❎` | Generate Status   | `generate.status();`            |
| `❎` | Generate TiKey    | `generate.tikey();`             |
| `❎` | Generate TiDate   | `generate.tidate();`            |
| `❎` | Generate Function Prototype | `generate.fnproto();` |
| …   | …                 | …                               |

----------------------------------------------------------------

## Remarks

This is a brand new tool for managing Gems and Peaches.

It's part of the JSOM DevOps Toolkit, which is part of Bluto.

----------------------------------------------------------------

<footer if="footer">
  <input id="footer_input" onchange="perform( event )" />
</footer>

<header id="messages"></header>

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
</script>

<script>
; veer =( h )=> ( location.hostname = ( h ) )
</script>

<script>
; type  =( o )=> ( alert( typeof o   ) )
; ntype =( o )=> ( alert( o.nodeName ) )
; asize =( a )=> ( alert( a.length   ) )
; osize =( o )=> ( alert( a.size     ) )
</script>

<script>
prolog = {
  cls   , veer
, type  , ntype
, asize , osize
};
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script src="https://nyteowldave.github.io/std/api/gems/prolog-beta.js">
</script>

<script src="https://nyteowldave.github.io/std/api/gems/interpreter-lite.js">
</script>

<script src="https://nyteowldave.github.io/std/api/install.js">
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<!-- script src="./../api/jsom-combo-api.js"></script -->

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
midlog = {};
</script>

<script>
const TOKENS = {
   ellipses : "…"
};
midlog.tokens = TOKENS;
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
function main( event ) {
    try {
        actions.recover();
        addEventListener( "beforeunload" , before_unload );
        actions.populate.index( action_droplist );
        do_show_action();
    } catch ( e ) {
        main.error = ( e.message );
        console.error( e );
        alert( e );
    }
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
addEventListener( "load", main );
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
function do_action( event ) {
    const ops = do_action;
    ops.error = "";
    try {
        ops.event = ( event );
        event.preventDefault ();
        event.stopPropagation();
        const sender = event.target;
        const js = str( sender.value );
        const s = window.eval( js );
        console.info( s );
    } catch ( e ) {
        ops.error = ( e.message );
        console.error( e );
        alert( e );
    }
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
function do_show_action( event ) {
    try {
        action_input.value = (
            action_droplist.value
        );
    } catch ( e ) {
        console.error( e );
        alert( e );
    }
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
function before_unload( event ) {
    actions.persist();
    if ( actions.store !== localStorage ) {
        event.preventDefault();
    }
}

before_unload.mdn = (
  "https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event"
);

before_unload.help = function() {
    const ops = before_unload;
    visit( ops.mdn );
};
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
function rico( k, v ) {
    if ( v instanceof Object ) {
        v = JSON.stringify( v, null, 2 );
    } else {
        v = String( v );
    }
    const o = rico.options;
    const a = elx( "A" );
    a . download = ( str( k ) || "download.txt" );
    a . href = URL.createObjectURL(
        new Blob( [ v ], o )
    );
    a . click ();
    URL . revokeObjectURL( a.href );
}
rico.options = {
  type : "text/plain"
, charset : "utf-8"
};
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
function visit( url ) {
    const a = elx( "A" );
    a . href = ( url );
    a . setAttribute( "target", url );
    a . click ();
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
function message( s ) {
    messages.textContent = str( s );
}
</script>

<script>
function suggest( s ) {
    footer_input.value = str( s );
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
actions = {};
</script>

<script>
;( ( ops ) => {

ops.key = "jsom-script-editor.json";
ops.store = ( localStorage || sessionStorage );

/*
Schema = {
  id      : ""
, title   : ""
, nametag : ""
, group   : ""
, lang    : ""
, status  : ""
, tikey   : ""
, tidate  : ""
, code    : ""
}
*/
ops.modules = [];

// Schema = [ action, title ]
ops.index = [
  [ 'alert( action.key )'  , 'Show Action Key'    ]
, [ "generate.details();"  , "Generate Details"   ]
, [ "generate.id();"       , "Generate ID"        ]
, [ "generate.title();"    , "Generate Title"     ]
, [ "generate.nametag();"  , "Generate Name Tag"  ]
, [ "generate.group();"    , "Generate Group"     ]
, [ "generate.language();" , "Generate Language"  ]
, [ "generate.status();"   , "Generate Status"    ]
, [ "generate.tikey();"    , "Generate TiKey"     ]
, [ "generate.tidate();"   , "Generate TiDate"    ]
, [ "generate.fnproto();"  , "Generate Function Prototype" ]
];

const man = ops.manuscript = {};

man.details = function() {
    const md = {};
    md . title    = ( document.title );
    md . origin   = ( location.href );
    md . version  = ( "1.0" );
    md . revision = ( "0.0" );
    md . when     = ( new Date() ).toLocaleString();
    md . agent    = ( navigator.userAgent );
    md . tikey    = ( "3eb3b1d6-e56e-43b2-94f0-453012d39706" );
    md . tidate   = ( "2026-SEP-09" );
    return ( md );
};

man.compose = function() {
    const m = {};
    m . details = man.details();
    m . key     = ops.key;
    m . index   = ops.index;
    m . modules = ops.modules;
    return JSON.stringify( m, null, 2 );
};

man.parse = function( json ) {
    const m = JSON.parse( json );
    if ( m.key !== ops.key ) {
        throw new Error( "Invalid Manuscript Key" );
    }
    if ( iob( m.index ) ) {
        ops.index = ( m.index );
    }
    if ( iob( m.modules ) ) {
        ops.index = ( m.modules );
    }
};

ops.persist = function() {};

ops.recover = function() {};

const pop = ( ops.populate = {} );

pop.index = function( o ) {
    let type, nn = o.nodeName;
    o.innerHTML = "";
    switch( nn ) {
    case "SELECT" : case "DATALIST" :
        type = "OPTION";
        break;
    case "UL" : case "OL" :
        type = "LI";
        break;
    default : oops( nn );
    }
    const add =( entry )=> {
        const ce = elx( type );
        o  . appendChild( ce );
        ce .       value = str( entry[ 0 ] );
        ce . textContent = str( entry[ 1 ] );
    };
    ops.index.forEach( add );
    function oops( nn ) {
        console.warn( { type : nn } );
        throw new TypeError(
            `Expected : [ SELECT | DATALIST | UL | OL ]`
        );
    }
};

function invalid_index( index ) {
    const s = ( `Invalid Module Index : ${index}` );
    throw new Error( s );
}

const mod = ( ops.module = {} );

mod.exists = function( index ) {
    const mods = ops.modules;
    const top  = ( mods.length - 1 );
    return (
           ( index >= 0   )
        && ( index <= top )
    );
};

mod.peek = function( index ) {
    const mods = ops.modules;
    return ( mods[ index ] );
};

mod.read = function( index ) {
    const details = mod.peek( index );
    if ( details instanceof Object ) {
    } else {
        invalid_index( index );
    }
};

mod.write = function( index ) {
};

const table = ( ops.table = {} );

// Schema = [ member , gadget ]
const fields = [
  [ "id"       , id_input        ]
, [ "title"    , title_input     ]
, [ "nametag"  , nametag_input   ]
, [ "group"    , group_input     ]
, [ "lang"     , lang_input      ]
, [ "status"   , status_input    ]
, [ "tikey"    , tikey_input     ]
, [ "tidate"   , tidate_input    ]
, [ "code"     , code_editor     ]
, [ "actions"  , action_droplist ]
, [ "action"   , action_input    ]
, [ "param1"   , param1_input    ]
, [ "param2"   , param2_input    ]
, [ "param3"   , param3_input    ]
];

table.read = function() {
    const details = {};
    function read( ge ) {
        const nn = ge.nodeName;
        switch ( nn ) {
        case "INPUT"    :
        case "TEXTAREA" : return ( ge.value     );
        case "PRE"      : return ( ge.innerText );
        default         : return ( ge.innerHTML );
        }
    }
    const add =( entry )=> {
        const k = entry[ k ];
        const v = read( entry[ 1 ] );
        details[ k ] = ( v );
    };
    fields.forEach( add );
    return ( details );
};

table.write = function( details ) {
    const write =( k, ge )=> {
        const nn = ge.nodeName;
        const v = str( details[ k ] );
        switch ( nn ) {
        case "INPUT"    :
        case "TEXTAREA" :
            ge.value = ( v );
            return;
        case "PRE" :
            ge.innerText = ( v );
            return;
        default :
            ge.innerHTML = ( v );
            return;
        }
    }
    const add =( entry )=> {
        const k  = entry[ 0 ];
        const ge = entry[ 1 ];
        write( k, ge );
    };
    fields.forEach( add );
    return ( details );
};

} ) ( actions );
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>

function nid( id, sep="-" ) {
    id = str( id );
    if ( id ) { return ( id ); }
    const rnd =()=> parseInt( 10000*Math.random() );
    const now =()=> ( Date.now() );
    const a = rnd().toString( 33 );
    const b = now().toString( 33 );
    return [ "id", a, b ].join( sep );
}

function _todo() {
    alert( "This feature is incomplete" );
};

generate = {};

generate.details = function() {
    const ops = generate;
    ops.id();
    ops.title();
    ops.nametag();
    ops.group();
    ops.status();
    ops.language();
    ops.tikey();
    ops.tidate();
};

generate.id = function() {
    const id = nid();
    id_input.value = [ "gem-", ".js" ].join( id );
};

generate.title = function() {
    title_input.value = "New Gem Module";
};

generate.nametag = function() {
    nametag_input.value = "new-gem-module";
};

generate.group = function() {
    group_input.value = "JarvisOps";
};

generate.status = function() {
    status_input.value = "To-Do";
};

generate.language = function() {
    lang_input.value = "javascript";
};

generate.tidate = function() {
    tidate_input.value = "2026-MMM-DD"
};

generate.tikey = function() {
    tikey_input.value = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
};

generate.fnproto  = function() {
    code_editor.value += ( `\nfunction new_fn() {}\n` );
};

</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
function param( index ) {
    const ie = param.inputs[ index ];
    if ( ie ) {
        message( `Read Parameter #${index}` );
        return str( ie.value );
    } else {
        message( `Parameter Index Range is [ 1 ... 3 ]` );
        return "";
    }
}
param.all = function() {
    const ie = param.inputs;
    const p1 = str( ie[ 1 ]. value );
    const p2 = str( ie[ 2 ]. value );
    const p3 = str( ie[ 3 ]. value );
    message( `Read All Parameters` );
    return [ p1, p2, p3 ];
};
param.show = function() {
    const t = "[ Parameters ]\n";
    const m = param.all();
    m.unshift( t );
    alert( m.join( "\n" ) );
};
</script>

<script>
param.inputs = [
  null
, param1_input
, param2_input
, param3_input
];
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
