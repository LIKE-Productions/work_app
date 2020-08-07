# A Word to Markdown to... Converter

# Note!!!
### This is deprecated. Anyone who wants to make this their own, put up an issue.

## Basic Info
This is a website that hopes to be able to convert a <mark>Word Document</mark> into <u>Markdown</u> into whatever we support.

We also plan to do the opposite, and you can read about that below.


### Issues
If you want more formats, you can post them <a href="https://github.com/yappermags/work_app/issues">here.</a>
> We use the Mammoth library for these convertions. Their package is available <a href="npmjs.com/packages/mammoth">here.</a>
## Tracking our development process

*May 29, 2020.* The first steps of our development process, where I am just initializing the workspace that Node gives me. This is not operable.

*May 30 2020.* The next big step of our development process, where I have just made a /docx page to convert the documents. I have copied the Mammoth browser-demo page, and I am in the process of stripping it down to the only important parts. 

*May 31 2020.* I am still in the process of debugging Mammoth. I managed to finalize debugging Mammoth at *1:00PM MNT*.

*June 1, 2020.* I have bebugged any problems I have with directories, and I will **finish** in a week.

*June 2, 2020.* I have released documentation on my website.

*June 3, 2020.* Nothing. **CRICKETS!**

*June 4, 2020.* I am making sure everything work OK for the initial release.

*June 5, 2020.* I have added a new repository named print.js for our first ... conversion: PDF and easy print. Print.js is an easy to learn package with great documentation, so I might learn it in a breeze.

*June 6/7, 2020.* I have deployed the website, and made sure it worked. I will now add some extra features, and then leave to work on my MD-Worconverter project.

*August 8, 2020.* I am going to mkae a few changes before I deprecate this app in 5 months. It will be available for another year before I take it down from the web and archive it on Github.

### Dependencies

<ul>
<li>Express</li>
<li>EJS(Embedded Javascript)</li>
<li>Nodemon</li>
<li>Mammoth</li>
<li>print.js</li>
</ul>

### Frontend Dependencies

<ul>
<li>Bootstrap</li>
</ul>

## Other Information

### Markdown convertions
I am going to add Markdown to replace the MC-Worconverter beta nav button.

### Who this is for
 This is for the kind of people who want to take a raw Word document, but don't want to have to manually format it themselves. They can email their client to see what formats they want. I will give you a JS prompt to enter in format details. my app will take those details (We are also not saving formats into databases for security reasons) and apply them to your document.

If you have any problems about using no databases, put it in the <a href="https://github.com/yappermags/work_app/issues">issues page.</a>

### Versions

*May 29, 2020*. **Alpha Version** 1.0

*May 30 2020*. **Alpha Version** 1.0.1

*May 31 2020*. **Alpha Version** 1.0.2

*June 1, 2020*. **Alpha Version** 1.0.3

*June 2, 2020*. **Alpha Version** 1.0.4

*June 3, 2020*. **Alpha Version** 1.0.5

*June 4, 2020*. **Alpha Version** 1.0.6

*June 5, 2020*. **Alpha Version** 1.0.7

*June 6/7, 2020*. **Alpha Version** 1.1.0

*August 7, 2020*. **Beta Version** 1.5.0