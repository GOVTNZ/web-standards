<div class="details" markdown="1">

#### What you should know about lists

There are 3 types of list in HTML:

* unordered lists 
* ordered lists 
* description or definition lists.  

##### Unordered lists

These lists are used where the order of the list items doesn’t matter. They’re marked up using the `<ul>` element. Each list item is preceded by a simple bullet or similar. 

In unordered lists, the individual list items are marked up as `<li>` elements.

###### Example

```html
<ul>
	<li>An item in an unordered list</li>
	<li>Another list item</li>
	<li>One more item</li>
</ul>
```

###### Ordered lists

These lists are used where the order of the list items has an impact on their meaning. They’re marked up with an `<ol>` element. Each list item in an ordered list is preceded by a number or letter. These can be arabic numerals, roman numerals, upper or lowercase letters.

In ordered lists, the individual list items are marked up as `<li>` elements.

###### Example

```html
<ol>
	<li>First item in an ordered list</li>
	<li>Second list item</li>
	<li>The third and last item in this list</li>
</ol>
```

###### Description or definition lists

These are used for groups of terms and their descriptions or definitions, as might be found in a glossary, or a collection of questions and answers. The list is contained in a `<dl>` element. Each term in the group uses a `<dt>` element and each associated description or definition uses a `<dd>` element. 

###### Example

```html
<dl>
	<dt>browser</dt>
	<dd>A software application for navigation information resources on the World Wide Web</dd>

	<dt>web</dt>
	<dd>The structure spun by a [spider](https://en.wiktionary.org/wiki/spider) using silk secreted from its abdomen.</dd>
	<dd>The World Wide Web hypertext system that operates over the Internet.</dd>
</dl>
```

###### Nested lists

Sometimes one or more list items (`<li>`...`</li>`) can contain another list. The nested list can be any type of list. In these cases the nested list is marked up as a complete list within the `<li>`...`</li>` of the parent list item.

```html
<ul>
	<li>An item in an unordered list</li>
	<li>This list item has the following pieces
		<ol>
			<li>The first piece,</li>
			<li>The second piece, and</li>
			<li>The third piece</li>
		</ol>
	</li>
	<li>One more item</li>
</ul>
```

</div>

#### How to test

1. Scan the page you’re testing for content presented as a list of items. 

2. Open the Web Developer extension and select “Outline”, and “Outline Block level elements”. This will show you, among other things, all the headings, lists and tables on the page. It will also indicate which tag, e.g. `<ul>`, has been used to mark up each element. 

3. Make sure that the list uses the correct HTML markup for the type of list it is:  
	* `<ol>` or `<ul>` and `<li>` for numbered or bulleted lists 
	* `<dl>`, `<dt>` and `<dd>` for description or definition lists.

4. If the list does not use the correct HTML markup, record this as a failure.

5. If the list uses the wrong list type, e.g. a sequence of steps is marked up as a `<ul>` instead of an `<ol>`, record a failure. 

Remember to resize your browser window and test at the site’s other responsive layouts if there is any change page content or layout.
