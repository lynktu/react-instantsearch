---
title: Autocomplete Menu
mainTitle: Guides
layout: main.pug
category: guide
withHeadings: true
navWeight: 6
editable: true
githubSource: docs/docgen/src/getting-started/best-practices.md
---


You can build an autocomplete menu with React InstantSearch that uses an external autocomplete component. It takes advantage of the [`connectAutoComplete`](connectors/connectAutoComplete.html) connector.

[Read the examples](https://github.com/algolia/react-instantsearch/tree/master/packages/react-instantsearch/examples/autocomplete)
 showing you how to build an autocomplete menu that will let you:
* display hits from different indices
* have a textarea able to propose suggestions like mentions.

Those examples use advanced concepts from React InstantSearch. If you're not familiar with
them you can read their guide first:

* [Connectors](guide/Connectors.html)
* [Multi Index](guide/Multi_index.html)

<div class="guide-nav">
    <div class="guide-nav-left">
        Previous: <a href="guide/Server-Side_rendering.html">← Server-side Rendering</a>
    </div>
    <div class="guide-nav-right">
        Next: <a href="guide/Migration_guides.html">Migration guides →</a>
    </div>
</div>