# Building Your Customizable (and free!) TAMID Website
Built by Alex Pollack, President of TAMID Group at Maryland <br/>
Contact me at azpollack97@gmail.com or (240) 676-3957

## Getting Started
To view my page, view **https://alexpollack0.github.io/tamidsite/**
The main purpose in creating this website was to put together an easy-to-understand and customizable template that chapters can use to code their own sites and edit when necessary.

To pull the code from this repo into your own directory, create a new directory (folder), and type in **git clone https://github.com/alexpollack0/tamidsite.git**

I've added commented numbers to the code (full.html) so please follow the number guide in the readme as you alter the code.

**The repo only contains 2 html files: full.html and index.html.**  index.html is simply a minified version of full.html.  I'll explain more about what this means later on but for now, don't worry about index.html.

This readme is split up into 3 sections: HTML (content), CSS (style), and hosting
### Section 1: HTML (full.html)
#### Section 1.1: Navigation Bar
1. 'src' on the image tag should have the path to the logo you want to appear in the top left
2. Change the text in between the a tags to alter the words appearing at the right of the navigation bar

#### Section 1.2: Landing Page
1. Change the text in the h1 tag to include your chapter's name
2. Change the text in the h3 tag to include any TAMID slogan of your choosing
3. Change the quote in the href attribute to link to your chapter's application
4. Change the text of the button by altering the text between the a tags

#### Section 1.3: 'What We Do' Page
1. If you want to change any of the icons on this page, change the image file path in the 'src' attribute
2. For your TAMID logo, include the image file path in the src attribute
3. Change the company logos on this page by altering the image file path in the 'src' attribute
4. Change the company website links by altering the text in the 'src' attribute of the a tags

#### Section 1.4: 'Meet the Team' Page
1. Change the headshot of each board member by changing the file path in the 'src' attribute of the image tag
2. Change each board member's name by altering the text between the p tags before the first br tag
3. Change the board member's position by altering the text between the p tags after the first br tag
4. Change the LinkedIn link by altering the text at the 'href' attribute of the first a tag
5. Change the email address by altering the text at the 'href' attribute the first a tag.  Make sure to keep the
'mailto:' at the beginning

#### Section 1.5: 'Portfolio' Page
1. Change the text in this header by simply altering what's typed between the h3 tags
2. Alter the image shown by changing the image file path in the 'src' attribute of the img
3. Alter the link attached to the image by adding the company's url to the 'href' attribute of the a tag

#### Section 1.6: 'Calendar' Page
1. In 'Google Calendar', hover over the calendar you would like to include in the My calendars' section of the screen and click the down-facing arrow.  Then click 'Calendar settings'.  Find 'Embed This Calendar', copy the text in the iframe tag, and replace the iframe tag below with your copied text.

#### Section 1.7: 'Contact' Page
1. Change the contact email address in the a 'href' attribute but keep the 'mailto:' at the beginning
2. Add whatever text you would like to be shown between the h1 tags
3. Change the links for the Facebook, LinkedIn, and Instagram icons by altering the text in the 'href' attributes for each of the 3 a tags

### Section 2: CSS (Styling, stylesheets/styles.css)
This section mainly goes over how to change the background images for each section.  If you have any more specific questions, feel free to contact me.
#### GENERAL TAGS STYLES / CLASSES
1. I wouldn't recommend changing anything here
#### NAVBAR CLASSES
1. I wouldn't recommend changing anything here
#### ABOUT CLASSES
1. To change the background image of the section that says "TAMID Group at ...", change the url of the background-image to the path of your image
2. Change the color of the headers in this section by altering the color property.  The current color is set to white
#### ABOUT2 CLASSES
1. To change the background image of the section titled "What We Do", edit the url of the background-image to the file path of your image
#### ABOUT3 CLASSES
1. I wouldn't recommend changing anything here
#### TEAM CLASSES
* All headshots on this page need to be in a square if you want them to look proper.
1. To change the background image of the section titled "Meet The Team", edit the url of the background-image to the file path of your image
2. Change the color of the header to whatever color you would like.  The current color is set to white
3. If you don't want the headshots to be black and white, remove the filter property below
4. Change the color of the caption below each headshot to whatever color you would like.  The current color is set to white
#### PORTFOLIO CLASSES
1. To change the background image of the section titled "Portfolio", edit the url of the background-image to the file path of your image
#### CALENDAR CLASSES
1. To change the background image of the section title "Calendar", edit the url of the background-image to the file path of your image
#### CONTACT CLASSES
1. To change the background image of the "Contact" section, edit the url of the background-image to the file path of your image

### Section 3: Miscellaneous
#### Section 3.1: Speeding up load time
- If you're using high-quality images, they'll likely significantly slow down the loading speed of your site.  To alleviate this issue, compress your image file size to under ~1.5 mb.  You can do this through any number of sources online.  I did it through adobe photoshop.  Here's a tutorial link of how to do it through photoshop: http://help.adobe.com/en_US/creativesuite/cs/using/WS6E857477-27FE-4a88-B8A4-074DC3C65F68.html.  Check out the "Optimize an image for the web" section.
