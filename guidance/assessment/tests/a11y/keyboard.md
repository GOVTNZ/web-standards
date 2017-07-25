**What you need:** A browser other than Chrome or Safari (e.g. Firefox or Internet Explorer) for this test. Chrome and Safari tend to add their own visible indication of keyboard focus.

**Impact of failure:** Failing this requirement means people who use a keyboard or other assistive devices instead of a mouse can’t use your site.

**Related WCAG 2.0 success criteria:** [2.1.1 Keyboard](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-keyboard-operable.html); [2.4.7 Focus Visible](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html); [2.1.2 No Keyboard Trap](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html).

<div class="details" markdown="1">

#### What you should know about keyboard

The keyboard is one of the more fundamental assistive devices because many other assistive technologies translate their commands into what are effectively keyboard commands. This means that a keyboard accessible website has a better chance of being usable with assistive technologies.

Keyboard users need to be able to navigate to and operate any interactive element on a page that can be operated with a mouse. The <kbd>Tab</kbd> moves focus from one interactive element (e.g. link, button) to the next. Pressing <kbd>Shift</kbd>+<kbd>Tab</kbd> moves focus back up to the previous interactive element. Links are activated by the <kbd>Enter</kbd> key, while buttons are activated by the <kbd>Space</kbd> key (or the <kbd>Enter</kbd> key). The arrow keys are used to change the selected item in a group of radio button. They might also be used to move focus around the components in a custom web application. In fact, any element on a web page can be programmed to perform some function upon the press of any key.

As you use the <kbd>Tab</kbd> to move through the page, keep in mind that there should be a visible focus indicator showing you where your keyboard focus is. It must be something that’s easy to see, like a border or highlight.

Depending on backgrounds and the style of the focus indicator, it can sometimes be hard to see rather than completely invisible. If you can see it, even if it doesn’t really stand out, simply note it in the report rather than recording a failure.

Also remember that unlike screen readers, you won’t see focus move to everything on the page. Items that you can’t interact with, like headings or body text, don’t take keyboard focus. But items like forms, links, carousel controls, buttons, videos, dialog boxes do need interaction, so when they get keyboard focus, it should be visible to users.

</div>

#### How to test

Basic keyboard testing is easy. You’ll mostly use the <kbd>Tab</kbd>, <kbd>Enter</kbd> and arrow keys, as well as the <kbd>Space</kbd> key.

[WebAIM: More detailed keyboard testing](http://webaim.org/techniques/keyboard/#testing)

You need to test keyboard use for any type of content on your page. Not all the features below will appear on your page at the same time. Test whatever features you have, except for visible focus. Visible focus must be tested on every page.

1. Starting in the address bar, use the <kbd>Tab</kbd> key to move through the page. Use <kbd>Shift-Tab</kbd> if you need to move backwards.  

##### Visible focus 

1. While you move through the page, make sure you can see where the current focus is. Record a failure of visible focus if you can’t see anything. If it’s there but hard to see, just note it in the report.  

##### Links and buttons

1. Use the <kbd>Tab</kbd> to move to every link and press <kbd>Enter</kbd>.  Use the browser’s back button to go back to the previous page. Record a failure of keyboard functionality if the link doesn’t work with the <kbd>Enter</kbd> key.

2. Use the <kbd>Tab</kbd> to move to each button and press the <kbd>Space</kbd> key. Check that the button performs the same action as when clicked on with a mouse. If you can’t activate the button with the <kbd>Space</kbd> key, record this as a failure of keyboard functionality.  

##### Popup boxes

1. If a popup box (sometimes known as a modal dialog or lightbox) appears, check that you can do the following: 
    1. easily move around the box  
    2. use everything in the box without using a mouse 
    3. close the box by either hitting the <kbd>Esc</kbd> key, or navigating to and activating a close or cancel button. 

2. If you can’t do all these things with the keyboard alone, record a failure of keyboard functionality. 

3. If the box is a modal or lightbox, make sure your tabbing is being restricted to the box. If you tab past the last item in the box, focus needs to loop to the beginning of the box. Record a failure of keyboard functionality if the keyboard focus continues on in the background, then close the box and keep testing. 

<div class="details" markdown="1">

###### More about Popup boxes

Modal or lightboxes are meant to stop the user from doing anything else on the page until they’ve finished with the box. An example is an image gallery lightbox — while viewing the images, the page content behind it is not available.

Typically the rest of the page will be partly dimmed to show that mouse users can’t click on anything outside the box. Keyboard focus should also be trapped within the box, and all content outside it should be unavailable to user interaction, including via assistive technologies like screen readers.

</div>

##### Videos and carousels

1. Check that you can use the keyboard to control things like videos, carousels, sliders. Record a failure of keyboard functionality where you can’t. 

    * If your page has an embedded video, can you: 
        * get to the video with the <kbd>Tab</kbd> key? 
        * use each control in the player using some combination of <kbd>Enter</kbd>, <kbd>Space</kbd>, or arrow keys?  
        * use the <kbd>Tab</kbd> key to move past the video player and down to any focusable elements that follow it? 

    * If the page contains a carousel, can you: 
        * use the keyboard to set focus to and activate each of its controls? 
        * switch between its panels? 

##### Forms

1. Check that you can use the keyboard to complete a form. Record a failure of keyboard functionality where you can’t.If your page has a form, can you use the: 
    * <kbd>Tab</kbd> key to get to each form field? 
    * arrow keys in a group of radio buttons to change which radio button is selected? 
    * <kbd>Space</kbd> key to check or uncheck a checkbox?  
    * date picker/calendar widget by: 
        * navigating the day, week, month and year using the <kbd>Tab</kbd> and/or arrow keys? 
        * select a specific date with the <kbd>Enter</kbd> or <kbd>Space</kbd> keys? 
    * up/down arrow keys to choose from drop-down options? 
    * enter key to submit the form? 

##### Retest at other viewports

1. Remember to resize your browser window and test at the site’s other viewports if there is any change page content or layout. 

##### Other failure points 

If you happen to see this, record a failure.

* Focus disappears from an element just as or right after it receives visible focus.
