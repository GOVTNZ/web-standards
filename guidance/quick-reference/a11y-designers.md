---
layout: default
title: Web accessibility quick reference for designers
draft: true
---

## Introduction

Web accessibility is about making your site and its design inclusive. Making your site accessible increases your potential audience and gives them a better experience.

Most people think about accessibility testing just before something is deployed. This means that if an issue is found, deployment is either held up or the issue is deployed, to be fixed at some later time. Fixing an issue after deployment often means more money and/or time than was originally scheduled. It’s easiest and cheapest to start thinking about accessibility right at the start of your project.

This document is like a ‘pre-flight check’ to help you assess your content in terms of its accessibility. Its intended audience is anyone involved in any kind of design or those responsible for producing HTML/CSS templates.

## Text alternatives

### A note about meaningful information

Something is considered meaningful if it adds to the user's experience. Think carefully about the intent behind an image on a page when you're deciding if it's meaningful or not. Here are 3 examples that might help you decide:

1. A picture of a rose as an example of the different types of flowers in a garden. The rose is meaningful because describing one kind of flower as distinct from a different kind.

2. A picture of a red rose symbolising romance. This rose is meaningful because it conveys an emotion and enriches the page experience.

3. A drawing of a line of roses someone is using as a page border. This rose is purely decorative.

### Images

*	**Images containing meaningful information have descriptive text alternatives.**
	
	Images need text alternatives (alt text, max ~150 characters) to describe their meaning.

*	**Decorative images have empty alt values.**

	The image’s alt text should be empty, e.g. `<img alt="" src="/flower.jpg">`.

*	**Images containing words have alt text containing those words.**
	
	Some images contain text. If that text is meaningful, it needs to be included in the image's alt text.

*	**Linked images use alt text to describe the link’s destination.**

	If the link has an image and text, and the text describes the link’s destination, the alt text should be empty, i.e. `alt=“”`.
	
	If the linked image has more information that isn’t included in the link text, put it in the image’s alt text.
	
*	**Complex images also have longer text alternatives.**

	Alt text may not be long enough to describe a complex image like an infographic or a flowchart. In addition to the alt text, provide a longer text alternative to describe any meaningful information.

