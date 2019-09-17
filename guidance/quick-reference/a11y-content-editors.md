---
layout: default
title: Web accessibility for content teams
draft: true
---

## Introduction

Web accessibility is about making your site and its content inclusive. Making your content accessible increases your potential audience and gives them a better experience.

Most people think about accessibility testing just before something is deployed. This means that if an issue is found, deployment is either held up or the issue is deployed, to be fixed at some later time. Fixing an issue after deployment often means more money and/or time than was originally scheduled. It’s easiest and cheapest to start thinking about accessibility right at the start of your project.

This document is like a ‘pre-flight check’ to help you assess your content in terms of its accessibility. It also includes considerations to share with business owners to help them set realistic expectations.

## Non-text content

### A note about meaningful information

Something is considered meaningful if it adds to the user's experience. Think carefully about the intent behind an image on a page when you're deciding if it's meaningful or not. Here are 3 examples that might help you decide:

1. A picture of a rose as an example of the different types of flowers in a garden. The rose is meaningful because describing one kind of flower as distinct from a different kind.

2. A picture of a red rose symbolising romance. This rose is meaningful because it conveys an emotion and enriches the page experience.

3. A drawing of a line of roses someone is using as a page border. This rose is purely decorative.


### Images

*	**Images containing meaningful information have descriptive text alternatives.**

	Images need text alternatives (alt text, max. ~150 characters) to describe their meaning.

*	**Decorative images have empty alt values.**

	The image’s alt text should be empty, e.g. `<img alt="" src="/flower.jpg">`.

*	**Images containing words have alt text containing those words.**

	Some images contain text. If that text is meaningful, it needs to be included in the image's alt text.

*	**Linked images use alt text to describe the link’s destination.**

	If the link has an image and text, and the text describes the link’s destination, the alt text should be empty, i.e. `alt=“”`.
	
	If the linked image has more information that isn’t included in the link text, put it in the image’s alt text.
	
*	**Complex images also have longer text alternatives.**

	Alt text may not be long enough to describe a complex image like an infographic or a flowchart. In addition to the alt text, provide a longer text alternative to describe any meaningful information.

For more detailed guidance, see [Requirements for providing text to act as an alternative for images](https://www.w3.org/TR/html51/semantics-embedded-content.html#alt-text).

The W3C website also has a [great tutorial about alt text](https://www.w3.org/WAI/tutorials/images/), information about what you need to do with different types of images and an alt text decision tree.

### Video and/or audio content

*	**For video and audio, provide descriptive text alternatives.**

	Video, audio, and audio-video content need text alternatives that describe all meaningful information conveyed visually or aurally.

*	**For videos with audio, provide captions.**

	Videos with audio content need captions for all meaningful information conveyed through the audio.

## Text content

*	**Instructions do not refer to shape, location or size.**

	Instructions shouldn’t rely solely on sensory characteristics, e.g. shape, visual location, or size. The instruction 'Use the button on the right' doesn’t work if you’re using a different layout. Will the button necessarily be in the same place? An instruction like 'Use the Search button on the right' identifies the button both by both name and location.

*	**Text on a coloured background is easy to see.**

	There is enough contrast between text and its background so that people can easily read it. The contrast ratio between the colour of the text and the background needs to be at least 4.5:1. Large text (18 pt upwards or bold 14 pt upwards) can use a contrast ratio of 3:1. 
	
	The exception to this rule is logos, brand names or decorative text that conveys no meaningful information.

	There are several helpful [online tools for checking](https://webtoolkit.govt.nz/guidance/design-and-development/contrast-and-the-use-of-colour/#tools) your contrast ratio.

*	**Link text provides its own context.**

	Each link’s purpose is clear from the link’s text content (or image alt text, where applicable) and its immediate context, ie, the previous heading, paragraph, list item, or table cell it is in.

*	**Language changes are marked up in the HTML.**

	Any text that differs from the main language of the site (most of the time this will be English), it needs to be identified as by its language code, e.g. “mi” for Māori:

	```
	<p>This section talks about translating English into <span lang="mi">te reo Māori</span></p>.
	```

	The [language codes](https://www.loc.gov/standards/iso639-2/php/code_list.php) can be found in the Standards section of the Library of Congress website.

*	**Pages have a unique, descriptive title.**

	Each web page’s `<title>` element is descriptive and distinguishes it from every other page on the website.

	There are some [great examples of page titles](http://www.w3.org/WAI/gettingstarted/tips/writing.html#provide-informative-unique-page-titles) on the W3C website.

### Headings

*	**Headings are marked up as HTML headings.**

	If something acts and looks like a heading, mark it up as a heading. Similarly, something that is marked up as an HTML heading should look like a heading.

	Don’t choose heading styles based on what they look like. If a level-3 heading looks smaller than a level-5 heading, talk to your designer.

*	**Headings accurately describe their content.**

	Headings must clearly describe the topic or purpose of the content beneath them. This includes groups of form fields that need a title or caption that clearly describes the reason for the grouping.

*	**Heading levels reflect content hierarchy.**

	Check headings match the correct content hierarchy. For example an `<h3>` under an `<h2>` is a subsection, while an `<h3>` under another `<h3>` is a new section at the same level.

### Bulleted or numbered lists

*	**Lists are marked up as HTML lists.**

	If something looks like or acts as a list, marked it up as a list.

### Tables

*	**Tables are used for data, and not for layout.**

	Use tables for displaying data, rather than for layout purposes. The table’s content should be tabular data, i.e. it has clear relationships with row and column headings. Don't use tables as a way to layout content.

*	**Data table columns and rows have headers.**

	Use column and row header cells, e.g. `<th>` as appropriate to show table structure.

## Navigating the page

*	**Web page can be used with only a keyboard.**

	You must be able to use keyboard controls to do everything on a web page. This includes completing form fields, accessing menus and submenus, using video or audio controls, and clicking links.

*	**Keyboard focus is easily visible.**

	When someone is tabbing through a web page they must easily be able to see where they are, e.g. with an outline or change in colour.

*	**Features don't stop you from navigating around the page using just a keyboard.**

	Features like embedded videos, carousels, and plugins can trap keyboard users. Users are able to navigate to and around the feature but can’t navigate away from it. They get trapped in a loop.

*	**Users can skip straight to the main page content using a keyboard.**

	Allow keyboard users to jump straight to the main content of a page by providing a skip link, ARIA landmarks or by having headings at the beginning of sections of content.

## Forms

*	**Form fields have a visible, descriptive label.**

	Each form field text inputs, radio buttons, checkboxes, dropdowns, and textareas) has a label that clearly describes its topic or purpose.

*	**Form fields that have been grouped together have a group title or caption.**

	Each group of form fields like radio buttons or checkboxes needs a title or caption, e.g. `<legend>` that clearly describes the reason for the grouping.

*	**Instructions for entering information are clear and easily understood.**

	To help users avoid making errors, clearly indicate the expected content or format, ideally by including this information in the field’s label.

*	**Error messages help users fix them.**

	Error messages should clearly indicate which fields have errors and how users can fix them.

	There are some helpful [examples of clear instructions and error messages](http://www.w3.org/WAI/gettingstarted/tips/writing.html#provide-clear-instructions) on the W3C website.