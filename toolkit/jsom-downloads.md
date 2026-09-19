<head> <link rel="icon" href="./favicon.ico" /> </head>

<style>
@import url("./../style/jsom-devops.css");
</style>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[auto]:
<http://dave-omega/app/jarvis/auto/>
"Omega Edition"

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[b-jsom-combo]:  <http://dave-omega/app/bluto/api/jsom-combo-api.js>
[b-copy-ops]:    <http://dave-omega/app/bluto/api/copy-ops.js>
[b-gather-ops]:  <http://dave-omega/app/bluto/api/gather-ops.js>
[b-gideon-ops]:  <http://dave-omega/app/bluto/api/gideon-ops.js>
[b-list-ops]:    <http://dave-omega/app/bluto/api/list-ops.js>
[b-message-ops]: <http://dave-omega/app/bluto/api/message-ops.js>
[b-zed-ops]:     <http://dave-omega/app/bluto/api/zed-ops.js>

[b-acquire-gem]:          <http://dave-omega/app/bluto/api/gems/acquire.js>
[b-describe-gem]:         <http://dave-omega/app/bluto/api/gems/describe.js>
[b-docify-gem]:           <http://dave-omega/app/bluto/api/gems/docify.js>
[b-list-to-datalist-gem]: <http://dave-omega/app/bluto/api/gems/list-to-datalist.js>
[b-suggestions-gem]:      <http://dave-omega/app/bluto/api/gems/suggestions.js>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[m-jsom-combo]:  <https://nyteowldave.github.io/std/api/bluto/jsom-combo-api.js>
[m-copy-ops]:    <https://nyteowldave.github.io/std/api/bluto/copy-ops.js>
[m-gather-ops]:  <https://nyteowldave.github.io/std/api/bluto/gather-ops.js>
[m-gideon-ops]:  <https://nyteowldave.github.io/std/api/bluto/gideon-ops.js>
[m-list-ops]:    <https://nyteowldave.github.io/std/api/bluto/list-ops.js>
[m-message-ops]: <https://nyteowldave.github.io/std/api/bluto/message-ops.js>
[m-zed-ops]:     <https://nyteowldave.github.io/std/api/bluto/zed-ops.js>

[m-acquire-gem]:          <https://nyteowldave.github.io/std/api/bluto/gems/acquire.js>
[m-describe-gem]:         <https://nyteowldave.github.io/std/api/bluto/gems/describe.js>
[m-docify-gem]:           <https://nyteowldave.github.io/std/api/bluto/gems/docify.js>
[m-list-to-datalist-gem]: <https://nyteowldave.github.io/std/api/bluto/gems/list-to-datalist.js>
[m-suggestions-gem]:      <https://nyteowldave.github.io/std/api/bluto/gems/suggestions.js>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[morpheus]:
<https://nyteowldave.github.io>
"Morpheus Home"

[m-prolog-beta]:
<https://nyteowldave.github.io/std/api/gems/prolog-beta.js>
"Morpheus Edition"

[m-interpreter-lite]:
<https://nyteowldave.github.io/std/api/gems/interpreter-lite.js>
"Morpheus Edition"

[m-install]:
<https://nyteowldave.github.io/std/api/install.js>
"Morpheus Edition"

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[me-omega]:
<http://dave-omega/app/bluto/toolkit/jsom-downloads.html>
"Omega Edition"

----------------------------------------------------------------

# JSOM Downloads

> [Omega][me-omega]
> [Bluto Menu](./../bluto-menu.html)

> [JSOM DevOps](./jsom-devops.html)
> [JSOM Script Editor](./jsom-script-editor.html)

> [File System](./)

----------------------------------------------------------------

# Stylesheets

----------------------------------------------------------------

- [Neo City](https://nyteowldave.neocities.org/style.css)
- [Bluto](http://dave-omega/app/bluto/style/jsom-devops.css)

----------------------------------------------------------------

# [Morpheus][morpheus]

## Requirements

- [prolog-beta.js][m-prolog-beta]
- [interpreter-lite.js][m-interpreter-lite]
- [install.js][m-install]

----------------------------------------------------------------

## Optional Combo

- [jsom-combo-api.js][m-jsom-combo]

----------------------------------------------------------------

## Optional Discrete

- [copy-ops.js][m-copy-ops]
- [gather-ops.js][m-gather-ops]
- [gideon-ops.js][m-gideon-ops]
- [list-ops.js][m-list-ops]
- [message-ops.js][m-message-ops]
- [zed-ops.js][m-zed-ops]

## Optional Gems

- [acquire.js][m-acquire-gem]
- [describe.js][m-describe-gem]
- [docify.js][m-docify-gem]
- [list-to-datalist.js][m-list-to-datalist-gem]
- [suggestions.js][m-suggestions-gem]

----------------------------------------------------------------

# [Bluto ~ Omega Edition](./../bluto-menu.html)

----------------------------------------------------------------

## Combo Module

- [jsom-combo-api.js][b-jsom-combo]

----------------------------------------------------------------

## Discrete Modules

- [copy-ops.js][b-copy-ops]
- [gather-ops.js][b-gather-ops]
- [gideon-ops.js][b-gideon-ops]
- [list-ops.js][b-list-ops]
- [message-ops.js][b-message-ops]
- [zed-ops.js][b-zed-ops]

----------------------------------------------------------------

## Gem Modules

- [acquire.js][b-acquire-gem]
- [describe.js][b-describe-gem]
- [docify.js][b-docify-gem]
- [list-to-datalist.js][b-list-to-datalist-gem]
- [suggestions.js][b-suggestions-gem]

----------------------------------------------------------------

# Comments

This page is dedicated to facilitating the __Download__ of the
various __API Modules__ and __Stylesheets__ for Web Apps that
require these features.

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

