**Impact of failure:** Failing this requirement means some people are denied contextual information which helps them understand how content is structured on the page.

**Related WCAG 2.0 success criteria:** [1.3.1 Information and Relationships](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html).

<div class="details" markdown="1">

#### What you should know about headings

Information, structure, and relationships conveyed through presentation must also be reflected with proper HTML markup.

A heading introduces or describes the content that follows it. It should also stand out from the rest of the page. If something looks and acts like a heading, it should be marked up as an HTML heading. Similarly, something that is marked up as an HTML heading should look and act like a heading.

Content headings, as well as context, dictate a parent-child relationship between content elements on a page. The section you’re reading now is a child of “Test 2: Headings”, which in turn is a child of “Tests for each page”. Those parent-child relationship presented visually on the page must be faithfully mirrored in the hierarchy of `<h1>` to `<h6>` headings in the HTML markup. 

Think about whether your content is structured logically, whether the content structure is reflected in a clear hierarchical heading order, and whether that logical structure is accurately reflected in the hierarchy of headings in the markup. 

Skipping heading levels, e.g. going from `<h1>` to `<h3>`, is not advised, but it is not a WCAG failure. A level 3 heading `<h3>` can be a subheading under a level 1 `<h1>` heading, because an `<h3>` is of a lower rank than `<h1>`. But the reverse, using an `<h2>` as a subheading to an `<h3>` is considered a failure: where an `<h2>` follows an `<h3>`, it means the previous block of content has terminated and the content hierarchy has risen a level. If that doesn’t match how the content hierarchy is visually presented on the page, it’s an accessibility failure.

Note: the heading that introduces the main content is usually the heading with the highest rank on the page (usually an `<h1>`), even if it isn’t the first heading on the page. Often menus or navigation items have headings and appear before the main content heading on the page. This is fine as long as they’re a lower ranked heading than the one introducing the main content.

</div>

#### How to test

1. If you have device mode on or the developer tools still open, close them.

2. On the page you’re testing, go to the Web Developer extension and select “Outline”, then click:

	* “Show Element Tag Names”, and

	* “Outline Headings”.

	 This will add a border around anything marked up as a heading and will show which heading tag, e.g. `<h3>`, has been used.

3. Record a failure if content is outlined as a heading, but doesn’t: 

	* look like a heading, e.g. it is not larger and bolder, or

	* act like a heading, e.g. it doesn’t introduce or describe the content after it. 

4. If content looks like and acts like a heading, but isn’t outlined as a heading, inspect its code to see if the heading is wrapped in a basic element like a <div> or <p> with an ARIA role=“heading” and an aria-level attribute to show what level it is. For example, `<p role=”heading” aria-level=”1”>About Us</p>`. If it isn’t, record this as a failure. 

5. Check each heading to make sure the heading level is the appropriate given its position in the page’s content hierarchy. Otherwise, record this as a failure. 

6. Remember to resize your browser window and test at the site’s other responsive layout widths if there is any change page content or layout.
