---
layout: assessment-guide
title: Web Accessibility Standard 1.0 Assessment Guide
draft: true
---

How to test websites and intranets against the New Zealand Government Web Accessibility Standard

Version 1.3
19 May 2016

Prepared by the New Zealand Goverment Web Standards Working Group
[web.standards@dia.govt.nz](mailto:web.standards@dia.govt.nz)

## Contents

*	[Why accessibility?](#why-accessibility)
*	[About this Guide](#about-this-guide)
*	[Tools used in this Guide](#tools-used-in-this-guide)
*	[1.1 Text Alternatives](#text-alternatives)
*	[1.2 Time-based Media](#time-based-media-1)
*	[1.3 Adaptable](#adaptable)
*	[1.4 Distinguishable](#distinguishable)
*	[2.1 Keyboard Accessible](#keyboard-accessible)
*	[2.2 Enough Time](#enough-time)
*	[2.3 Seizures](#seizures)
*	[2.4 Navigable](#navigable)
*	[3.1 Readable](#readable)
*	[3.2 Predictable](#predictable)
*	[3.3 Input Assistance](#input-assistance)
*	[4.1 Compatible](#compatible)
*	[Glossary](#glossary)

## Why accessibility?

Web accessibility is the focus of the New Zealand Government Web Accessibility Standard. Delivering accessible websites benefits a range of people, particularly people with disabilities.

For example, providing text alternatives to non-text content, such as images, benefits people who have difficulty perceiving or understanding visual content.

Additionally, text alternatives help users who have turned off images to conserve the bandwidth of their slow or costly Internet connections. Text alternatives also support the ability of users to search for non-text content, and the repurposing of content in a variety of ways.

Ensuring that there is sufficient contrast between text and its background helps people with low vision, people who are colour blind, and people who might be viewing a web page in a bright environment.

Making sure that content's structure (e.g. what's a heading, what's a list, what's a table) is available in the HTML markup, and that everything you can do with a mouse can be done via keyboard, goes a long way to making sure that people who rely on different input devices or assistive technologies have access to the same structured information and interactivity as everyone else.

The requirements in the Web Accessibility Standard address all of the above scenarios and more in order that as many people as possible, especially people with disabilities, can access the information and services we put online.

## About this Guide

<div class="ed">Add note re intended audience, i.e. non-technical, the consequent limitations to comprehensiveness of tests in the guide, and availability of more detailed, technical tests from other sources (e.g. ...).</div>

The Web Accessibility Standard 1.0 Assessment Guide gives advice on how to test website and intranet pages against the WCAG 2.0 success criteria required by the New Zealand Government Web Accessibility Standard.

The Guide:

*	includes tests that can be used successfully by many people who are not experts in web technologies
*	excludes tests that require advanced training and expertise in assistive technologies
*	excludes an introduction to common testing tools and assistive technologies.

Using this Guide and some simple tools, you can discover which success criteria a web page meets and which it doesn't.

"Web page" includes normal web pages, PDFs and Word documents, as well as what are commonly referred to as web applications.

### Knowledge and skill required

Some parts of the Web Accessibility Standard are easy enough that almost anyone should be able to test against them using the instructions in this guide. Other parts will require some degree of technical skill. Depending on your agency and resources, it may make sense for internal staff to assess against the easier parts of the Web Standards, and outsource the remaining, more technically difficult parts, to external experts.

#### Technical difficulty ratings

Each of the WCAG 2.0 success criteria in this Guide have been given one of three ratings indicating how technically difficult they are to assess. Below is a description of the three ratings, and which WCAG 2.0 success criteria each applies to.

*	<span class="easy">Easy</span>: With the tools and step-by-step instructions discussed in this Guide, most users can easily assess a web page against these success criteria. Some familiarity with simple HTML and how web pages work is helpful.
	*	[1.2.1 Audio-only and Video-only (Prerecorded)](#audio-only-and-video-only-prerecorded-a)
	*	[1.2.2 Captions (Prerecorded)](#captions-prerecorded-a)
	*	[1.2.3 Audio Description or Media Alternative](#audio-description-or-media-alternative-a)
	*	[1.2.4 Captions (Live)](#captions-live-aa)
	*	[1.2.5 Audio Description (Prerecorded)](#audio-description-prerecorded-aa)
	*	[1.3.2 Meaningful Sequence](#meaningful-sequence-a)
	*	[1.3.3 Sensory Characteristics](#sensory-characteristics-a)
	*	[1.4.1 Use of Color](#use-of-color-a)
	*	[1.4.2 Audio Control](#audio-control-a)
	*	[1.4.3 Contrast (Minimum)](#contrast-minimum-aa)
	*	[1.4.4 Resizing Text](#resizing-text-aa)
	*	[2.1.1 Keyboard](#keyboard-a)
	*	[2.1.2 No Keyboard Trap](#no-keyboard-trap-a)
	*	[2.2.1 Timing Adjustable](#timing-adjustable-a)
	*	[2.2.2 Pause, Stop, Hide](#pause-stop-hide-a)
	*	[2.3.1 Three Flashes or Below Threshold](#three-flashes-or-below-threshold-a)
	*	[2.4.2 Page Titled](#page-titled-a)
	*	[2.4.3 Focus Order](#focus-order-a)
	*	[2.4.5 Multiple Ways](#multiple-ways-aa)
	*	[2.4.6 Headings and Labels](#headings-and-labels-aa)
	*	[2.4.7 Focus Visible](#focus-visible-aa)
	*	[3.1.1 Language of Page](#language-of-page-a)
	*	[3.2.3 Consistent Navigation](#consistent-navigation-aa)
	*	[3.2.4 Consistent Identification](#consistent-identification-aa)
	*	[3.3.1 Error Identification](#error-identification-a)
	*	[3.3.2 Labels or Instructions](#labels-or-instructions-a)
	*	[3.3.3 Error Suggestion](#error-suggestion-aa)
	*	[3.3.4 Error Prevention (Legal, Financial, Data)](#error-prevention-legal-financial-data-aa)
*	<span class="medium">Medium</span>: Assessing these success criteria requires a basic understanding of HTML, CSS, and how browsers work.
	*	[1.1.1 Non-text Content](#non-text-content-a)
	*	[1.4.5 Images of Text](#images-of-text-aa)
	*	[2.4.1 Bypass Blocks](#bypass-blocks-a)
	*	[2.4.4 Link Purpose (In Context)](#link-purpose-in-context-a)
	*	[3.1.1 Language of Parts](#language-of-parts-aa)
	*	[3.2.1 On Focus](#on-focus-a)
	*	[3.2.2 On Input](#on-input-a)
	*	[4.1.1 Parsing](#parsing-a)
*	<span class="hard">Hard</span>: These success criteria are highly technical. Testing against them requires specialist knowledge of HTML, CSS, JavaScript, WCAG, ARIA, user agents, and how they work together.
	*	[1.3.1 Info and Relationships](#info-and-relationships-a)
	*	[4.1.2 Name, Role, Value](#name-role-value-a)

These three ratings are by no means exact. They are just indicators to help you figure out, depending on the assessor's knowledge, skill and comfort level, what parts of the assessment you can perform in-house, and what parts you might need an expert for.

### More help

This assessment guide is not an absolute and comprehensive guide to testing every possible way to meet the WCAG 2.0 success criteria. For each WCAG 2.0 success criterion, more information, guidance, examples and definitions are available in the [Understanding WCAG 2.0](http://www.w3.org/TR/UNDERSTANDING-WCAG20/Overview.html) and [Techniques for WCAG 2.0](http://www.w3.org/TR/WCAG20-TECHS/) documents from the W3C. See also the customisable quick reference guide, [How to Meet WCAG 2.0](https://www.w3.org/WAI/WCAG20/quickref/).

Some WCAG 2.0 success criteria are more complicated than others and require a certain degree of technical knowledge to assess. If in doubt as to whether a particular page or aspect of the page meets this or that success criterion, review the WCAG 2.0 sufficient techniques associated with that success criterion for guidance on what to look for. If the page or aspect of the page implements one of the relevant sufficient techniques, you can consider the applicable success criterion met.

If you still have difficulty determining if a page meets a certain success criterion, you may have to engage expert help.

## Tools used in this Guide

*	Firefox or Chrome with the [Web Developer extension](http://chrispederick.com/work/web-developer/)
*	Developer tools: Pressing F12 in Firefox, Chrome, or IE8 and up, opens the browser's code inspection and developer tools.
*	[WAVE Web Accessibility Evaluation Tool](http://wave.webaim.org/)
*	[Paciello Group Colour Contrast Analyser](http://www.paciellogroup.com/resources/contrastAnalyser)
*	[Colour Contrast Check at Snook.ca](http://snook.ca/technical/colour_contrast/colour.html)
*	[W3C Validator](http://validator.w3.org/)

## 1.1 Text Alternatives

All non-text content must also be available in text.

### 1.1.1 Non-text Content (A)

All non-text information (e.g. photos, drawings, charts, graphs, icons, audio/video, Flash objects, form controls) must have an appropriate, accessible text equivalent.

#### Reason for testing

To ensure that information conveyed by non-text content is available in a text alternative.

#### Technical difficulty

<span class="medium">Medium</span>

#### Notes

<div class="ed">Probably need a note about use of `aria-label` and `aria-labelledby` as way to provide text alternative.</div>

##### Images

An image's text equivalent doesn't necessarily describe the image, but should serve as a textual replacement for it. What to look for in each case will depend on how the image has been added to the page. If the image was inserted using the `img` element, the `img` tag must have an `alt` attribute with a short text alternative. If the image was added using CSS, text that is located on the page but visually hidden might be acting as the image's text alternative.

For more complex images, or things like Flash objects, where a short text alternative is insufficient to fully capture the meaning or purpose of the object, a longer text alternative is required. This longer text equivalent might exist as text elsewhere on the page or on another page in a way that the user can easily find. Note that in almost all cases, an MS Word or PDF document will not qualify as an accessible text alternative.

If non-text content is primarily intended to create a specific sensory or emotional experience, e.g. a photo of a mountain range or drawing of a red rose, a simple text alternative at least identifies and describes the purpose of the non-text content.

Purely decorative or presentational images that have no functionality should ideally be added using CSS with no alternative text in the HTML content. But if they are added using the `img` element, they should have an empty or null `alt` attribute, i.e. `alt=""`.

For detailed examples of the different ways a text alternative might be provided, see [Requirements for providing text to act as an alternative for images](https://www.w3.org/TR/html51/semantics-embedded-content.html#alt-text).

##### Form controls

Form inputs and buttons must be accompanied by text that describes their purpose. For most form inputs, this text will be provided in an associated `label` element. For typical buttons, the text in the button itself should describe what the button does. Form image buttons also need text alternatives, which should be provided using the `alt` attribute (`<input type="image" src="image.jpg" alt="Submit feedback">`). 

For the purposes of this assessment guide, the requirement for form controls and inputs to have text alternatives is  addressed by [4.1.2 Name, Role, Value](#name-role-value-a).

##### Time-based media

Time-based media, e.g. audio and video, is made accessible by applying the requirements in [1.2 Time-based Media](#time-based-media-1).

##### CAPTCHA

For an image-based CAPTCHA, a text alternative is required to describe the purpose of the CAPTCHA, but not its content. Additionally, at least one other form of CAPTCHA is provided that uses a different perceptual modality, e.g. an audio CAPTCHA.

#### Exceptions

The Web Accessibility Standard currently exempts complex visual maps that associate information with one or more points or shapes that cannot reasonably be represented by common identifiers such as postal addresses or the names of specific places or regions from the need to have a full text alternative that serves the equivalent purpose. However, a simple text alternative at least identifies and describes the purpose of the complex visual map.

#### Tools required

*	[Web Developer extension](http://chrispederick.com/work/web-developer/)
*	Developer tools (F12)

#### How to test

##### Images

1.	Open the web page to be tested.
2.	Locate all images, and static (not time-based) Flash and Silverlight objects on the page. This might be done in a number of ways.
	*	With the Web Developer extension in Firefox or Chrome, select "Images > Display Alt Attributes", or "Images > Outline All Images", or "Images > Outline Background Images", for various effects that will help you find the images on the page.
	*	Review the HTML markup using the browser's View Source feature. For example, you might search for "<img" to find instances of the `img` element, or `<embed` or `<object` to find elements used to load Flash or Silverlight content.
	*	Using the browser's Developer tools, inspect items on the page that you think might be images or static media objects and confirm if they are part of the HTML page or added via CSS.
3.	For each instance of non-text content that is not purely decorative, check for a text alternative.
	*	Where an `img` element has an associated `alt` attribute value, in most cases, that is its text alternative. Check that it serves as an effective text replacement of the image. 
	* If the image is more complex, a full text equivalent may require more text than can be provided through a short text alternative such as provided in an `alt` attribute. In that case, check that there is additional text information clearly associated with, and that serves as a functional text replacement for, that image. This might be provided in text that is next to the image, or text elsewhere on the page or on another page whose location is referenced by an `aria-describedby` or `longdesc` attribute on the image. For detailed examples of the different ways a text alternative might be provided, see the W3C's [Resources on Alternative Text for Images](https://www.w3.org/WAI/alt/#resources).
	*	If the image is purely decorative, check that it is loaded using CSS, or, if it uses an `img` element, its `alt` attribute is empty, i.e., `alt=""`.
	*	If the image or non-text content does not use an `img` element, the image could be a CSS background image, or it could be a Flash or Silverlight object. Use the Developer tools to find the HTML element that the non-text content is attached to, and check for one of the following:
		* on the non-text content's HTML element, an `aria-label` attribute whose value serves as a text alternative
		* on the non-text content's HTML element, an `aria-labelledby` attribute referencing the `id` value of another element in the HTML whose text serves as a text alernative
		* text on the page next to the non-text content, or text that is visually hidden, that serves as the text alternative. For each such text alternative, check that:
			* it is an appropriate functional replacement for the non-text content
			* it conveys the same information or function as the non-text content, and 
			* is not hidden with `display:none` in the CSS or `aria-hidden="true"` in the HTML. 
	* If the image is a CAPTCHA, check that the text alternative identifies it as such.
	* If the non-text content is a Flash or Silverlight object, [check the body of the `object` element](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20160317/H53) for a text alternative.


#### Failure points

*	The image is not a purely decorative image and does not have a text alternative.
*	The text alternative does not convey the same information or function as the non-text content.
*	An image uses colour differences to convey information, but the text alternative does not include the information conveyed by colour in the image.
*	The text alternative is not an alternative, e.g. it is a filename or generic placeholder text.
*	The text alternative of non-text content that serves as a CAPTCHA does not identify it as a CAPTCHA.

## 1.2 Time-based Media

All time-based media must have an alternative provided. This includes media that is audio- or video-only, synchronised audio and video, as well as audio and/or video combined with interaction.

### 1.2.1 Audio-only and Video-only (Prerecorded) (A)

The Web Accessibility Standard currently requires that a [descriptive text transcript](#descriptive-text-transcript) be provided in all cases for prerecorded audio-only or prerecorded video-only content.

#### Reason for testing

To ensure that anyone can get similar information from audio or video content, even if they have sight or hearing disabilities.

#### Technical difficulty

<span class="easy">Easy</span>

#### Test at the same time

[1.2.3 Audio Description or Media Alternative](#audio-description-or-media-alternative-a)

#### How to test

1.	Open the web page to be tested. Review the page for any audio-only or video-only content and check that a descriptive text transcript is available.
2.	Review the transcript. Check that:
	*	it provides a correct text description of the time-based visual or auditory information;
	*	it is clearly labelled as being a transcript of the audio-only or video-only content.

#### Failure points

*	The audio-only or video-only content does not have a descriptive text transcript.
*	The descriptive text transcript gives different or inaccurate information than that provided by the audio-only or video-only content.
*	The descriptive text transcript is not clearly labelled as transcript of the audio-only or video-only content.

### 1.2.2 Captions (Prerecorded) (A)

All prerecorded [synchronized media](#synchronized-media) must have [captions](#captions). Captions provide an onscreen textual representation of all the meaningful content in the audio track.

Note that if the media presents [high-stakes information or services](#high-stakes-information-or-services) , it must have captions when it is published. If it does not present high-stakes content, it must make captions available within 10 business days of its publication.

#### Reason for testing

To ensure that people who are deaf or hard of hearing have access to the meaningful audio content of synchronized media.

#### Technical difficulty

<span class="easy">Easy</span>

#### Test at the same time

[1.2.1 Audio-only and Video-only (Prerecorded)](#audio-only-and-video-only-prerecorded-a)

#### Exceptions

When the synchronized media is a media alternative for text and clearly labelled as such.

#### How to test

1.	Open the web page to be tested.
2.	Look through the page for any synchronized media content.
3.	Play the media. Check that:
4.	all meaningful content in the audio track is available in captions;
5.	the captions provide an accurate rendition of the meaningful audio content;

*	if captions are not available, the media was published less than 10 business days ago, and does not present content that is high-stakes.

#### Failure points

*	The synchronized media content is high-stakes and has no captions.
*	The synchronized media is more than 10 business days old and has no captions.
*	The captions don't provide an accurate rendition of the meaningful audio information. (Note that automated captioning, e.g. that offered by YouTube, usually cannot be relied on to provide sufficient accuracy in the New Zealand context.)

### 1.2.3 Audio Description or Media Alternative (A)

The Web Accessibility Standard currently requires that a descriptive text transcript (i.e. alternative for time-based media) be provided in all cases for prerecorded synchronized media.

Audio descriptions are not mandatory for synchronized media, but are still recommended when the media delivers high-stakes information or services.

#### Reason for testing

To ensure that people who are blind or vision impaired have access to the visual information in synchronized media content.

#### Technical difficulty

<span class="easy">Easy</span>

#### Test at the same time

[1.2.1 Audio-only and Video-only (Prerecorded)](#audio-only-and-video-only-prerecorded-a)

#### Exceptions

When the synchronized media is a media alternative for text and clearly labelled as such.

#### How to test

1.	Open the web page to be tested.
2.	Look through the page for any synchronized media content.
3.	For each instance of synchronized media, check that a descriptive text transcript is available and that:
	*	when compared to the synchronized media, it provides a correct text description of the time-based visual and auditory information;
	*	it is clearly labelled as being a descriptive text transcript for synchronized media.

#### Failure points

*	The synchronized media content does not have a descriptive text transcript.
*	The descriptive text transcript gives different information or inaccurate information.
*	The descriptive transcript is not clearly labelled as being a descriptive text transcript for the synchronized media.

### 1.2.4 Captions (Live) (AA)

Live synchronized media that presents high-stakes information or services must have visible captions. (If this type of content is not high-stakes, it is exempt from this requirement on New Zealand government websites.)

Live is also known as real-time, e.g. Parliament TV broadcast over the Internet.

Note that live synchronized media left on a website becomes prerecorded and needs to be tested against 1.2.1 Audio/Video only (prerecorded), regardless of whether or not it presents high-stakes content.

#### Reason for testing

To ensure that people who are deaf or hard of hearing have access to the meaningful audio content of real-time synchronized media.

#### Technical difficulty

<span class="easy">Easy</span>

#### Test at the same time

[1.2.1 Audio-only and Video-only (Prerecorded)](#audio-only-and-video-only-prerecorded-a)

#### Exceptions

*	When the synchronized media delivers high-stakes content.
*	When the equivalent information or services are simultaneously published as text.

#### How to test

1.	Open the web page to be tested.
2.	Look through the page for any live synchronized media content.
3.	Play the media. If it presents high-stakes material, check that:
	*	all meaningful content in the audio track is available in captions;
	*	the captions provide an accurate rendition of the meaningful audio content.

#### Failure points

*	The synchronized media is high-stakes and has no captions.

### 1.2.5 Audio Description (Prerecorded) (AA)

Beyond a descriptive text transcript, audio description provides an additional degree of accessibility for blind and vision impaired users. Audio description is an extra audio track that provides, during pauses in dialogue, information that's delivered in the video track but not described or included in the main audio track.

The Web Accessibility Standard currently exempts all synchronized media from the requirement to provide audio descriptions. While not mandatory, audio descriptions are still recommended when the media delivers high-stakes information or services.

#### Reason for testing

To ensure that people who are blind or vision impaired have access to the visual information in synchronized media content.

#### Technical difficulty

<span class="easy">Easy</span>

#### Test at the same time

[1.2.3 Audio Description or Media Alternative](#audio-description-or-media-alternative-a)

#### Exceptions

All synchronized media are currently exempt from the requirement to provide audio descriptions.

#### How to test

1.	Open the web page to be tested.
2.	Look through the page for any synchronized media content.
3.	Play the media. Check that there is audio description and that it provides a correct account of the important and meaningful information in the video track.

#### Failure points

*	The synchronized media content does not have audio description.
*	The audio description gives different information or inaccurate information.

## 1.3 Adaptable

Content's structure and information must be able to be presented in different ways so that it can be perceived by all users through the software or devices they use, e.g. through a standard browser, a phone or computer screen, a Braille display, or a screen reader.

### 1.3.1 Info and Relationships (A)

This is a highly technical success criterion.

All content structure and relationships conveyed through presentation must be present in the HTML markup, i.e. they must be able to be [programmatically determined](#programmatically-determined). For example, text that that visually appears as a heading must have appropriate markup that programmatically identifies it as a heading and establishes its relationship with the content that follows it. Similarly, content presented as a list, a form input and label, a blockquote, or link, etc. needs to have the appropriate markup to make sure that its structure and relationships are programmatically available.

#### Reason for testing

To ensure that information and relationships that are conveyed through presentation are preserved when the presentation changes. Then people with disabilities can still follow the information and structure by using assistive technologies (ATs).

#### Technical difficulty

<span class="hard">Hard</span>

#### Test at the same time

*	[4.1.1 Parsing](#parsing-a)
*	[4.1.2 Name, Role, Value](#name-role-value-a)

#### Tools required

Developer tools (F12)

#### How to test

1.	Open the web page to be tested.
2.	Open the Developer tools (F12)

<table>
	<thead>
		<tr>
			<th>Look at:</th>
			<th>Ensure that:</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>All images &amp; styled text</td>
			<td>Images of text or styled passages of text that convey structural information also use proper semantic HTML markup to convey that structural information. For example, content visually presented as a list of items is marked up using HTML list markup, <code>ol</code> when the items have a meaningful order, and <code>ul</code> where they do not. Similarly, where an image of text, or a passage of text, is used to represent a heading, it is enclosed in an HTML heading (<code>h1</code>–<code>h6</code>) element that reflects the hierarchical structure of the content. [Note that skipping heading levels, e.g. going from <code>h2</code> to <code>h4</code>, is not a WCAG failure. However, it is a failure to use heading levels in a way that does not reflect the hierachical order or rank of the heading content, e.g. using an <code>h3</code> heading for content that is visually presented as a subsection to content with an <code>h5</code> heading.]</td>
		</tr>
		<tr>
			<td>Lists of items</td>
			<td>Items visually presented as a list use list markup, either <code>ul</code> or <code>ol</code>with <code>li</code>, or <code>dl</code>, <code>dt</code>, and <code>dd</code>, as appropriate.</td>
		</tr>
		<tr>
			<td>Table header and data cells</td>
			<td>The programmatic association between data cells and header cells are provided correctly by one of the following mechanisms: 
				<ul>
					<li>header cells are marked up with table header <code>th</code> elements, optionally with <code>scope</code> attributes</li>
					<li>header and data cells are associated using <code>headers</code> and <code>id</code> attributes</li>
					<li>header cells are marked up as <code>td</code> elements with the <code>scope</code> attribute</li>
					<li>header cells are marked up with the [ARIA](#aria) <code>role</code> attribute with <code>rowheader</code> or <code>columnheader</code> values as appropriate</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td><code>label</code> elements</td>
			<td>Where a form control has a visual label, the label uses a <code>label</code> element that is associated with the form control, either by containing the form control or using a <code>for</code> attribute whose value references the form control's <code>id</code> value.</td>
		</tr>
		<tr>
			<td><code>id</code> values</td>
			<td>Any <code>id</code> attribute value that is referenced by other elements (e.g. by a <code>label</code>'s <code>for</code> attribute or a table cell's <code>headers</code> attribute, or an in-page link's "#fragmentId") exists and is unique in the document.</td>
		</tr>
		<tr>
			<td>White space</td>
			<td>White space characters (e.g. space, non-breaking space, line break, <kbd>Tab</kbd> space, etc.) are not used to create the visual appearance of columns of text or a table.</td>
		</tr>
		<tr>
			<td>Scripting events</td>
			<td>If JavaScript event handlers have been used on an non-link element (i.e. not an <code>a</code> or <code>area</code> element) to emulate a link, the fact that the element serves and acts as a link can be programmatically determined. Is the role of the element a link, i.e., does it have <code>role="link"</code>?</td>
		</tr>
		<tr>
			<td><code>pre</code> element markup</td>
			<td>The <code>pre</code> element is used to maintain plain text visual formatting, but not to present structural relationships, e.g. columns or tables, that don't exist in the content.</td>
		</tr>
	</tbody>
</table>

#### Failure points

*	CSS was used to style an element to look like a heading but failed to use the proper HTML heading element.
*	Images of text have been used as headings where the images are not contained within heading tags.
*	CSS has been used to visually emphasise a phrase or word without conveying the emphasis using semantic markup.
*	The `id` value referenced by an attribute on another element does not exist or is not unique in the document.
*	A table using the `axis` attribute does not have a corresponding `id` value in a table header cell in the same table.
*	White space characters have been used to visually lay out information.
*	Scripted event handling has been added to a `span`, `div`, or `img` element (with or without keyboard support) so that it functions as a link.
*	A layout table (that has been used only to visually lay out elements) uses `th` elements, a `summary` attribute, and/or a `caption` element.
*	The `pre` element has been used to present structural relationships visually, e.g. columns or tables, that don't exist in the content's markup.
*	A form visually presents labels for its controls, but does not use the `label` element to associate each label with its control.
*	`label` elements are present, but they are not programmatically linked to the corresponding form controls.
*	`:before` and/or `:after` CSS pseudo-elements and the content property have been used to insert non-decorative content.
*	A table uses `id` and `headers` attributes but incorrectly associates one or more content cells to header cells.
*	Table headers have not been marked up appropriately.
*	The ARIA `role="presentation"` has been applied to an element whose purpose is to convey information and/or relationships in the content.

### 1.3.2 Meaningful Sequence (A)

The content of a web page must have a correct reading sequence that can be programmatically determined. If someone is using assistive technology or has applied a different style sheet to the page, there must be a way to determine a reading order that makes sense.

#### Reason for testing

To ensure that people using assistive technologies or applying different style sheets can make sense of the content by reading it in a sequence that does not alter its meaning.

#### Technical difficulty

<span class="easy">Easy</span>

#### Tools required

[Web Developer extension](http://chrispederick.com/work/web-developer/)

#### How to test

1.	Open the web page to be tested.
2.	Check a meaningful reading order can be programmatically determined:
	1.	Disable Cascading Style Sheets (CSS) to remove any visual styling: With the Web Developer extension in Firefox or Chrome, select "CSS > Disable All Styles".
	2.	Ensure that, compared to the styled page, the order in which the content is presented doesn't change the meaning of the information in any way that could cause confusion or disorient the user. Note that if sections of the page such as the site menu, main content, or sidebar are in different relative positions compared to the style page, but their meaning and the meaning of the page overall are unaffected, then this is a pass.

#### Failure points

*	Unstyled reading order is different from the styled reading order in a way that could alter its meaning.
*	Content laid out in a table that does not make sense when linearised (i.e. read left to right, row by row).
*	White space has been used to lay out content in a table, to format a column, or to add decorative effects to text.

### 1.3.3 Sensory Characteristics (A)

This test is to ensure that items on a web page are referenced in ways that do not depend on whether people can perceive shape, size, location or orientation.

It is not enough to write, "Click the round button" or "See the list on the left", or to use graphical text characters (glyphs) to convey meanings that may not be obvious to a user of assistive technologies.

#### Reason for testing

To ensure that people can get the same meaning from web page content, even if they cannot perceive shape, size or positioning, or orientation such as left and right.

#### Technical difficulty

<span class="easy">Easy</span>

#### Tools required

[Web Developer extension](http://chrispederick.com/work/web-developer/)

#### How to test

1.	Open the web page to be tested.
2.	Scan the content for references that require sensory capability to understand, such as references to size, shape or position. Check that the information can be understood or acted on without the sensory capability required.
3.	Scan the content for graphical symbols that convey information, e.g. a checkmark. Check that the symbol's meaning is provided in some way other than its shape, size, position or location, for instance, as text on the page or, if it is an image, in an `alt` attribute.

#### Failure points

*	Information is conveyed using shape, size or position, but that information is not available by other means (e.g. text).
*	Content has been identified and referred to only by its shape, size, position or orientation.
*	An icon or other graphic is the only thing conveying information. For example, an icon is not enough: its meaning must be available another way, e.g. as text on the page or in an `alt` attribute.

## 1.4 Distinguishable

The following success criteria aim to make the web page's presentation as legible as possible for people with disabilities.

The primary focus is on making it easier for people to separate foreground information from background images or sounds.

### 1.4.1 Use of Color (A)

Colour must not be used as the only means of conveying information.

#### Reason for testing

To ensure that everyone, including people who are vision impaired, can access information without hindrance.

#### Technical difficulty

<span class="easy">Easy</span>

#### Tools required

[Web Developer extension](http://chrispederick.com/work/web-developer/)

#### How to test

1.	Open the web page to be tested.
2.	Check that information conveyed by colour is also conveyed by other means. For example:
	*	Links are distinguishable from the body text by some means other than colour, e.g. an underline or bold formatting or a 3:1 difference in luminosity from the surrounding text.
	*	A bar graph in which two bars distinguished by colour are also distinguished by different patterns.
	*	A form where required form fields are highlighted in green, but also indicated by an asterisk.
	*	A form where fields with errors are highlighted in red, but the label includes the word "Error" or some other non-colour indication.

#### Failure points

*	A text alternative does not include information that is conveyed by colour differences in the image.
*	Links are distinguished solely by colour with no alternative visual indication (such as underline or bolding), making it hard to differentiate between a link and body text.
*	There is no non-coloured way to identify the required field or error field.

### 1.4.2 Audio Control (A)

If background audio starts automatically, it must be possible to pause it, or stop it, or control the volume.

#### Reason for testing

To ensure that people can turn off any sound that plays automatically for more than three seconds.

#### Technical difficulty

<span class="easy">Easy</span>

#### How to test

1.	Make sure you have audio enabled and not muted.
2.	Open the web page to be tested. Listen for any audio that starts automatically, including audio on a video. Check that it switches off within 3 seconds or there is an identifiable mechanism in the content to switch it off or pause it or control its volume.

#### Failure points

*	The sound does not turn off automatically within 3 seconds and there is no obvious way in the page to turn the sound off or pause it or control its volume.

### 1.4.3 Contrast (Minimum) (AA)

Web pages must have sufficient contrast between text and its background.

[Read more about contrast ratios](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html).

#### Reason for testing

To ensure that everyone, even people with sight defects, can see the difference between text and its background.

#### Technical difficulty

<span class="easy">Easy</span>

#### Tools required

*	[WAVE Web Accessibility Evaluation Tool](http://wave.webaim.org/)
*	[Paciello Group Colour Contrast Analyser](http://www.paciellogroup.com/resources/contrastAnalyser)
*	[Snook.ca Colour Contrast Check](http://snook.ca/technical/colour_contrast/colour.html)

#### Notes

Large scale text is defined as text in a 14pt bold or 18pt font. What this means for text on a computer display varies depending on the font and device used. A good rule of thumb is that 14pt is more or less equivalent to 19px, and 18pt to 24px.

The font size of a certain bit of text can usually be checked using the browser's Developer Tools (F12): inspect the element containing the relevant text and check its computed font-size value.

#### Exceptions

*	Decorative text that conveys no information.
*	A logo or brand name.
*	Large scale text (and images of large-scale text) with a contrast ratio of at least 3:1.

#### How to test

1.	Open the web page to be tested.
2.	Review text and images of text on the page, and test the contrast between the text and its background using one of the tools listed above.
	*	Using the [WAVE Web Accessibility Evaluation Tool](http://wave.webaim.org/): Type or paste the web page address in the field provided and submit. After some processing by the tool, results for the page will be displayed. Select the "Contrast" tab. The elements on the web page with low contrast are highlighted. Note that because the WAVE tool does not account for background images and gradients, etc., there may be false positives. Note the contrast failures identified by WAVE and confirm the contrast using another tool.
	*	Using the [Paciello Group Colour Contrast Analyser](http://www.paciellogroup.com/resources/contrastAnalyser): Click the Foreground dropper icon and select the most representative sample of the foreground colour in question. Click the Background dropper icon and select the background colour. The results are displayed automatically.
	*	Using the [Snook.ca Colour Contrast Check](http://snook.ca/technical/colour_contrast/colour.html): Enter the hexadecimal (RGB) code (e.g. #FFFF00) for the foreground and background colours. Note the contrast ratio in the results panel and if it is WCAG 2 AA compliant.

#### Failure points

*	For non-bold text smaller than 18 point (~24px) and bold text smaller than 14 point (~19px), the contrast ratio is less than 4.5:1 between the text (including images of text) and its background.
*	For non-bold text that is at least 18 point (~24px) and bold text that is at least 14 point (~19px), the contrast ratio is less than 3:1 between text (and images of text) and the background behind the text.

### 1.4.4 Resizing Text (AA)

This test ensures that when a web page is magnified, text size increases to scale without any content overlapping or disappearing. The content must be fully readable and functional when magnified (although horizontal or vertical scrolling may be required).

#### Reason for testing

To ensure that information or content is not lost when the page is magnified. Otherwise text can be distorted or hidden by images on the page, making it difficult for people to read.

#### Technical difficulty

<span class="easy">Easy</span>

#### Tools required

Firefox or Chrome

#### Exceptions

This test concerns page zoom, which changes the size of everything in the browser window, not only text but also images. If content is pushed outside the browser viewport but remains available by horizontally or vertically scrolling the page, this is not failure.

#### How to test

1.	Using Firefox or Chrome, open the web page to be tested.
2.	Zoom the whole page (not just text) to 200%. In Firefox, press <kbd>CTRL + +</kbd> (or <kbd>CMD + +</kbd> on a Mac) six times to set page zoom to 200%. In Chrome, use the same keyboard command only five times to zoom to 200%.

#### Failure points

When zooming the page to 200% you notice:

*	Text is obscured and made illegible.
*	Form fields are obscured.
*	Menu, buttons or links are obscured or disappear.
*	Some elements are displayed on top of other elements such that they're meaning changes or is difficult to determine.

### 1.4.5 Images of Text (AA)

This test is to ensure that an image has not been used to deliver text with a particular visual presentation when that same presentation is possible with actual text and CSS.

#### Reason for testing

To ensure images of text are not used unless necessary.

#### Technical difficulty

<span class="medium">Medium</span>

#### Tools required

*	[WAVE Web Accessibility Evaluation Tool](http://wave.webaim.org/)
*	[Web Developer extension](http://chrispederick.com/work/web-developer/)

#### Exceptions

Text that is part of an image that contains other visual content. Examples: logo, trademark, graphs, screenshots, and diagrams. These convey important information through more than just text.

#### How to test

1.	Open the web page to be tested.
2.	Identify images of text.
	*	With the Web Developer extension in Firefox or Chrome, select "Images > Display Alt Attributes", and "Images > Outline Images > Outline All Images", and "Images > Outline Images > Outline Background Images" for various effects that will help you find the images on the page.
3.	Disregard any images of text that are:
	*	essential, e.g. a logo, brand name, or facsimile of an historic document; or
	*	customisable, i.e. the user can specify settings (font, size, etc.) for the text in the image.
4.	Check that the remaining images of text do not present text in a way that could be accomplished using actual text and CSS (font, style, colour, shadows, etc.).

#### Failure points

*	An image is used to display text in a way that could be accomplished using actual text and CSS.

## 2.1 Keyboard Accessible

People must be able to use all the functions of a website using only a keyboard.

### 2.1.1 Keyboard (A)

This test is to ensure that all content functionality can be operated using a keyboard only.

#### Reason for testing

To ensure that someone who relies on a keyboard can successfully operate all functions of the site without need for a mouse.

#### Technical difficulty

<span class="easy">Easy</span>

#### Test at the same time

*	[2.1.2 No Keyboard Trap](#no-keyboard-trap-a)
*	[2.4.3 Focus Order](#focus-order-a)
*	[2.4.7 Focus Visible](#focus-visible-aa)

#### Exceptions

Functionality that depends on the path of a user's input, e.g. drawing curved lines, and not just the endpoints, e.g. drawing a straight line or dragging an object from a location and dropping it in another.

#### How to test

1.	Open the web page to be tested.
2.	Check that you are able to navigate through the entire page with a keyboard. Start with focus at the top of the page (in the address bar) and use the <kbd>Tab</kbd> key to move through the page from focusable element to focusable element, e.g. button, link, form field, etc. Check that you can activate any elements such as form controls, sliders, page turners, or video controls with the keyboard. For example:
	*	If the page contains an embedded video player, check that you can use the keyboard to navigate (generally with the <kbd>Tab</kbd> and arrow keys) and activate (using the <kbd>Enter</kbd> key) each control in the player. Can you pause it, and raise/lower the volume? Can you turn on captions? Can you then move focus past the video player and down to any links or navigation that follow it?
	*	If the page contains a form, check that you can complete and submit the form without a mouse. Can you move from field to field (using the <kbd>Tab</kbd> key), move through groups of radio buttons and checkboxes (generally with arrow keys, and <kbd>Spacebar</kbd> to check options), select from drop-down options (up/down arrow) and then submit the form (by Tabbing to the submit button and using the <kbd>Enter</kbd> key)?
	*	If the page contains a carousel, can you stop it, pause it, or switch between its panels using the keyboard?
3.	Tab to every link and press <kbd>Enter</kbd>. Check that the link works the same as when you click on it using a mouse.
4.	Tab to each button and press the <kbd>Spacebar</kbd>. Check that the button performs the same action as when clicked on with a mouse.
5.	Check that, minus any clear exceptions, every action that can be performed with a mouse can be performed with the keyboard.

#### Failure points

*	You cannot move focus to clickable elements using the <kbd>Tab</kbd> key.
*	Form controls cannot be selected or activated using the <kbd>Tab</kbd> and/or arrow keys.
*	Links and buttons do not respond to <kbd>Enter</kbd> or the <kbd>Space</kbd> bar.
*	You cannot activate a function (e.g. a video player or carousel control, etc.) that can be activated with a mouse.

### 2.1.2 No Keyboard Trap (A)

This test is to ensure there are no keyboard traps within a web page.

A keyboard trap is an area within a web page from which you cannot escape by using keystrokes. Keyboard traps may occur in a form field, a pop-up dialog, or a section of the web page.

#### Reason for testing

To ensure the cursor is not trapped in a section of content and a user cannot move the cursor to another part.

#### Technical difficulty

<span class="easy">Easy</span>

#### Test at the same time

[2.1.1 Keyboard](#keyboard-a)

#### How to test

1.	Open the web page to be tested.
2.	Start with focus at the top of the page (in the address bar) and use the <kbd>Tab</kbd> key to move through the page from focusable element to focusable element, e.g. button, link, form field, etc. Go through the entire page, including embedded videos, carousels, and the page footer. Check that you can use the <kbd>Tab</kbd> key to move all the way through the page and back up to the address bar without keyboard focus getting stuck anywhere on the page.
3.	If the page has links or buttons that open a pop-up dialog, activate the pop-up dialog and check that you can close it and return to the main page using the keyboard, e.g. by pressing <kbd>Enter</kbd> on a Close button or pressing <kbd>Esc</kbd> to exit the pop-up.

#### Failure points

*	Using the <kbd>Tab</kbd> key to move focus into a section of content, and not being able to move focus out of that section to reach other parts of the page.

## 2.2 Enough Time

People must be able to complete required tasks at their own individual pace. Either there are no time constraints or people are given enough additional time to complete their tasks. Alternatives or exceptions are provided for cases where this is not possible.

### 2.2.1 Timing Adjustable (A)

If a time limit is set on any activity, it must be possible for users to disable or extend the time limit.

#### Reason for testing

To give people enough time to read content or do things online where there is a time limit. Example: an online form that needs to be completed within a certain timeframe.

#### Technical difficulty

<span class="easy">Easy</span>

#### Exceptions

There are a number of exceptions to this requirement. For examples, see [Understanding SC 2.2.1](http://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html).

*	A real-time event, e.g. a newsfeed that scrolls through headlines; voting that closes at a specific time.
*	A fixed time limit is essential and removing it would change something important.
*	The time limit is longer than 20 hours.

#### How to test

1.	Open the web page to be tested.
2.	Look for content that is displayed for a limited time, e.g. a newsfeed, a refreshing banner, a slideshow. Check that the time limit can be turned off or adjusted in advance, or extended as needed.
3.	Look for content that expects user input within a certain time frame, e.g. a form. Check that the time limit can be turned off or adjusted in advance, or extended as needed while interacting with the content. If a time limit is not clear, complete part of the expected interaction, but do not finish or submit it. Leave it for some time, e.g. 20–30 minutes. If it times out after a certain period, check that you were given an opportunity to extend the time limit.

#### Failure points

*	The activity (reading or interacting) has a time limit, is not one of the exceptions listed above, and there is no opportunity, prior to engaging in the activity, to turn off or adjust the time limit, or to extend the time limit during the activity.

### 2.2.2 Pause, Stop, Hide (A)

This test ensures that moving or auto-updating elements on a web page can easily be paused, stopped or hidden and not distract users from reading, navigating or interacting with the rest of the page.

#### Reason for testing

To remove distractions so that people find it easier to concentrate while performing a task or otherwise

#### Technical difficulty

<span class="easy">Easy</span>

#### Exceptions

An essential activity, e.g. real-time traffic information or weather warnings.

#### How to test

1.	Open the web page to be tested.
2.	Look for moving, blinking or scrolling content that starts automatically and lasts for more than five seconds. Check that it can be paused, stopped or hidden in a way that still lets a user read, navigate or interact with the rest of the page.
3.	Look for auto-updating content, e.g. video, a Twitter stream, animation, advertising banners, scrolling news headlines or stock results. Check that the updates can be paused, stopped or hidden, or their frequency adjusted.

#### Failure points

*	There is no mechanism to pause, stop or hide the moving, blinking, scrolling, or auto-updating content.

## 2.3 Seizures

Content must not be designed in a way that is known to cause seizures.

### 2.3.1 Three Flashes or Below Threshold (A)

This test is to ensure there are no more than three flashes within one second on a web page.

#### Reason for testing

Flashing or blinking content on a web page can trigger seizures in people with photosensitivity. Examples include a video or animation of strobe flashes, or close-ups of machine gun fire.

#### Technical difficulty

<span class="easy">Easy</span>

#### Exceptions

Flashing that is below the [general flash and red flash thresholds](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#general-thresholddef).

#### How to test

1.	Open a web page.
2.	Check that no content flashes or blinks for more than three times in a second.

#### Failure points

*	Content that flashes or blinks more than three times within any one-second period.

## 2.4 Navigable

Ways must be provided to help people navigate the website, find the content they need, and keep track of where they are.

### 2.4.1 Bypass Blocks (A)

Websites must provide a way to bypass blocks of content that are repeated on every web page, such as banners and navigation menus.

Sighted people can simply ignore content they have seen before, but some people need another way to do the same thing.

#### Reason for testing

This test is to ensure that people can bypass repeated blocks of content and get directly to the main content on the page.

#### Technical difficulty

<span class="medium">Medium</span>

#### Tools required

Developer tools

#### How to test

1.	Open the web page to be tested.
2.	Find blocks of content on the page that are repeated across other pages, e.g. feature banners and navigation menus or sidebars. Mechanisms to allow users to bypass those repeated blocks of content and easily access the page's main content can be provided in a number of ways:
	*	[Skip links](#skip-links): Start with focus at the top of the page (in the address bar) and use the <kbd>Tab</kbd> key to move through the page from focusable element to focusable element, e.g. button, link, form field, etc. If a skip link receives focus, check that activating it either moves focus to the page's main content or to the end of the block of repeated content that the skip link is meant to bypass.
	*	Index or table of content: Check, at or near the top of the page and before the repeated blocks of content, for links to the different sections of the page.
	*	Headings: Check that each repeated section of the page, including navigation menus, sidebars, feature banners, and the main content, start with a heading element.
	*	ARIA landmarks: Check that each repeated section of the page, including navigation menus, sidebars, feature banners, and the main content, have the appropriate ARIA landmark role applied. For instance, the element containing the navigation menu should have a `role="navigation"`, and the element containing the main content area should have a `role="main"`. See [ARIA11: Using ARIA landmarks to identify regions of a page](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/ARIA11) for more.

#### Failure points

*	There is no mechanism to quickly navigate to the page's main content while bypassing blocks of content that are repeated across other pages.

### 2.4.2 Page Titled (A)

All web pages must have titles that describe their topic or purpose.

#### Reason for testing

To help people to quickly find specific content and orient themselves within a website. This is made easier when the web page has a title, the title identifies the contents or purpose of the Web page, and distinguishes it from other pages on the site.

#### Technical difficulty

<span class="easy">Easy</span>

#### Tools required

Developer tools (F12)

#### How to test

1.	Open the web page to be tested.
2.	Find the page's title in the browser title bar at the top of the browser window. If the browser title bar does not display the page's full title, open the browser's Developer tools (F12) or use the browser's View Source feature and find the `title` element, which is located within the page's `head` element near the top of the HTML markup.
3.	Check that the title of the page being tested describes the page's purpose or topic. Compare the page's title with that from a number of other pages in the same section of the website, and check that it is unique and serves to differentiate the page from the other pages on the site.

#### Failure points

*	There is no title in the HTML source code.
*	The HTML title is empty.
*	The page's title does not describe the purpose or topic of the page.
*	The page's title is not meaningful, e.g. "report.html".
*	The page's title is placeholder text, e.g. "Untitled Page".
*	The page's title is not unique: some other pages have the same title.

### 2.4.3 Focus Order (A)

If a web page can be navigated sequentially, components must receive focus in a sequence that enables people to understand and use the content.

#### Reason for testing

When people navigate sequentially through content, they need to encounter information in a logical, consistent order. This particularly affects people with disabilities.

#### Technical difficulty

<span class="easy">Easy</span>

#### Test at the same time

*	[2.1.1 Keyboard](#keyboard-a)
*	[2.1.2 No Keyboard Trap](#no-keyboard-trap-a)

#### How to test

1.	Open the web page to be tested.
2.	Start with focus at the top of the page (in the address bar) and use the <kbd>Tab</kbd> key to move through the page from element to element, e.g. button, link, form field. Check that focus moves through the page in a logical sequence that does not negatively affect the meaning or operation of the page's components?

#### Failure points

*	The <kbd>Tab</kbd> order does not follow logical relationships and sequences in the content.
*	A dialog or menu is opened, but focus is not set to the dialog or menu, and it is not adjacent to the control that triggered it, thereby forcing the user to <kbd>Tab</kbd> through the content in between to reach the dialog or menu.
*	Upon closing a dialog or menu, focus returns to the underlying document, but not to the control that initially triggered the dialog or menu, forcing the user to <kbd>Tab</kbd> through the document from the beginning to reach that point in the document from which they originally opened the dialog or menu.

### 2.4.4 Link Purpose (In Context) (A)

The purpose of every link must be obvious from its text alone, or from the link text in conjunction with its contextual relationships as determined through structural markup.

#### Reason for testing

To help people to understand the purpose of a link, so they can decide whether they want to follow it.

#### Technical difficulty

<span class="medium">Medium</span>

#### Exceptions

A link whose purpose would be ambiguous to all users, not just those with disabilities.

#### How to test

1.	Open the web page to be tested.
2.	Review each link on the page. Is the link's purpose clear from the link's text on its own? If it isn't (e.g. "Read more" or "Click here" do not on their own clearly indicate the link's purpose), can the link's purpose be determined through the context provided by its surrounding structure and relationships? For instance, a link whose content does not on its own provide the link's purpose would still be acceptable if:
	*	the text that indicates the link's purpose is within the same sentence, or in the same paragraph (`p`) or list item (`li`) as the link, or
	*	the link is in a table cell (`td`) whose other text and whose column's header cell (`th`) provides the link's purpose, or
	*	the link is in a section of content with a clear and descriptive heading (`h1`–`h6`) that serves to clarify the purpose of the link, or
	*	the link has an `aria-label` or `aria-labelledby` attribute whose value provides the link's purpose.

#### Failure points

*	A link contains only non-text content and its purpose is not conveyed by a meaningful text alternative or caption.

### 2.4.5 Multiple Ways (AA)

This test is to ensure that websites provide more than one way to locate content within a set of web pages.

#### Reason for testing

So that people can locate content in a way that best meets their needs.

#### Technical difficulty

<span class="easy">Easy</span>

#### Exceptions

Where the web page is the result of, or a step in, a process. Example: a search engine provides search results based on user input. There is no other way to find the search results except by performing the search.

#### How to test

1.	Open the web page to be tested.
2.	Look for multiple ways of finding content in the site. Any two of the following are sufficient:
	*	list of [links to related pages](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G125) in the site
	*	[table of contents](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G64) linking a document's various sections
	*	link to a site map that itself links to all sections of the site
	*	[site search function](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G161)
	*	[list of links to all the other pages](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G126) in the site (useful only on very small websites)
	*	link to the home page which has [links to all of the pages on the site](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G185) (useful only on very small websites)

#### Failure points

*	Only one mechanism for finding content is provided.

### 2.4.6 Headings and Labels (AA)

Headings and labels used in the page must describe the topic or purpose of the information they are attached to. When headings and labels are clear and descriptive, people can more easily find and interact with the information and controls on a page.

Note that this success criterion does not require that headings and labels be provided. It only requires that any headings or labels that are provided are properly descriptive of topic or purpose.

Also note that this success criterion is not headings and labels being properly marked up using appropriate HTML elements. That is covered by [success criterion 1.3.1 Info and Relationships](#info-and-relationships-a).

#### Reason for testing

To help people find the information they need with minimal effort, and to understand what information is on a website and how it is organised.

#### Technical difficulty

<span class="easy">Easy</span>

#### Test at the same time

[1.3.1 Info and Relationships](#info-and-relationships-a)

#### Notes

While the `label` element can be used to mark up a label for a form control, not all labels use the `label` element.

#### How to test

1.	Open the web page to be tested.
2.	Find the headings in the page. Check that they clearly describe the content they apply to, are meaningful, and used consistently.
3.	A label is some text or image with a text alternative that is presented and available to all users. Find the labels used to identify components on the page. Check that they make it easy to understand what each labelled element is or does and are used consistently.

#### Failure points

*	Headings do not describe the content of the sections of the page that they apply to.
*	Labels do not describe or summarise their purpose and are not applied consistently.

### 2.4.7 Focus Visible (AA)

Web pages must visually indicate which element currently has keyboard focus, for example with an outline or change in colour.

#### Reason for testing

To help people see which element on the web page has the keyboard focus so that they can orient themselves and interact with the page.

#### Technical difficulty

<span class="easy">Easy</span>

#### Test at the same time

[2.1.1 Keyboard](#keyboard-a)

#### How to test

1.	Open the web page to be tested. Do not use Chrome or Safari for this test, since, under some conditions, those browsers add their own visible indication of keyboard focus.
2.	Start with focus at the top of the page (in the address bar) and use the <kbd>Tab</kbd> key to move through the page from focusable element to focusable element, e.g. button, link, form field, etc. Check that, at each stop in the <kbd>Tab</kbd> order, the element with keyboard focus is visible and clearly distinguishable from non-focused elements? For example, a link or a button is highlighted in some way, or the cursor appears in a form input field. Note that if the focus indicator is visible, but doesn't easily stand out, simply note this in the report rather than failing it completely.

#### Failure points

*	Removing focus from an element as soon as it gets focus.
*	Applying styles to an element in its unfocused state that hides the browser's default focus indicator.

## 3.1 Readable

All text content must be readable and understandable.

### 3.1.1 Language of Page (A)

This test is to ensure that the language of a web page is correctly identified.

#### Reason for testing

To enable browsers and assistive technologies, e.g. screen readers, to correctly present text.

#### Technical difficulty

<span class="easy">Easy</span>

#### Test at the same time

[3.1.2 Language of Parts](#language-of-parts-aa)

#### Tools required

Developer tools (F12)

#### How to test

1.	Open the web page to be tested.
2.	If the page is mainly in English, check that its opening ``<html>`` tag has the `lang="en"`" or `lang="en-NZ"`" attribute and value. If the page is mainly in te reo Māori, check that the ``<html>`` tag has `lang="mi"`". If the page is in another language, check for that the appropriate [ISO 639-1 two-letter language code](http://www.loc.gov/standards/iso639-2/php/English_list.php) is used. Note that if the page uses XHTML, the `lang` attribute value must be duplicated in the `xml:lang` attribute, e.g. `<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">`. The presence of the proper `lang` attribute and value can be checked in a few ways:
	*	Using the browser's Developer tools, inspect the ``<html>`` tag and check for the appropriate value on the `lang` attribute (and `xml:lang` if applicable).
	*	Review the HTML markup using the browser's View Source feature. Search for `<html>` and check for the appropriate value on the `lang` attribute (and `xml:lang` if applicable).

#### Failure points

*	The `<html>` tag does not have the `lang` attribute.
*	The `<html>` tag has a `lang` attribute but its value identifies the wrong language.

### 3.1.2 Language of Parts (AA)

Where the language (e.g. English or Māori) of a passage or phrase in the content is different from the page's main language, it must be identified in the HTML markup.

#### Reason for testing

To help browsers and assistive technologies, e.g. screen readers, correctly present changes in the language of text on the page.

#### Technical difficulty

<span class="medium">Medium</span>

#### Test at the same time

[3.1.1 Language of Page](#language-of-page-a)

#### Tools required

Developer tools (F12)

#### Exceptions

Where a word or short phrase is in common use in the main page language it is not necessary to indicate a change, e.g. kia ora, rendezvous, homo sapiens.

#### How to test

1.	Open the web page to be tested.
2.	Look for content in a language other than the page's main language.
3.	Check that the HTML element containing that content (but not content in the page's main language) has a `lang` attribute with the appropriate [ISO 639-1 two-letter language code](http://www.loc.gov/standards/iso639-2/php/English_list.php). For example, if some text on an English page is in te reo Māori, then look for `lang="mi"` on a surrounding span, p, h3 or other element. Note that if the page uses XHTML, the `lang` attribute value must be duplicated in the `xml:lang` attribute, e.g. `<span xml:lang="mi" lang="en">`. The presence of the proper `lang` attribute and value can be checked in a few ways:
	*	Using the browser's Developer tools, inspect the HTML element containing the content in the other language and look for a `lang` attribute with the appropriate language code.
	*	Review the HTML markup using the browser's View Source feature. Search for the text in the other language and check for the appropriate `lang` attribute and value on the HTML element containing the text.

#### Failure points

*	No `lang` attribute is applied to an HTML element containing the text which is in a language different from the language of the page.

## 3.2 Predictable

Web pages must appear and work in a predictable way.

### 3.2.1 On Focus (A)

When any component receives focus, this must not trigger an automatic [change of context](#change-of-context) (which is not the same thing as a change of content).

#### Reason for testing

People get disoriented when context changes unexpectedly, for example, a new web page opens when focus moves to a certain bit of content. This test reduces the chance of an involuntary change of context.

#### Technical difficulty

<span class="medium">Medium</span>

#### Test at the same time

[3.2.2 On Input](#on-input-a)


#### How to test

1.	Open the web page to be tested. Check that a new window or browser <kbd>Tab</kbd> does not open when you load the page.
2.	Start with focus at the top of the page (in the address bar) and use the <kbd>Tab</kbd> key to move through the page from focusable element to focusable element, e.g. button, link, form field, etc. With each stop in the <kbd>Tab</kbd> order, check that nothing unexpected happens, e.g. no new windows, browser tabs or pop-ups appear; focus doesn't jump somewhere else on the page.
3.	If there is a form on the page, use the <kbd>Tab</kbd> key to move focus through all its inputs and controls. If a drop down list gets focus, change the currently selected option, then move focus out of the drop-down. Check that no pop-ups or new pages load, or that focus moves unexpectedly, simply when moving focus to or from a form control. Correctly fill in the form and change the value of the last control, then use the <kbd>Tab</kbd> key to move focus away from that control. Check that the form does not automatically submit. Note that if anything changes when filling in a form (e.g. more fields appear because you selected a country), this is not a change of context because it extends the content of the page, but does not change the meaning of the page overall.

#### Failure points

*	Removing focus from an element as soon as it gets focus.
*	Simply moving focus to or from an element on the page causes an unexpected change of context.

### 3.2.2 On Input (A)

Changing the setting of a [user interface component](#user-interface-component) (e.g. selecting a radio button) must not automatically cause a change of context, unless the user is warned that the change will occur.

Note that while links, buttons, or tabs in a tabbed interface are considered user interface components, activating (e.g. clicking on) such a component is not considered to be changing its setting.

#### Reason for testing

To ensure that simply changing the setting of a component (e.g. checking a checkbox, selecting a value from a drop-down list or entering text in a field) does not cause an unpredictable effect such as launching a new web page. Unexpected changes of context can disorient users.

#### Technical difficulty

<span class="medium">Medium</span>

#### Test at the same time

[3.2.1 On Focus](#on-focus-a)

#### How to test

1.	Open the web page to be tested.
2.	If the page has a form, fill it in. Enter data in each field. Select all radio buttons and checkboxes. Open each drop-down list and select a value. Check that at no point is the form automatically submitted or a change in context occurs without warning.
3.	With any other user interface component on the page, change its setting and check that no change of context occurs without warning.
4.	If there is a change in context upon changing the setting of a user interface component, check that instructions or a warning about the change of context is provided before the component or such that a user can find it before interacting with the component.

#### Failure points

*	A form is submitted as a consequence of entering text into an input, checking a checkbox or radio button, or selecting a value from a list.
*	A new window is launched without prior warning when someone selects a radio button or checkbox.
*	Instructional material or warnings about changes in context are located after the component that triggers the change in context when its setting is changed, or is located such that a user won't come across it before interacting with the component.

### 3.2.3 Consistent Navigation (AA)

Navigation and links that are repeated on multiple web pages must follow the same order and structure on every page.

#### Reason for testing

When a website has consistent presentation and layout of navigation menus, search boxes, etc., this helps them to navigate more comfortably through multiple pages.

#### Technical difficulty

<span class="easy">Easy</span>

#### How to test

1.	Open the web page to be tested.
2.	Consider the layout and order of the navigational mechanisms (e.g. menus, skip links, search fields, breadcrumbs, footers) on the page.
3.	Open a number of pages from the same section of the website and compare the layout and order of the navigational mechanisms that are repeated across those pages and the page being tested. Check that there are not any differences in sequence or layout and that all the navigation mechanisms are in the same relative order on each page.

#### Failure points

*	Recurring navigation items are not in the same relative order throughout the set of web pages.
*	Recurring navigation items are not in the same position on the page.

### 3.2.4 Consistent Identification (AA)

All components within a website that do the same thing (e.g. icons, checkmarks, links to PDFs) must be identified with consistent appearance and wording.

For example, a form that returns a list of records appears in different contexts on many pages throughout a website. In each case, the form performs the same function. In each case, the submit button is labelled "Search": It is not "Search" on one page, and "Go" or "Find" on another.

#### Reason for testing

Predictable wording and design helps people to use a website intuitively and quickly.

#### Technical difficulty

<span class="easy">Easy</span>

#### How to test

1.	Open the web page to be tested.
2.	Open a number of pages from the same section of the website. Check that all components with the same functionality across the web pages are consistently labelled and presented.

#### Failure points

*	Different labels or icons have been used for the same function one or more pages within a website
*	A form that performs the same function across multiple pages has a submit button that is labelled differently in different instances of the form.

## 3.3 Input Assistance

Web pages must be designed and written to help people avoid making mistakes when entering content, and notice and correct any mistakes they do make.

### 3.3.1 Error Identification (A)

If people make a mistake filling in a form or performing a transaction (e.g. entering an invalid date), some text is provided that identifies and describes the error.

#### Reason for testing

If people are informed about an error they have made, they won't be left wondering what went wrong or assume that the page is broken.

#### Technical difficulty

<span class="easy">Easy</span>

#### How to test

1.	Open the web page to be tested.
2.	If the page contains a form, create an input error in the form.
	1.	Purposely leave all mandatory fields blank. Check that an error message adequately describing the error appears for each field, either upon moving focus out of the field, or upon submitting the form. If the error message appears upon moving focus out of the field, check that the message is programmatically associated with the field in question, e.g. in a way that a screen reader user moving from field to field would notice. Check that all mandatory fields that are left empty result in adequate error messages.
	2.	Enter invalid data in every field that expects a specific type or form of data, e.g. the wrong date format or invalid email address format. Check that an error message adequately describing the error appears for each field, either upon entering the data to the field, upon moving focus out of the field, or upon submitting the form. If the error message appears upon entering the data or upon moving focus out of the field, check that the message is programmatically associated with the field in question, e.g. in a way that a screen reader user moving from field to field would notice. Check that all fields that have invalid data entered result in adequate error messages.

#### Failure points

*	An error message did not appear when submitting a form with incorrect or missing data.
*	The error message does not clearly identify which fields(s) are in error, and the nature of the error.
*	An error message appears in a place that screen-reader users are unlikely to notice (e.g. following the "Submit" button).

### 3.3.2 Labels or Instructions (A)

Form fields must be accompanied by visible labels and instructions that make it clear what input is expected by each field.

#### Reason for testing

Completing forms may be a demanding task for some people. Clear labels and instructions help enable people to complete fields without making errors.

#### Technical difficulty

<span class="easy">Easy</span>

#### Test at the same time

[1.3.1 Info and Relationships](#info-and-relationships-a)

#### How to test

1.	Open the web page to be tested.
2.	If there are form controls or other components that require user input, check that each one is accompanied by a visible label or instruction that describes the input to be entered. If the input is to be provided or formatted in a certain way, check that this information is also provided.

#### Failure points

*	The field is visible but there is no visible label.
*	Mandatory fields are not clearly marked.
*	The label and form control are not adjacent to each other.
*	Data must be entered in a specific format but the required format is not clear.

### 3.3.3 Error Suggestion (AA)

If an input error is automatically detected, and ways to correct the error are known, then suggestions must be provided to the user who made the error.

When someone makes a mistake while filling in a form, they are made aware of the error and provided a suggestion on how to fix it.

#### Reason for testing

Some people may not easily be able to figure how to correct an error, and may abandon their attempt to complete the form. Advice may help them to complete the task.

#### Technical difficulty

<span class="easy">Easy</span>

#### Tools required

[3.3.1 Error Identification](#error-identification-a)

#### Exceptions

If suggesting a correction would jeopardise the security or purpose of the content.

#### How to test

1.	Open the web page to be tested.
2.	If the page contains a form, create an input error in the form.
	1.	Purposely leave all mandatory fields blank. Upon the form or page registering the errors, check that all mandatory fields which are left empty result in one or more messages suggesting a way to correct the errors.
	2.	Enter invalid data in every field that expects a specific type or form of data, e.g. the wrong date format or invalid email address format. Upon the form or page registering the errors, check that all fields that have invalid data entered result in one or more messages suggesting a way to correct the errors.

#### Failure points

*	A suggestion for correcting an error did not appear when submitting a form with an input error.
*	An error message appeared but did not describe how the error could be corrected.

### 3.3.4 Error Prevention (Legal, Financial, Data) (AA)

For web pages where the user can make legal commitments or financial transactions, modify or delete data in a data storage system (e.g. name and address for a user account), or submit test responses, at least one of the following must be true:

1.	The act of submitting the form can be reversed.
2.	Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.
3.	A process is available for reviewing, confirming, and correcting information before submitting the data.

#### Reason for testing

To help people avoid serious consequences as the result of a mistake when performing an action that cannot be reversed, e.g. purchasing non-refundable airline tickets.

#### Technical difficulty

<span class="easy">Easy</span>

#### Tools required

Possibly a dummy account and/or credit card.

#### How to test

1.	Open the web page to be tested.
2.	If the page includes a form that allows users to make legal commitments or financial transactions, modify or delete data in a data storage system, or submit test responses, enter data and check that:
	*	there is a way to edit or cancel or undo the submission after the fact; or,
	*	input is checked for errors and an opportunity to correct the errors is provided; or,
	*	input is presented for review and confirmation or correction before the transaction is committed.

#### Failure points

*	The page includes a form that allows users to make legal commitments or financial transactions, modify or delete data in a data storage system, or submit test responses, and none of the following conditions are met:
	*	there is a way to edit or cancel or undo the submission after the fact; or,
	*	input is checked for errors and an opportunity to correct the errors is provided; or,
	*	input is presented for review and confirmation or correction before the transaction is committed.

## 4.1 Compatible

This test is to ensure that websites have maximum compatibility with current and future hardware and software, especially assistive technologies (ATs).

### 4.1.1 Parsing (A)

This test is to ensure that the web page's HTML markup can be accurately parsed and interpreted by browsers and AT and then correctly presented to users.

In order to pass this test, the page's HTML must meet all of the following conditions:

*	Elements have complete start and end tags, e.g. every `<p>` start tag has a corresponding `</p>` end tag.
*	Elements are nested according to the specification for the version of HTML being used. For instance, block level elements (e.g. `div`, `p`, `li`) are not nested in inline elements (e.g. `span`, `a`, `strong`); or an element is not placed where it is not allowed (e.g. a `div` as an immediate child of a `ul`).
*	Elements do not contain duplicate attributes. For instance, the `class` attribute doesn't appear twice on the same element, e.g. `<li class="last" class="detail"></li>`.
*	All `id` attribute values are unique in the page. For instance, if an element has `id="main"` no other instance of `id="main"` exists on any other element in the page.

#### Reason for testing

To ensure that browsers, AT, and software that parses web content can accurately interpret it and correctly present it to users.

#### Technical difficulty

<span class="medium">Medium</span>

#### Tools required

[W3c Validator](http://validator.w3.org/check)

#### How to test

1.	Open the web page to be tested.
2.	Copy the URL from the address bar and paste it into the Address field of the [W3c Validator](http://validator.w3.org/check).
3.	Expand the More Options panel, select the Group Error Messages by Type radio button, and then click the Check button.
4.	Check that the report returns none of the following errors:
5.	An element is missing a start or end tag.
6.	An element is improperly nested as a child of another element where it is not permitted.
7.	An attribute (regardless of its value) is duplicated on a single element.
8.	An id attribute value is duplicated.

#### Failure points

*	There is incorrect use of start and end tags.
*	An element is used where it is not allowed.
*	There are duplicate attribute names on the same element.
*	There are duplicate `id` attribute values.

### 4.1.2 Name, Role, Value (A)

This is a highly technical success criterion for web authors who develop or script their own user interface components. Correctly assessing a web page against this success criterion requires advance technical knowledge. Assessing against this success criterion, more than others, will be aided by reviewing the [W3C's Understanding SC 4.1.2](http://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html) documentation and sufficient techniques.

It is essential that for all user interface components (including form elements, links and components generated by scripts) the following are true:

*	the [name](#name) and [role](#role) (e.g. button, link, textbox) can be programmatically determined;
*	states, properties, and values that can be set by the user can be programmatically set;
*	notification of changes to these items is available to user agents, including assistive technologies.

Standard, valid HTML controls already meet this success criterion.

#### Reason for testing

To ensure that AT can gather information about, set, and be updated regarding the role and status of user interface controls.

#### Technical difficulty

<span class="hard">Hard</span>

#### Test at the same time

[1.3.1 Info and Relationships](#info-and-relationships-a)

#### Tools required

Developer tools (F12)

#### Exceptions

Web pages using standard, valid HTML and no custom scripted user interface components.

#### How to test

1.	Open the web page to be tested.
2.	Open the Developer tools (F12).
3.	Review the markup and check that each user interface component has a programmatically established role and name, either by virtue of properly using standard HTML components, or reusing other HTML elements and supplementing them with appropriate ARIA attributes. Check that the current state of a control (e.g. expanded/collapsed, selected, pressed) can be programmatically determined, that it is updated accordingly based on user interaction, and is not just displayed visually.

#### Failure points

*	Instead of standard HTML controls, span and div elements have been used without suitable markup to programmatically identify the component's role. For example, a checkbox may be created by using a `span` with an `img` element or CSS background image, but it will not be recognised as a checkbox by assitive technologies unless the ARIA `role="checkbox"` and `aria-checked="true|false"` attributes are applied.
*	Non-text content has been dynamically updated on the page and the alternative no longer reflects the updated content, e.g. a picture of the minister has alternative text identifying the previous minister.
*	`input`, `select`, and `textarea` elements do not have a label, e.g. a correctly associated `label` element, or properly configured `aria-label`, `aria-labelledby`, or `title` attribute.
*	A control changes state, but its change in state is not made programmatically available.
*	A link contains only an `img` element with an empty `alt` attribute.
*	An `iframe` element is missing a title attribute with a descriptive name.

## Glossary

<dl>
	<dt><dfn id="aria"><abbr title="Accessible Rich Internet Applications">ARIA</abbr></dfn></dt>
	<dd><p><abbr title="Accessible Rich Internet Applications">ARIA</abbr>, or <a href="http://www.w3.org/TR/wai-aria/">Accessible Rich Internet Applications</a>, is a W3C standard. It specifies a collection of attributes and values that can be used to provide user agents and assistive technologies, notably screen readers, with additional programmatic information regarding the name, role, state and value of elements.</p></dd>
	<dt><dfn id="captions">Captions</dfn></dt>
	<dd><blockquote><p>synchronized visual and/or text alternative for both speech and non-speech audio information needed to understand the media content</p>
		<p>Note 1: Captions are similar to dialogue-only subtitles except captions convey not only the content of spoken dialogue, but also equivalents for non-dialogue audio information needed to understand the program content, including sound effects, music, laughter, speaker identification and location.</p>
		<p>Note 2: Closed Captions are equivalents that can be turned on and off with some players.</p>
		<p>Note 3: Open Captions are any captions that cannot be turned off. For example, if the captions are visual equivalent images of text embedded in video.</p>
		<p>Note 4: Captions should not obscure or obstruct relevant information in the video.</p>
		<p>Note 5: In some countries, captions are called subtitles.</p>
		<p>Note 6: Audio descriptions can be, but do not need to be, captioned since they are descriptions of information that is already presented visually.</p>
		<footer>(Source: <cite>Web Content Accessibility Guidelines (WCAG) 2.0. Copyright © 2008 W3C® (MIT, ERCIM, Keio), All Rights Reserved</cite>.)</footer></blockquote></dd>
	<dt><dfn id="change-of-context">Change of context</dfn></dt>
	<dd><blockquote><p>major changes in the content of the Web page that, if made without user awareness, can disorient users who are not able to view the entire page simultaneously</p>
		<p>Changes in context include changes of:</p>
		<ol>
			<li>user agent;</li>
			<li>viewport;</li>
			<li>focus;</li>
			<li>content that changes the meaning of the Web page.</li>
		</ol>
		<p>Note: A change of content is not always a change of context. Changes in content, such as an expanding outline, dynamic menu, or a <kbd>Tab</kbd> control do not necessarily change the context, unless they also change one of the above (e.g., focus).</p>
		<p>Example: Opening a new window, moving focus to a different component, going to a new page (including anything that would look to a user as if they had moved to a new page) or significantly re-arranging the content of a page are examples of changes of context.</p>
		<footer>(Source: <cite>Web Content Accessibility Guidelines (WCAG) 2.0. Copyright © 2008 W3C® (MIT, ERCIM, Keio), All Rights Reserved</cite>.)</footer></blockquote></dd>
	<dt><dfn id="descriptive-text-transcript">Descriptive text transcript</dfn></dt>
	<dd><blockquote><p>document including correctly sequenced text descriptions of time-based visual and auditory information and providing a means for achieving the outcomes of any time-based interaction</p>
		<p>Note: A screenplay used to create the synchronized media content would meet this definition only if it was corrected to accurately represent the final synchronized media after editing.</p>
		<footer>(Source: <cite>Web Content Accessibility Guidelines (WCAG) 2.0. Copyright © 2008 W3C® (MIT, ERCIM, Keio), All Rights Reserved</cite>.)</footer></blockquote></dd>
	<dt><dfn id="high-stakes-information-or-services">High-stakes information or services</dfn></dt>
	<dd><p>Online information or services whose inaccessibility at the time of publication could reasonably be expected to have a negative impact on an individual's emergency preparedness and response, health and safety, or critical civil and political rights, entitlements, services, or obligations. Examples include information or services related to:</p>
		<ul>
			<li>civil emergencies and responses;</li>
			<li>entitlement or access to benefits, education, consumer or other community protections, passports, or visas;</li>
			<li>rights in criminal and civil proceedings;</li>
			<li>central government elections or referenda;</li>
			<li>tax obligations and rebates;</li>
			<li>general health information, specific health advice, health and safety in employment.</li>
		</ul>
	</dd>
	<dt><dfn id="home-page">Home page</dfn></dt>
	<dd><p>A website's main landing or entry web page. For many websites, this is the web page at the root domain or subdomain level, e.g. http://ministry.govt.nz/ or http://site.ministry.govt.nz/. For some websites, e.g. single web page applications, the home page is the initial state of the web application.</p></dd>
	<dt><dfn id="name">Name</dfn></dt>
	<dd><blockquote><p>text by which software can identify a component within Web content to the user</p>
		<p>Note 1: The name may be hidden and only exposed by assistive technology, whereas a <a href="http://www.w3.org/TR/WCAG20/#labeldef">label</a> is presented to all users. In many (but not all) cases, the label and the name are the same.</p>
		<p>Note 2: This is unrelated to the <code>name</code> attribute in HTML.</p>
		<footer>(Source: <cite>Web Content Accessibility Guidelines (WCAG) 2.0. Copyright © 2008 W3C® (MIT, ERCIM, Keio), All Rights Reserved</cite>.)</footer></blockquote>
		<p>For example, the text within a link's <code>&lt;a&gt;</code> and <code>&lt;/a&gt;</code> tags serves as the link's name. Similarly, the label text associated with a form control is that control's name.</p></dd>
	<dt><dfn id="programmatically-determined">Programmatically determined</dfn></dt>
	<dd><blockquote><p>determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities</p>
		<p>Example 1: Determined in a markup language from elements and attributes that are accessed directly by commonly available assistive technology.</p>
		<p>Example 2: Determined from technology-specific data structures in a non-markup language and exposed to assistive technology via an accessibility API that is supported by commonly available assistive technology.</p>
		<footer>(Source: <cite>Web Content Accessibility Guidelines (WCAG) 2.0. Copyright © 2008 W3C® (MIT, ERCIM, Keio), All Rights Reserved</cite>.)</footer></blockquote></dd>
	<dt><dfn id="publicly-available">Publicly available</dfn></dt>
	<dd><p>A website or web page that:</p>
		<ol>
			<li>is produced and maintained, in part or in whole, by the New Zealand Government organisation to which this Standard applies; and,</li>
			<li>can be accessed by individuals who are not employed by a New Zealand Government Public Service department or Non-Public Service department in the State Services.</li>
		</ol>
		<p>This includes a website or web page behind a login authentication mechanism that controls access by users outside the responsible New Zealand Government organisation.</p></dd>
	<dt><dfn id="role">Role</dfn></dt>
	<dd><blockquote><p>text or number by which software can identify the function of a component within Web content</p>
		<p>Example: A number that indicates whether an image functions as a hyperlink, command button, or check box.</p>
		<footer>(Source: <cite>Web Content Accessibility Guidelines (WCAG) 2.0. Copyright © 2008 W3C® (MIT, ERCIM, Keio), All Rights Reserved</cite>.)</footer></blockquote>
		<p>For common HTML controls, such as the <code>a</code>, <code>button</code>, <code>input type="checkbox"</code> elements, the role is automatically included as part of the element's programmatic identity.</p>
		<p>For custom controls built from other HTML elements, the ARIA role attribute can be used to specify the control's intended role, e.g. <code>&lt;div role="checkbox" aria-checked="false"&gt;</code>. Note that, with this example, additional CSS and JavaScript needs to provide the visual presentation and interactivity to mimic a checkbox's normal behaviour.</p></dd>
	<dt><dfn id="skip-links">Skip links</dfn></dt>
	<dd><p>A skip link is a link that offers users a way to skip to or passed a block of content. For example, activating a "Skip navigation" or "Skip to main content" link at the top of a web page allows a user to skip over the links in the banner and main navigation menu and go straight to the page's main content.</p>
		<p>Skip links are particularly helpful for sighted keyboard users who otherwise might be forced to use the <kbd>Tab</kbd> key to move through all the repeated menu links on a page before getting to the links or controls in the main area of the page.</p></dd>
	<dt><dfn id="synchronized-media">Synchronized media</dfn></dt>
	<dd><blockquote><p>audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such</p>
		<footer>(Source: <cite>Web Content Accessibility Guidelines (WCAG) 2.0. Copyright © 2008 W3C® (MIT, ERCIM, Keio), All Rights Reserved</cite>.)</footer></blockquote></dd>
	<dt><dfn id="user-interface-component">User interface component</dfn></dt>
	<dd><blockquote><p>a part of the content that is perceived by users as a single control for a distinct function</p>
		<p>Note 1: Multiple user interface components may be implemented as a single programmatic element. Components here is not tied to programming techniques, but rather to what the user perceives as separate controls.</p>
		<p>Note 2: User interface components include form elements and links as well as components generated by scripts.</p>
		<p>Example: An applet has a "control" that can be used to move through content by line or page or random access. Since each of these would need to have a name and be settable independently, they would each be a "user interface component."</p>
		<footer>(Source: <cite>Web Content Accessibility Guidelines (WCAG) 2.0. Copyright © 2008 W3C® (MIT, ERCIM, Keio), All Rights Reserved</cite>.)</footer></blockquote></dd>
	<dt><dfn id="website">Website</dfn></dt>
	<dd><blockquote><p>a coherent collection of one or more related web pages that together provide common use or functionality. It includes static web pages, dynamically generated web pages, and web applications</p>
		<p>Note: The focus of this methodology is on full, self-enclosed websites. Websites may be composed of smaller sub-sites, each of which can be considered to be an individual website. For example, a website may include an online shop, an area for each department within the organization, a blog area, and other areas that may each be considered to be a website.</p>
		<footer>(Source: <cite>Website Accessibility Conformance Evaluation Methodology (WCAG-EM) 1.0. Copyright © 2013 W3C® (MIT, ERCIM, Keio, Beihang), All Rights Reserved</cite>.)</footer></blockquote>
		<p>A department's corporate website (e.g. ministry.govt.nz) may comprise multiple sections (e.g. ministry.govt.nz/service-a and ministry.govt.nz/service-b) owned and/or administered by organisationally distinct units within the department. For the purposes of this Standard, these individual sections may be considered separate websites.</p>
		<p>Note that collections of web pages located at different fourth-level domains that belong to the same third-level domain, e.g. projectA.ministry.govt.nz and projectB.ministry.govt.nz, constitute separate websites.</p></dd>
	<dt><dfn id="web-page">Web page</dfn></dt>
	<dd><blockquote><p>a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent</p>
		<p>Note 1: Although any "other resources" would be rendered together with the primary resource, they would not necessarily be rendered simultaneously with each other.</p>
		<p>Note 2: For the purposes of conformance with these guidelines, a resource must be "non-embedded" within the scope of conformance to be considered a Web page.</p>
		<p>Example 1: A Web resource including all embedded images and media.</p>
		<p>Example 2: A Web mail program built using Asynchronous JavaScript and XML (AJAX). The program lives entirely at http://example.com/mail, but includes an inbox, a contacts area and a calendar. Links or buttons are provided that cause the inbox, contacts, or calendar to display, but do not change the URI of the page as a whole.</p>
		<p>Example 3: A customizable portal site, where users can choose content to display from a set of different content modules.</p>
		<p>Example 4: When you enter "http://shopping.example.com/" in your browser, you enter a movie-like interactive shopping environment where you visually move around in a store dragging products off of the shelves around you and into a visual shopping cart in front of you. Clicking on a product causes it to be demonstrated with a specification sheet floating alongside. This might be a single-page Website or just one page within a Website.</p>
		<footer>(Source: <cite>Web Content Accessibility Guidelines (WCAG) 2.0. Copyright © 2008 W3C® (MIT, ERCIM, Keio), All Rights Reserved</cite>.)</footer></blockquote>
		<p>Note that this definition of web page includes what are commonly referred to as web applications.</p></dd>
</dl>
