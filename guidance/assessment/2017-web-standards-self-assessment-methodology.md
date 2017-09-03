---
layout: assessment-methodology 
title: 2017 Web Standards Self-Assessment Methodology 
draft: true 
---

<div class="details top" markdown="1">

## 1. Overview

### New Zealand Government Web Standards

The [New Zealand Government Web Standards](https://webtoolkit.govt.nz/standards/) ("Web Standards") are made up of 2 individual standards:

1. The [Web Accessibility Standard](https://webtoolkit.govt.nz/standards/web-accessibility-standard/) is a profile of the World Wide Web Consortium's (W3C) [Web Content Accessibility Guidelines v2.0](https://www.w3.org/TR/WCAG20/) (WCAG 2.0). WCAG 2.0 is at the heart of web accessibility requirements in a number of jurisdictions including Australia, Canada and the United Kingdom. The New Zealand profile defines some custom exceptions to WCAG 2.0 for use within the New Zealand Government. 

2. The [Web Usability Standard](https://webtoolkit.govt.nz/standards/web-usability-standard/) is a collection of policy-related requirements that draw on other frameworks such as the [Privacy Act](https://www.privacy.org.nz/the-privacy-act-and-codes/privacy-act-and-codes-introduction/), the [New Zealand Government Open Access and Licensing Framework](https://www.ict.govt.nz/guidance-and-resources/open-government/new-zealand-government-open-access-and-licensing-nzgoal-framework/), and a small number of best practices identified by the Web Standards Working Group (since discontinued) of cross-agency web practitioners. 

### 2017 Self-Assessment Methodology

The 2017 Web Standards Self-Assessments have less tests than the 2014 Self-Assessments. The 2017 Self-Assessment Methodology does not comprehensively test against all requirements of the Web Standards, nor does it deliver a formal compliance score or ranking. Instead, it outlines a series of tests whose results are an actionable indicator of how well web content is meeting the intent of the Web Standards.

This document details what someone needs to know in order to conduct the 2017 Annual Web Standards Self-Assessment. It outlines the:

* tools needed and how to use them 

* tests required as part of the Self-Assessment 

* extra guidance for people less familiar with web accessibility. 

#### Web Standards Test Suites

The tests in the new Annual Self-Assessment Methodology come from 2 simple and reusable test suites, one for each of the 2 Web Standards.

The [Web Usability Standard Test Suite](web-usability-standard-test-suite.html) includes a test for each requirements. As those requirements are relatively few and straightforward, this test suite has been incorporated wholesale into the Annual Self-Assessment Methodology. 

The [Web Accessibility Standard Test Suite](web-a11y-standard-test-suite.html) combines an automated testing tool with a collection of easy-to-perform manual procedures that test for common accessibility barriers and issues. As time goes on, we'll build up the Web Accessibility Standard Test Suite with more tests addressing a greater number of issues. The 2017 Self-Assessment Methodology will include only a subset of the Web Accessibility Standard Test Suite that is mainly focused on the most common issues identified in the 2014 Self-Assessments. 

The Web Standards Test Suites can be used, as they are for these Annual Self-Assessments, to identify and measure improvement over time. More practically, they can also be used anytime and with any web content to:

* identify, prioritise, and fix notable accessibility and other Web Standards issues 

* report existing issues to management to get their support for training, remediation, resources, etc 

* raise staff knowledge and skill in web accessibility   

* test web content built by external companies for common accessibility issues 

* apply the testing process throughout a website's development lifecycle to ensure it is continually accessible. 

#### What it doesn't do

The Annual Self-Assessment Methodology can't tell you if your website is fully accessible or usable. If you want a full assessment, you need to test against all the requirements of the Web Accessibility and Web Usability Standards.

</div>

<div class="details top" markdown="1">

## 2. Prerequisites for the Self-Assessment

If you're doing the 2017 Web Standard Self-Assessments, you need:

* to have basic knowledge HTML — enough to be able to inspect code and understand how elements are nested

* to know your website well enough to pick pages based on their content

* Chrome with the [Web Developer](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm) and [aXe](
https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd) extensions installed

* another browser (Internet Explorer or Firefox) for testing keyboard use

* the [2017 Web Standards Self-Assessment results spreadsheet (XLSX 25KB)](https://govtnz.github.io/web-standards/guidance/assessment/2017-ws-self-assessment-results.xlsx).

We'll be holding workshops to demonstrate the various testing techniques. Come along if you have questions. Someone will be there to answer any testing questions you have. If you're not sure how to use the software, bring a laptop with the software installed. We can show you how to use it and test your web pages.

Questions can also be submitted at any time to [web.standards@dia.govt.nz](mailto:web.standards@dia.govt.nz).

</div>

<div class="details top" markdown="1">

## 3. How to pick pages for testing

1. If your agency only runs one or two websites, skip to step 3. 

2. Determine the traffic to your agency's busiest sites over the last 12 months. Identify the 3 most visited sites from your analytics. You will select pages from these 3 sites. 

3. For each site to be tested, enter the URL of the home page and the contact page in the assessment spreadsheet in column A of the ‘Manual tests' worksheet.

4. Use your knowledge of the sites to nominate pages that you know have one or more of the following in their content:     

   * lists (ordered and/or unordered)

   * tables or information presented in HTML tables

   * forms and/or widgets (such as date pickers, calculators etc)

   * images (try to include a few containing diagrams, flowcharts or graphs)

   * video.

    For each of these content types, aim to identify at least a couple of pages with that type of content. It may help to use Google to find content, using a search like this:

   * site:your-domain-name.govt.nz graph

   * site:your-domain-name.govt.nz video

5. Make a list of pages to be tested (20 in total) from the most visited pages on your site/s, favouring the most visited site (e.g. if you need 7 more pages from across 3 sites, you might take 4 pages from the busiest site, 2 from the second and 2 from the third, or 3-2-2 — use your judgement on this). 

6. You're now ready to begin testing these 20 pages.

</div>

<div class="details top" markdown="1">

## 4. Tools you need for testing
{% include_relative tests/a11y/tools.md %}

</div>

<div class="details top" markdown="1">

## 5. Web Accessibility Standard Tests

<div class="details test" markdown="1">

### Test 1: Automated testing with aXe
{% include_relative tests/a11y/axe-for-methodology.md %}


</div>

<div class="details test" markdown="1">

### Test 2: Headings
{% include_relative tests/a11y/headings-for-methodology.md %}

</div>

<div class="details test" markdown="1">

### Test 3: Lists
{% include_relative tests/a11y/lists.md %}

</div>

<div class="details test" markdown="1">

### Test 4: Tables
{% include_relative tests/a11y/tables.md %}

</div>

<div class="details test" markdown="1">

### Test 5: Keyboard
{% include_relative tests/a11y/keyboard.md %}

</div>

<div class="details test" markdown="1">

### Test 6: Images
{% include_relative tests/a11y/images.md %}

</div>

<div class="details test" markdown="1">

### Test 7: Captions and transcripts
{% include_relative tests/a11y/captions-transcripts-for-methodology.md %}

</div>

</div>

<div class="details top" markdown="1">

## 6. Web Usability Standard Tests

<div class="details test" markdown="1">

### 1. Home page
{% include_relative tests/usability/home-page.md %}

</div>
<div class="details test" markdown="1">

### 2. Contact information
{% include_relative tests/usability/contact-information.md %}

</div>
<div class="details test" markdown="1">

### 3. Copyright
{% include_relative tests/usability/copyright.md %}

</div>

<div class="details test" markdown="1">

### 4. Privacy
{% include_relative tests/usability/privacy.md %}

</div>

<div class="details test" markdown="1">

### 5. Links to non-HTML files
{% include_relative tests/usability/links-to-non-html-files.md %}

</div>

<div class="details test" markdown="1">

### 6. Printable web pages
{% include_relative tests/usability/printable-web-pages.md %}

</div>

</div>

<div class="details top" markdown="1">

## 7. Reporting back

<div class="ed">
Check this with RM for consideration in agency ICT maturity assessment.
</div>

### Consider your risk

After you've completed the Self-Assessment spreadsheet, identify the tests that had the most failures (row 66 of the results spreadsheet). In reviewing those, refer back to the 'Consequence of failure' section for each test and evaluate what that means for the users of your web page or website. Consider what events might arise as a result of the failure, and what impact those events could have on your agency. Consider what risk your agency is exposed to as a result of those impacts. Read more about [Web Standards risk assessment](https://webtoolkit.govt.nz/guidance/testing-and-assessment/web-standards-risk-assessment/). 

After you've completed the Self-Assessment spreadsheet, identify the tests that had the most failures (row 66 of the 'Manual tests' workbook in the results spreadsheet). In reviewing those, refer back to the 'Consequence of failure' section of each corresponding tests and evaluate what that means for the users of your web page or website. Consider what event(s) might arise as a result, and what impact those events could have on your agency. Consider what risk your agency is exposed to as a result of those impacts. Read more about [Web Standards risk assessment](https://webtoolkit.govt.nz/guidance/testing-and-assessment/web-standards-risk-assessment/). 

* How would you accommodate individuals or groups impacted by those failures, if you were required to? 

* Do you need to escalate any risks to your management team, or update any risk registers that your agency maintains? 

* Does your risk assessment suggest areas where your agency's web strategy or content publishing processes might need to be improved or reviewed?

### Areas for improvement
Next review which of the pages you tested recorded the worst results (column Q of the results spreadsheet). 

Do they suggest any:

* areas of content (or web sites) that could be better served by migration to a more appropriate platform or channel? 

* opportunities for better educating content publishers? 

* opportunities for content (or web sites) that could be retired or archived?

The Web Standards team at the Department of Internal Affairs (DIA) can help Public Service departments with this evaluation. Email [web.standards@dia.govt.nz](mailto:web.standards@dia.govt.nz) if you want help.

### Report your plans

As of 01 July 2017, all publicly available web pages owned by Public Service departments and Non-Public Service departments in the State sector are expected to fully meet the Web Accessibility and Web Usability Standards. Where these standards are not met, agencies are asked to submit a plan for managing any areas of non-conformance.

Based on your self-assessment results and review, what plans does your agency's Chief Information Officer or similar have for addressing risks and opportunities, and for improving your agency's web presence with regard to the Web Standards?

If your agency undertook any activities as a result of the 2014 Web Standards Self-Assessments, we are also interested in learning about those, and the impact they have had.

Attach these plans with your Self-Assessment results spreadsheet and return them to [web.standards@dia.govt.nz](mailto:web.standards@dia.govt.nz).

</div>

<div class="details top" markdown="1">

## 8. Glossary
{% include_relative glossary/a11y-terms.md %}

{% include_relative glossary/usability-terms.md %}

</div>
