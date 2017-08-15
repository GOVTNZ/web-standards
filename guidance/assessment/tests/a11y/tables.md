**Consequence of failure:** Failing this requirement means some people won't be able to associate table data with the row and column headers that give it context, and are consequently unable to make sense of the data.

**Related WCAG 2.0 success criteria:** [1.3.1 Information and Relationships](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html).

<div class="details" markdown="1">

#### What you should know about tables

##### Data tables

You have a data table if you need column headers and/or row headers to explain what the information in the cell means.

Otherwise it's a layout table.

A data table's column and row structure is expressed using the proper HTML markup.

###### Simple tables

Simple tables have one row of column headers and maybe one column of row headers as well. The easiest way to make a simple table accessible is to mark up column and row headers with `<th>` header elements. The header content describes what each column or row of cells represents. Sometimes header cells use the scope attribute, e.g. `<th scope="col">` to emphasise that the header applies to the entire column (or `<th scope="row">` for a row header), but it isn't necessary for a simple table. 

###### Example of a simple table

<table>
<thead>
	<tr>
		<th>Destination</th>
		<th>Name</th>
		<th>Departure date</th>
	</tr>
    </thead>
    <tbody>
	<tr>
		<th>Vienna</th>
		<td>Hilary Bell</td>
		<td>4 October 2009</td>
	</tr>
	<tr>
		<th>Cairo</th>
		<td>Sarah Fisher</td>
		<td>7 October 2009</td>
	</tr>
    </tbody>
</table> 

For an example of a simple table using `<th>` and `scope` attributes for both column and row headers, see the [table for the Web Accessibility Standard's implementation schedule](https://webtoolkit.govt.nz/guidance/about-the-standards/about-the-web-accessibility-standard/#implementation). 

###### Complex tables

<div class="ed" markdown="1">
This section under review.
</div>

Complex tables have multiple levels of row or column headers. 

###### Example of a basic complex table
<table>
<thead>
  <tr>
    <th scope="col">Destination</th>
    <th>Name</th>
    <th>Departure date</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <th rowspan="2">Vienna</th>
    <td>Hilary Bell</td>
    <td>4 October 2009</td>
  </tr>
  <tr>
    <td>Nicola Chang</td>
    <td>5 October 2009</td>
  </tr>
  <tr>
    <th>Cairo</th>
    <td>Sarah Fisher</td>
    <td>7 October 2009</td>
  </tr>
  </tbody>
</table>

Straightforward complex tables may only need to use the `scope` attribute to clarify how the column or row header cells apply to the different columns and rows. 

###### More complicated tables

If you want to make complex tables accessible, use:

* `headers` and `id` attributes, or 

* ARIA `rowheader` or `columnheader` roles. 

For tables with multi-level headers, use `headers` and `id` attributes. Each column or row header cell should be given a unique `id` attribute value, and each data cell a `headers` attribute that references all the relevant header cells' `id` values.

An example of this is the table at [http://www.treasury.govt.nz/budget/forecasts/hyefu2016/107.htm](http://www.treasury.govt.nz/budget/forecasts/hyefu2016/107.htm). 

You can also use the ARIA `rowheader` or `columnheader` role on the header cell's element if a table uses:

* `<td>` instead of `<th>`, or 

* `<div>` and `<span>` elements instead of standard HTML table markup; but in this latter scenario one will expect to see a number of other ARIA roles (i.e. `table`, `row`, `cell`) specifying the necessary table structures, e.g. 

``` html
<div role="table">
  <div role="row">
    <span role="columnheader">Name</span>
    <span role="columnheader">City</span>
    <span role="columnheader">Phone</span>
  </div>
  <div role="row">
    <span role="rowheader">Judy</span>
    <span role="cell">Auckland</span>
    <span role="cell">09 123 4567</span>
  </div>

``` 

###### Layout tables

If the  table is a layout table, it must not include any of following HTML elements and attributes:

* `<th>`, `<thead>`, `<tfoot>` and `<caption>` elements 

* `summary`, `scope` or `headers` attributes. 

If the table has any of these, the `<table>` element must have a `role` attribute with a value of `presentation` or `none`, e.g. `<table role="presentation">`. This tells the browser and assistive technologies to ignore the table markup and just read the content as if it the table structure wasn't there.

</div>

#### How to test

1. Scan the page you’re testing for tables. 

2. For each table, decide if it’s a data table or a layout table. 

3. If it's a data table, follow the steps under Testing data tables. If it's a layout table, follow the steps under Testing layout tables. 

##### Testing data tables

1. Look at each data table. Is it simple or complex?

2. Inspect the source code associated with each table.

3. Look at the HTML markup of its column and/or row headers. Once you record a pass you can move to the next test. Inspect the code in the header cell for any of the following: 

	* is marked up with a `<th>` element — most appropriate for simple tables 

	* uses a `<th>` with a `scope` attribute e.g. `<th scope="col">` for a column header, or `<th scope="row">` for a row header — mostly used for complex tables 

	* has an `id` attribute, and the data cell references that `id`'s value using a `headers` attribute  — mostly used for complex tables 

	* doesn't use `<th>` element, but instead uses the ARIA `rowheader` or `columnheader` role in the header cell element. 

4. If none of these options have been used to markup the header cell, record a failure, noting the reason. 

##### Testing layout tables

1. If it’s a layout table, record a failure, noting the reason, if the `<table>`  has any of the following: 

	* `<th>`, `<thead>`, `<tfoot>` and `<caption>` elements 

	* a `summary` attribute on the `<table>` element 

	* `scope` or `headers` attributes on `<td>` elements. 

2. Remember to resize your browser window and test at the other viewport sizes. If there is no change to page content or layout, enter ‘no change’ in the results and don’t test for that viewport. 

##### Other failure points

If you happen to see this, record a failure, noting the reason.

* A table uses `id` and `headers` attributes but associates content cells with the wrong header cells.