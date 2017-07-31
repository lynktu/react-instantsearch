---
title: Conditional Display
mainTitle: Guides
layout: main.pug
category: guide
withHeadings: true
navWeight: 6
editable: true
githubSource: docs/docgen/src/getting-started/best-practices.md
---


Using our connector and [`createConnector`](guide/Custom_connectors.html) approach, you can conditionally display content based on the search state.

## Displaying content when the query is empty

```jsx
const Content = createConnector({
    displayName: 'ConditionalQuery',
    getProvidedProps(props, searchState) {
      return {query: searchState.query};
    },
 })(({query}) => {
    const content = query
      ? <div>The query {query} exists</div>
      : <div>No query</div>;
    return <div>{content}</div>;
 });
```

## Displaying content when there's no results

```jsx
const content = createConnector({
    displayName: 'ConditionalResults',
    getProvidedProps(props, searchState, searchResults) {
      const noResults = searchResults.results ? searchResults.results.nbHits === 0 : false;
      return {query: searchState.query, noResults};
    },
 })(({noResults, query}) => {
    const content = noResults
      ? <div>No results found for {query}</div>
      : <div>Some results</div>;
    return <div>{content}</div>;
 });
```

## Displaying content when there's an error

```jsx
const content = createConnector({
    displayName: 'ConditionalError',
    getProvidedProps(props, searchState, searchResults) {
      return {error: searchResults.error};
    },
 })(({error}) => {
    const content = error
      ? <div>An error occurred: {error.message}</div>
      : <div>Some results</div>;
    return <div>{content}</div>;
 });
```

## Displaying content when loading

In slow user network situations you might want to know when the search results are loading.

```jsx
const content = createConnector({
    displayName: 'ConditionalError',
    getProvidedProps(props, searchState, searchResults) {
      return {loading: searchResults.searching};
    },
})(({loading}) => {
    const content = loading
      ? <div>We are loading</div>
      : <div>Search finished</div>;
    return <div>{content}</div>;
 });
```

Alternatively, if you're using the search in List feature then you can know when the search results are loading by doing:

```jsx
const content = createConnector({
    displayName: 'ConditionalError',
    getProvidedProps(props, searchState, searchResults) {
      return {loading: searchResults.searchingForFacetValues};
    },
})(({loading}) => {
    const content = loading
      ? <div>We are loading</div>
      : <div>Search finished</div>;
    return <div>{content}</div>;
 });
```

<div class="guide-nav">
    <div class="guide-nav-left">
        Previous: <a href="guide/Custom_connectors.html">← Custom Connectors</a>
    </div>
    <div class="guide-nav-right">
        Next: <a href="guide/React_native.html">React native →</a>
    </div>
</div>
