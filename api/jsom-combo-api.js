
/*

# jsom-combo-api.js

- [`X`] message-ops.js
- [`X`] gideon-ops.js
- [`X`] gather-ops.js
- [`X`] zed-ops.js
- [`X`] copy-ops.js

<pre>

*/


/*
 ~~~~~~~~~~~~~~~~~~~~~~~~[ Message Ops ]~~~~~~~~~~~~~~~~~~~~~~~~
*/

function message( s ) { messages.textContent = ( s ); }

function suggest( s ) {
    footer_input.value = ( s );
}


/*
 ~~~~~~~~~~~~~~~~~~~~~~~[ Gideon Ops ]~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

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


function test_ghost_editor() {
    try {
        const ed = get_ghost_editor();
        alert( ed.nodeName );
    } catch ( e ) {
        message( e.message );
        console.error( e );
    }
}


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


/*
 ~~~~~~~~~~~~~~~~~~~~~~~[ Gather Ops ]~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

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
    if ( ed === "+" ) { ed = ned( gid( "sop" ) ); }
    if ( ed instanceof HTMLTextAreaElement ) {
        ed . value = ( doc );
        return ( ed );
    }
    return ( doc );
}

jsom.status = function( rex, dash="-", ed ) {
    return jsom( "status", rex, dash, ed );
};

jsom.group = function( rex, dash="-", ed ) {
    return jsom( "group", rex, dash, ed );
};

jsom.lang = function( rex, dash="-", ed ) {
    return jsom( "id", rex, dash, ed );
};

jsom.name = function( rex, dash="-", ed ) {
    return jsom( "name", rex, dash, ed );
};

jsom.lang = function( rex, dash="-", ed ) {
    return jsom( "lang", rex, dash, ed );
};

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


/*
 ~~~~~~~~~~~~~~~~~~~~~~~~~[ Zed Ops ]~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

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

ned.section = function() {
    let section = (
           gid( "editor_section" )
        || gid( "editor-section" )
    );
    if ( section ) { return ( section ); }
    const fieldset = ned.fieldset( "Editors" );
    return node( "SECTION", "editor_section", 0, fieldset );
}

ned.fieldset = function( caption, owner ) {
    owner = ( owner || document.body );
    caption = ( str( caption ) || "New Group" );
    const fieldset = node( "FIELDSET", 0, 0, owner    );
    const legend   = node( "LEGEND"  , 0, 0, fieldset );
    legend.textContent = ( caption );
    return ( fieldset );
}

ned.imports = function( ed ) {
    const m = all( "SCRIPT[src]" );
    if ( ed === "*" ) { return ( m ); }
    const v = ( m ).map( ( se ) => ( se.src ) );
    if ( ed === "+" ) { ed = ned( gid( "sop" ) ); }
    if ( ed instanceof HTMLTextAreaElement ) {
        ed = value = ( v.join( "\n" ) );
        return ( ed );
    }
    return ( v );
};


ned.imports.macros = {
  "+" : "Use or Create SOP Editor"
, "*" : "Return SCRIPT Elements"
};


/*
 ~~~~~~~~~~~~~~~~~~~~~~~~~[ Copy Ops ]~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

function locate_above_any( sender ) {
    if ( sender instanceof Event ) {
        sender = sender.target;
    }
    let ge = sender;
    if ( ge.parentElement.classList.contains( "menu" ) ) {
        ge = ge.parentElement;
    }
    ge = ge.previousElementSibling;
    if (! ge ) {
        console.warn( "Unable to locate previous element" );
        return ( null );
    }
    return ( ge );
}

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

function locate_above_preview( sender ) {
    return locate_above_sibling( "PRE", sender );
}

function locate_above_editor( sender ) {
    return locate_above_sibling( "TEXTAREA", sender );
}

function copy_above_preview( sender ) {
    try {
        const vw = locate_above_preview( sender );
        if (! vw ) {
            throw new Error( "No prior PRE element was found" );
        }
        if ( "function" === typeof node ) {
            node.flash( vw );
        }
        write_clipboard( vw.innerText );
    } catch ( e ) {
        alert ( e );
        throw ( e );
    }
}

function copy_above_editor( sender ) {
    try {
        const ed = locate_above_editor( sender );
        if (! ed ) {
            throw new Error(
                "No prior TEXTAREA element was found"
            );
        }
        if ( "function" === typeof node ) {
            node.flash( ed.value );
        }
        write_clipboard( ed );
    } catch ( e ) {
        alert ( e );
        throw ( e );
    }
}

function copy_above_html( sender ) {
    try {
        const buddy = locate_above_any( sender );
        if (! buddy ) {
            throw new Error(
                "No prior sibling element was found"
            );
        }
        if ( "function" === typeof node ) {
            node.flash( vw );
        }
        write_clipboard( buddy.innerHTML );
    } catch ( e ) {
        alert ( e );
        throw ( e );
    }
}

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

;
; console.log( `Loaded "jsom-combo-api.js" API Module` )
;


/*

</pre>

*/


