---
layout: assessment-methodology 
title: 2017 Web Standards Self-Assessment Methodology 
draft: true 
---

<div class="details" markdown="1">

## 1. Overview

<div class="ed">Blurb about the web standards and WCAG.</div>

This document details what someone needs to know to conduct the 2017 Web Standards Self-Assessment. It outlines the:

* tools needed and how to use them
* tests required as part of the Self-Assessment
* extra guidance for people less familiar with web accessibility.

### What we’re doing

The 2017 Self-Assessment is reducing the number of success criteria to be tested. Instead it focuses on the most common issues that were identified in the 2014 Self-Assessments. 

### What it doesn’t do

These tests can't tell you if your website is fully accessible or usable. If you want a full assessment, you need to test against all the requirements in the Web Accessibility and Web Usability Standards.

### How and when to use it

As well as using this document to conduct the 2017 Self-Assessment, organisations can also use it to:

* prioritise areas to improve
* report existing issues to management to get their support for training, remediation, resource allocation etc.
* raise web accessibility knowledge and skills among their staff
* test websites built by external companies for common accessibility issues
* apply the testing process throughout a website’s development lifecycle to ensure it is continually accessible.

### Assessment results

The Self-Assessment is meant to give organisations an indication of how well they are meeting the Web Standards, rather than how they rank against other organisations. The annual self-assessments will give them a way to measure their improvement over time.

**What you can do with the results**

The tests in this methodology are pretty black and white. There’s no weighting or percentage pass/fails. If you pass a test, it means all the content on that page passes. On the other hand, if a page fails only 1 of the 3 requirements involved in particular test, the page as a whole fails that test. Note down for your own use the things that need fixing and you can go back later and fix them.

### Future plans

We’re planning to review old issues and address new ones with different sets of tests every year. Over time we’ll build up a library of tests that addresses a greater number of Web Standards requirements.

</div>

<div class="details" markdown="1">

## 2. Skills you need for doing the self-assessment

If you’re doing the 2017 Web Standard Self-Assessment, you need to:

* have basic knowledge HTML — enough to be able to inspect code and understand how elements are nested
* use Chrome with the [Web Developer](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm) and [aXe](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd) extensions installed
* have another browser (Internet Explorer or Firefox) for testing keyboard use.
* know your website well enough to pick pages based on their content.

We’ll be holding workshops to demonstrate the various testing techniques. Come along if you have questions. Someone will be there to answer any testing questions you have. If you're not sure how to use the software, bring a laptop with the software installed. We can show you how to use it and test your web pages.

Questions can also be submitted at any time to [web.standards@dia.govt.nz](mailto:web.standards@dia.govt.nz).

</div>

<div class="details" markdown="1">

## 3. How to pick pages for testing

1. If your agency only runs one or two websites, skip to step 3. 

2. Determine the traffic to your agency’s busiest sites over the last 12 months. Identify the three most visited sites from your analytics. You will select pages from these three sites. 

3. For each site to be tested, enter the URL of the home page and the contact page in the assessment spreadsheet in column A of the ‘Manual tests’ worksheet. 

4. Use your knowledge of the sites to nominate pages that you know have one or more of the following in their content: 
    
   1. Lists (ordered and/or unordered) 
    
   2. Tables of data, or information presented in HTML tables 
    
   3. Forms and/or widgets (such as date pickers, calculators etc) 
    
   4. Images (try to include a few containing diagrams, flowcharts or graphs) 
    
   5. Video 

For each of these content types, aim to identify at least a couple of pages with that type of content. It may help to use Google to find content, using a search like this:

* site:your-domain-name.govt.nz graph

* site:your-domain-name.govt.nz video

5. Make the list of pages to be tested up to 20 from the most visited pages on your site/s, favouring the most visited site (e.g. if you need seven more pages from across three sites, you might take 4 pages from the busiest site, two from the second and one from the third, or 3-2-2 – use your judgement on this). 

