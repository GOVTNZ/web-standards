**Consequence of failure:** Failing this requirement means that users who can’t see non text content, like images, diagrams and charts, can’t get access to the information contained there.

**Related WCAG 2.0 success criteria:** [1.1.1 Non-text content](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html); [4.1.2 Name, role, value](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html).

<div class="details" markdown="1">

#### What you should know about images and alt text

Images that aren’t just decorative must have a text alternative that could replace the meaningful information in the image. This is called alt text and it’s usually done by using the alt attribute on the `<img>` element that inserted the image in the page. Decorative images have an empty alt attribute `<img alt="">`.

People don’t always agree on what the correct alt text should be.  If you feel the alt text reasonably serves as a text replacement for the content of the image, given its surrounding context, that’s enough to pass the test.

Every meaningful image in a page needs a short (~150 characters) alt text. Complex images, e.g. charts, may also need a long text description to cover the detail in the image.

For complex content images, the long text alternative can be provided in a number of ways. An image’s long text alternative is supposed to be programmatically associated with the image, so that machines can tell they are related. This can be done in several ways, but for the purpose of this methodology, it is sufficient if a suitable long text alternative is available on the same page immediately next to its associated image, or on another web page clearly linked to from the image or a link next to the image.

<div class="details" markdown="1">

##### CSS Background images

Content images should be added using `<img>`. CSS, which is the presentation layer, should be used for decorative or presentation images. But sometimes, for various reasons, content images are added using CSS. In these cases, there's no easy way to provide alt text (yet) and so the alt text needs to be in the HTML or otherwise in the web page somehow.

###### Adding alt text for CSS images 

Background images inserted using CSS should only be used for decorative images because you can’t yet put alt text on one. If they convey meaningful information they must have a text alternative near where the image appears. There are a number of ways to do this:

- Add text but use CSS to position it offscreen. It isn’t visible, but it is available to a screen reader user. 
- Assign the element that has the CSS image a `role` of `img` (`role="img"`) and use an `aria-label` attribute for the alt text. 

###### Finding CSS images

Outline images using the Web Developer extension as shown in Step 1 of the How to test section. If you can’t find an `<img>` element when you inspect the code for an image, it’s probably been added as a background image using CSS.  The easiest way to confirm this is with the Web Developer extension. 

1. Open the Web Developer extension and select ‘Images’ and ‘Outline Background Images’.  This will add a visual border around each CSS background image on the page.  
2. For each background image outlined on the page, inspect the code for the element that the CSS background image is attached to.
3. Once you find it, look for the text alternative in the code. 

###### How to inspect code to find the CSS image

For example, the [Govt.nz website](https://www.govt.nz/) uses a CSS background image for the linked New Zealand Government logo in the site banner.

![New Zealand Government logo outlined because it is a background image](https://govtnz.github.io/web-standards/assets/img/gnz-css-img.jpg)

In this example, to inspect the code for the CSS image:

1. Right-click on the image and inspect the code. The developer tools window opens and highlights an `<a>` element in the page. 
2. Look in the Styles panel for something that says background or background-image with a url(...) in its value. It will usually be near the top. 
3. The `<a>` element you’re currently inspecting doesn’t have a background image attached. Try inspecting its parent element, in this case the `<div>` containing the link. You’ll see the `<div>` has a `background-image` property with a "url(...)" in the value, so you’ve found the right element. 
4. That `<div>` contains a link, which you’ve already inspected. Inside that `<a>` element is a `<span>` containing text that matches the text in the logo image. That text may not be visible to sighted users, but it serves as the text alternative for the CSS background image. It also serves as the link text for the link. 

</div>

<div class="ed" markdown="1">
Need examples!
</div>

</div>

#### How to test

1. Find all the non-CSS images in the content of the page. The easiest way to do this is to:

    * use the Web Developer extension, and select 'Images'

    * check 'Outline All images'.

    This highlights all images in the page content.

2. Assess each image like this:

    a. If any image does not have an alt attribute at all, record a failure, noting the reason and go to the next test.

    b. Is the image part of a link? If it’s not, move on to step number 3 below. If it is, inspect it to view the alt text. It must meet one of these criteria:

    <table>
      <tr>
        <th>Type of image link</th>
        <th>What it needs to be accessible</th>
      </tr>
      <tr>
        <td>The link is just the image with no extra words surrounding it.</td>
        <td>The alt text must describe the link’s purpose or destination — rather than describe the image itself, e.g. the alt text for a Twitter icon might be ‘Tweet this page’.</td>
      </tr>
      <tr>
        <td>The link contains an image with extra text that describes the link’s purpose or destination.</td>
        <td>The alt text should be empty, i.e. <code>alt=""</code>.</td>
      </tr>
      <tr>
        <td>The link contains an image with extra text, but the image has meaningful information that isn’t in the link text.</td>
        <td>Include the extra meaningful information from the image in the image’s alt text.</td>
      </tr>
    </table>


3. If the image isn't part of a link ask yourself these questions about the image:

    * Is there meaningful information in this image or is it purely decorative?

    * If it is meaningful, how would you express the information in words?

    * Does the image contain words?

    The image must meet one of these criteria:

    <table>
      <tr>
        <th>Type of image</th>
        <th>What it needs to be accessible</th>
      </tr>
      <tr>
        <td>The image has meaningful information.</td>
        <td>It needs a text alternative (alt text, max ~150 characters) to replace the meaningful information in the image, e.g. <code>alt="Alt text"</code>.</td>
      </tr>
      <tr>
        <td>The image contains words.</td>
        <td>Include the words in the image in the image’s alt text, e.g. <code>alt="Alt text representing all the words in the image"</code>.</td>
      </tr>
      <tr>
        <td>The image is purely decorative.</td>
        <td>The image’s alt text should be empty, i.e. <code>alt=""</code>. Note: Leaving out the <code>alt</code> attribute altogether makes the image inaccessible and should be recorded as a failure.</td>
      </tr>
      <tr>
        <td>The image is too complex to describe with just alt text, e.g. a chart, graph or infographic.</td>
        <td>Provide both alt text and a longer text alternative to relate the image’s meaningful information. This can be done in a number of ways:
          <ul>
            <li>use a longdesc attribute that links to the description of the image, e.g. <code>&lt;img alt=“Alt text” longdesc=“URL to long description”&gt;</code></li>
            <li>put the image and the long description text together in a <code>&lt;figure&gt;</code> element</li>
            <li>include the long description as text immediately following the image.</li>
          </ul>
        </td>
      </tr>
    </table>

4. If you have images that automatically change on a page, make sure that each newly displayed image has appropriate alt text reflecting that image:

    a. Inspect the code to read the first image’s alt text.

    b. Check that the alt text for the first image matches the image.

    c. Wait until the next image loads and then make sure that the alt text has changed to match the new image. If it doesn't record a failure, noting the reason.

5. Check for any images that contain meaningful information but haven’t been outlined. These are likely to be CSS or background images.

6. Check the code to find the text alternatives for these images. If there isn't a text alternative, record a failure, noting the reason.

7. Remember to resize your browser window and test at the other viewport sizes. If there is no change to page content or layout, enter ‘no change’ in the results and don’t test for that viewport.

#### Other failure points

If you happen to see any of these, record a failure, noting the reason.

* An image conveys information using different colours, but the alternative text doesn’t include that information.

* A link contains only an img element with an empty alt attribute. Record a failure of 4.1.2.
