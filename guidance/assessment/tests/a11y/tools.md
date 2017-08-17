Testing web content against the Web Accessibility Standard can be manual or automated. Automated accessibility tests only address approximately 25% of accessibility requirements. Running automated tests is generally fairly easy.

There are tools you can use to help with manual testing. The tools we're using are:

* Chrome's built-in developer tools — to inspect a web page's code 

* Web Developer extension for Chrome — a semi-automated testing tool 

* Chrome Device Mode — to simulate viewport sizes, and  

* aXe extension for Chrome — the automated testing tool. 

### Developer tools

When you need to inspect the code, use the built-in developer tools. To open the developer tools, press <kbd>F12</kbd> in Windows, and <kbd>Cmd</kbd>+<kbd>Opt</kbd>+<kbd>I</kbd> on a Mac. 

Another way to open the developer tools is to right-click on any element in the web page, and select "Inspect" from the contextual menu. 

[Explore Chrome's developer tools](https://developers.google.com/web/tools/chrome-devtools/)

[Inspect and edit pages and styles in Chrome](https://developers.google.com/web/tools/chrome-devtools/inspect-styles/)

We recommend opening the developer tools either as a separate window or at the bottom of the screen. 

If you're new to using developer tools, try them out before starting the tests. 

**Note:** Also remember that you can always close the developer tools if at any point you don't need them. Especially if you have the developer tools loaded at the bottom or to the side of the current web page (as opposed to in a separate window), closing the developer tools allows you to see more of the web page at once, which can be helpful depending on the test you are doing. 

### Web Developer extension

The Web Developer extension for Chrome has various features to help simplify accessibility testing. We'll use it to speed up checking headings, lists and image alt text. But it's well worth looking at the other things it has to offer.

#### Get the extension

[Download the Chrome extension](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm).

#### Use the extension

Once you've installed the extension, you can access it using the cog icon on the toolbar to the right of the address bar (shown below).

![Screenshot showing Web Developer extension in Chrome](https://govtnz.github.io/web-standards/assets/img/chrome-wd-ext.jpg)

#### What you need to know

* The area at the top is the menu. The Outline menu is shown. 

* Any selected item will have a green tick next to it. 

* To get rid of the pop up menu, just click in the page. 

### Chrome Device Mode

You'll be asked to run some tests at a few screen resolutions or viewport sizes. Accessibility issues that only appear on smaller screens will get picked up this way.

As well as testing your pages at your browser's normal desktop size, you also need to test at the following viewport sizes: 

* 320 x 568px - the size of a small screen mobile phone like an iPhone 5

* 768 x 1024px - roughly the size of a tablet like an iPad.

If you don't see any changes in the page content or layout, record 'no change' for that viewport size.

To simulate a mobile or tablet experience on a desktop computer, you could resize your browser to approximately the size of a tablet or a smartphone. But it's easier to use built-in tools like Chrome's Device Mode to help with this. 

<div class="details" markdown="1">

#### Using Chrome's Device Mode

(For more information, see [Using Chrome's Device Mode to simulate mobile devices](https://developers.google.com/web/tools/chrome-devtools/device-mode/).)

To use the Device Mode in Chrome:

1. Open the developer tools.

2. Device Mode is the second button on the left-hand side of the toolbar at the top of the developer tools panel. 

	![Screenshot showing device mode button in Chrome](https://govtnz.github.io/web-standards/assets/img/device-mode.jpg)

3. The browser will switch into Device Mode and the web page screen size will change.  

4. Choose the viewport size you need by: 

	1. Clicking on the dropdown on the toolbar above the smaller web page.

		![Screenshot showing responsive menu changing to iPad device in Chrome](https://govtnz.github.io/web-standards/assets/img/responsive-menu.jpg)

	2. Choose the device size you need. 
		
</div>

**Note:** Chrome's Device Mode is very useful, but can be confusing to look at. Remember to turn off Device Mode when not using it to avoid any confusion. 

### aXe automated testing tool

For automated testing, we recommend using aXe, an open-source accessibility testing tool that comes as a browser extension for Chrome. The download page tells you how to run it and interpret what you find.

[Download and use aXe for accessibility testing](http://www.deque.com/products/axe/)