6. You’re now ready to begin testing these 20 pages

</div>

<div class="details" markdown="1">

## 4. Tools you need for testing
{% include_relative tests/a11y/tools.md %}

</div>

<div class="details" markdown="1">

## 5. Web Accessibility Standard Tests

<div class="details" markdown="1">

### Test 1: Run the aXe automated testing tool
{% include_relative tests/a11y/axe.md %}


</div>

<div class="details" markdown="1">

### Test 2: Headings
{% include_relative tests/a11y/headings.md %}

</div>

<div class="details" markdown="1">

### Test 3: Lists
{% include_relative tests/a11y/lists.md %}

</div>

<div class="details" markdown="1">

### Test 4: Tables
{% include_relative tests/a11y/tables.md %}

</div>

<div class="details" markdown="1">

### Test 5: Keyboard
{% include_relative tests/a11y/keyboard.md %}

</div>

<div class="details" markdown="1">

### Test 6: Images
{% include_relative tests/a11y/images.md %}

</div>

<div class="details" markdown="1">

### Test 7: Captions and transcripts
{% include_relative tests/a11y/captions-transcripts.md %}

</div>

</div>

<div class="details" markdown="1">

## 6. Web Usability Standard Tests

<div class="details" markdown="1">

### 1. Home page
{% include_relative tests/usability/home-page.md %}

</div>
<div class="details" markdown="1">

### 2. Contact information
{% include_relative tests/usability/contact-information.md %}

</div>
<div class="details" markdown="1">

### 3. Copyright
{% include_relative tests/usability/copyright.md %}

</div>

<div class="details" markdown="1">

### 4. Privacy
{% include_relative tests/usability/privacy.md %}

</div>

<div class="details" markdown="1">

### 5. Links to non-HTML files
{% include_relative tests/usability/links-to-non-html-files.md %}

</div>

<div class="details" markdown="1">

### 6. Printable web pages
{% include_relative tests/usability/printable-web-pages.md %}

</div>

</div>

<div class="details" markdown="1">

## 7. Reporting back

<div class="ed">
Check this with RM for consideration in agency ICT maturity assessment.
</div>

### Consider your risk

After you've completed the Self-Assessment spreadsheet, identify the tests that recorded the most failures (Row #### of the results spreadsheet). Review those failures and consider what risk your agency is exposed to as a result of those impacts. Read more about [Web Standards risk assessment](https://webtoolkit.govt.nz/guidance/testing-and-assessment/web-standards-risk-assessment/). 

* How would you accommodate individuals or groups impacted by those failures, if you were required to? 
* Do you need to escalate any risks to your management team, or update any risk registers that your agency maintains? 
* Does your risk assessment suggest areas where your agency's web strategy or content publishing processes might need to be improved or reviewed?

### Areas for improvement
Next review which of the pages you tested recorded the worst results (column ### of the results spreadsheet). 

* Do they suggest that there is any areas of content (or web sites) that could be better served by migration to a more appropriate platform or channel? 
* Do they suggest opportunities for better educating content publishers? 
* Do they suggest opportunities for content (or web sites) that could be due for retirement?

The Web Standards team at DIA can help Public Service departments undertake this evaluation. Contact [web.standards@dia.govt.nz](mailto:web.standards@dia.govt.nz) if you want assistance.

### Report you plans

As of 01 July 2017, all publicly available web pages owned by Public Service departments and Non-Public Service departments in the State Services are expected to fully meet the Web Accessibility and Web Usability Standards. Based on your self-assessment results and review, what plans does your agency's Chief Information Officer or similar have for addressing risks and opportunities, and for improving your agency's web presence with regard to the Web Standards?

Attach these plans to your Self-Assessment results and return them to [web.standards@dia.govt.nz](mailto:web.standards@dia.govt.nz).

</div>

<div class="details" markdown="1">

## 8. Glossary
{% include_relative glossary/a11y-terms.md %}

{% include_relative glossary/usability-terms.md %}

</div>
