**Impact of failure:** Failing this requirement excludes the deaf or hearing-impaired from accessing video or audio content. It also denies the benefits of captions to anyone in a noisy environment or who can’t access audio content.

**Related WCAG 2.0 success criteria:** [1.2.2 Captions (Prerecorded)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html); [1.2.3 Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc.html); [4.1.2 Name, role, value](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html).

<div class="details" markdown="1">

#### What you should know about captions and transcripts

##### Captions

Videos need captions, sometimes called subtitles.  Captions provide a text version of what people are hearing on video or audio content.

##### Descriptive text transcript

Video and audio content needs a descriptive text transcript. 

A descriptive text transcript is a written description of all the meaningful visual and audio information in the video or audio content.

A transcript allows a:

* person to read the transcript and find out what’s in the content
* person to search for keywords in the content
* search engine to index the content.

</div>

#### How to test

1. Look for any video or audio content on the page.

2. Play the content.

##### Captions

3. If it’s a video, while it’s playing, turn on captions.

4. If there aren’t captions, check if the content is high-stakes content? If the content is high-stakes and there are no captions, record a failure.

	 <div class="details" markdown="1">

	 <h6>High-stakes content</h6>

	 High-stakes content is critical content that people need. Examples include content about:

	 * civil emergencies and responses

	 * entitlement or access to benefits, education, consumer or other community protections, passports, or visas

	 * rights in criminal and civil proceedings

	 * central government elections or referenda

	 * tax obligations and rebates

	 * general health information, specific health advice, health and safety in employment.

	 </div>

5. If there aren’t captions and it’s not high-stakes content, was it published within the last 10 business days? If not, record a failure.

	 <div class="details" markdown="1">

	 <h6>Videos published in the last 10 days</h6>

	 There is a grace period of 10 business days from the publish date to provide captions. To find out when it was published:

	 * Click on the YouTube icon (next to the cog) to view the video information in YouTube.

	 * The publish date will be underneath the share icon.

	 </div>

6. If there are captions, check they are an accurate rendition of all meaningful audio information. If not, record a failure.

7. Check that you don’t have auto captions turned on. If you’ve only got auto-captions, record a failure.

	 <div class="details" markdown="1">

	 <h6>Auto captions</h6>

	 Don’t rely on auto-captions — they often don’t reflect what’s actually being said because of the differences in people’s ways of speaking. Automatic captions aren’t accessible because they’re not accurate enough. Captions in the specific language need to be listed.

	 To find out what captions you’ve got:

	 1. click on the cog (Settings) under the video

	 2. look at the caption options for Subtitles/CC.

	 3. If the option selected says English (auto-generated), these are auto captions.

	 </div>

8. Check the page for a text transcript for any video or audio content. If there’s no transcript, record a failure.

9. If there’s a transcript, is it clearly labelled as being a transcript? If not, record a failure.

10. Compare the transcript with the video/audio content. Is it an accurate reflection of the meaningful audio or visual information? If not, record a failure.

11. Right-click and look at the page source (not the inspector):

* Do a search for "<iframe".

* If you find an iframe look for a title attribute with a descriptive name.

* If the iframe doesn’t have one, record a failure for WCAG 4.1.2 (Name, role, value).

#### Other failure points

If you happen to see this, record a failure.

* There is no descriptive text transcript for any video and audio content.
