**Consequence of failure:** The consequence of each failure noted by the aXe tool can be found by following the 'Learn more' link for that violation from within the aXe tool.

You need to run the aXe tool on each page you test. You also need to run it for each viewport because different responsive designs may present different accessibility errors.
1. Run the aXe extension in Chrome by opening the developer tools.
2. Along the top line you should be able to select aXe, if you have it installed. (You may have to hit the &gt;&gt; toggle on the right of the toolbar to reveal the “aXe" option.)

	![Screenshot showing location of aXe extension in Chrome](https://govtnz.github.io/web-standards/assets/img/aXe-button.jpg) 
3. Hit the 'Analyze' button. 
4. In the aXe summary pane (where the issues are summarised), change the drop-down option from 'show:all' to 'show: violations'.
5. Select the list of issues including the number of violations. Unfortunately there is no easy way to do this with the keyboard, but clicking and dragging with the mouse works well enough. Place your mouse cursor just above and to the left of the text "Violations found". Click and drag the mouse cursor to just below the last issue in the list, making sure that the number of violations for that last issue is highlighted.

    ![Screenshot showing how to select the list of issues](https://govtnz.github.io/web-standards/assets/img/aXe.jpg) 
6. Copy the results and paste them into the appropriate single cell for desktop-size results in the [Self-Assessment results spreadsheet (XLSX 25KB)](https://govtnz.github.io/web-standards/guidance/assessment/2017-ws-self-assessment-results.xlsx). 
7. Resize your browser window to simulate a tablet (768x1024px). If there is no change in the page content or layout, choose 'no change' in the cell for tablet-size results. Otherwise, run 'Analyze' again, and copy and paste those results in the appropriate cell.
8. Finally, resize to simulate a smartphone (320x568px). If there is no change in the page content or layout, choose 'no change' in the cell for phone-size results. Otherwise, run 'Analyze' again, and copy and paste those results in the appropriate cell