For more detailed W3C guidance, see [Requirements for providing text to act as an alternative for images](https://www.w3.org/TR/html51/semantics-embedded-content.html#alt-text).

The W3C also has a [great tutorial about alt text](https://www.w3.org/WAI/tutorials/images/), information about dealing with different image types, and an alt text decision tree.


## Adaptable

*	**Structural and functional components are marked up with the correct HTML elements.**

	If something acts and looks like a heading, mark it up as a heading. If it is a list, mark it up as a list.
	
	If there are visual clues to mark out different blocks of content reflect this in the HTML. For example, a footer section might have a different background colour to separate it from the page content. Mark up with a footer element or with an ARIA label.

*   **Tables are used for data, and not for layout.**

	Use tables for displaying data, rather than for layout purposes. The table’s content should be tabular data, i.e. information in each cell is defined by row and column headings. Don't use tables as a way to layout content.

*   **Data table columns and rows have defined headers.**

	Use column and row header cells, e.g. `<th>` as appropriate to show table structure.
	
*	**Heading levels reflect content hierarchy.**

	Check headings match the correct content hierarchy. For example an `<h3>` under an `<h2>` is a subsection, while an `<h3>` under another `<h3>` is a new section at the same level. 

*	**Reading order must still meaningful without visual styling.**

	Turn off styling to check that the native reading order of the page still flows in a meaningful order. Users that read content sequentially, e.g. screen reader users, need to encounter content in the correct reading order so that they get the same meaning as everyone else.

*	**Icons or symbols used to convey information have a text alternative.**

	Graphic elements, including icons or symbols conveying meaningful information, must have a text alternative.

## Distinguishable

*	**Colour conveying meaning is reinforced using other methods.**

	If colour has a meaning assigned to it (e.g. coloured lines on a chart, coloured link text, different-coloured buttons) use other methods to supplement this information. Examples might include dashed or dotted lines or underlining links.

*	**Audio must be manually started on a web page.**

	If background audio starts automatically, users need to be able to pause, stop, or mute it.

*	**Text on a coloured background is easy to see.**

	There is enough contrast between text and its background so that people can easily read it. The contrast ratio between the colour of the text and the background needs to be at least 4.5:1. Large text (18 pt upwards or bold 14 pt upwards) can use a contrast ratio of 3:1.
	
	The exception to this rule is logos, brand names or decorative text that conveys no meaningful information.
	
	There are several helpful [online tools for checking](https://webtoolkit.govt.nz/guidance/design-and-development/contrast-and-the-use-of-colour/#tools) your contrast ratio.
	
*	**Page content is not obscured if the page is magnified to 200%.**

	If content is obscured when the page zoom is set to 200%, users won’t even be able to scroll to see content.

*	**Text isn't presented as an image or part of an image.**

	Text should not be delivered as an image, but presented using HTML and CSS. The exception to this is text that contains visual content e.g. logos, graphs, screenshots, and diagrams. These images will need alt text, and possibly a long description depending on the complexity of the image.

## Keyboard accessible

*	**Web page or site can be used with only a keyboard.**

	Use keyboard controls to do everything on the web page. This includes completing form fields, accessing menus and submenus, using video or audio controls, and activating links.

*	**Features don't stop you from navigating around the page using just a keyboard.**

	Features like embedded videos, carousels, and plugins can trap keyboard users. Users are able to navigate to and around the feature but can’t navigate away from it. They get trapped in a loop.

## Enough time

*	**Where there is a time limit on an activity,  users can disable or extend the time limit.**

	If online content has a time limit, users need to be able to either turn off, or adjust the time limit before they start. Otherwise they need to be warned about the time limit and given an option to extend it. There are some exceptions to this rule.

*	**Moving or auto-updating content on a page can be paused, stopped or hidden.**

	Moving, blinking, scrolling or auto-updating content that starts automatically is distracting. Users must be able to pause, stop or hide it if they find it too distracting. This also applies to keyboard-only users. The exception to this is all essential activity, e.g. real-time traffic information or weather warnings. 

## Seizures
	
*	**Content does not flash more than 3 times in a second.**
	
	Flashing or blinking content on a web page can trigger seizures in people with photosensitivity.

## Navigable

*	**Users can skip straight to the main page content using a keyboard.**

	Allow non-mouse users to jump straight to the main content of a page by providing a skip link, ARIA landmarks or by having headings at the beginning of sections of content.

*	**Pages have unique, descriptive titles.**

	Each web page’s `<title>` element is descriptive and distinguishes it from every other page on the website.
	
	There are some [great examples of page titles](http://www.w3.org/WAI/gettingstarted/tips/writing.html#provide-informative-unique-page-titles) on the W3C website.

* 	**Information chunks are in a logical, consistent order.**

	Users that navigate sequentially, like keyboard-only users, need to encounter information in a logical, consistent order so that they get the same sense of meaning as everyone else.

*  	**Link text provides its own context.**

	Each link’s purpose is clear from the link’s text content (or image alt text, where applicable) and its immediate context, i.e. the previous heading, paragraph, list item, or table cell it is in.

*	**There are multiple ways for users to navigate around the site.**

	Provide multiple ways for users to locate content within a web site. Examples could be a site map, list of related pages, table of contents, or site search function.

*	**Headings accurately describe their content.**

	Headings must clearly describe the topic or purpose of the content beneath them. This includes groups of form fields that need a title or caption that clearly describes the reason for the grouping.

*	**Current keyboard focus is easily visible.**

	Web pages must visually indicate which element currently has keyboard focus, e.g. with an outline or change in colour.

## Predictable

*	**When a component gets focus it doesn't automatically change context.**

	If a component gets focus, it must not trigger an automatic change of context. Change of context examples include:
	
	* opening a new window
	* moving focus to a different component
	* going to a new page, or
	* significantly re-arranging the content of a page.

*	**Changing a component's setting (e.g. selecting a radio button) doesn't trigger an automatic action.**

	Changing the setting of a component must not cause a change of context. For example, selecting something from a drop-down list should not launch a new page. If you need to have this happen, advise the user of the behaviour beforehand.
	
	**Note:** Clicking on a link, button or tab, while they are considered components, is not considered to be changing its setting. 

*	**Items that are repeated on each page, e.g. menus, are in the same relative order.**

	A website must have consistent presentation and layout of navigation menus, search boxes, etc, to help users locate specific information or functionality more than once.

*	**Items that do the same thing are identified consistently throughout the site.**

	 Components functioning across the site, e.g. icons, checkmarks, or links to PDFs, must have consistent look and wording. This helps people who learn how one page  works find the same functions on other pages.

## Input assistance

*	**Tell people when they make a mistake filling in a form.**

	If people make a mistake filling in a form or performing a transaction (e.g. entering an invalid date), tell them so they won’t wonder what went wrong.

*	**Form fields have a visible and descriptive label.**

	Each form field (text inputs, radio buttons, checkboxes, dropdowns, and textarea) has a label that clearly describes its topic or purpose.

*	**Suggest ways people can fix mistakes in forms.**

	To help users avoid making errors, clearly indicate the expected content or format, ideally by including this information in the field’s label.

*	**Before users submit a form, let them review, change or reverse a legal, financial, or data submission.**

	When submitting a form results in significant commitments, users must be able to reverse the submission, or check/confirm the data before submission.

## Compatible

*	**Validate HTML code.**

	HTML markup needs to be accurately parsed and interpreted by browsers and user agents for correct presentation to users. 

*	**Every component’s name, role, value is programmatically exposed to user agents, including assistive technologies.**

	Native HTML is the best method for ensuring programmatic exposure to user agents. Where other solutions are in use name, role, state, properties, values and changes to any of these needs to be programmatically exposed to user agents, including assistive technologies.