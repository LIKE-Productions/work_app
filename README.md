# A Word to Markdown to... Converter

## Basic Info
This is a website that hopes to be able to convert a <mark>Word Document</mark> into <u>Markdown</u> into whatever we support.


### Issues
If you want more formats, you can post them <a href="https://github.com/yappermags/work_app/issues">here.</a>
> We use the Mammoth library for these convertions. As I gain more knowledge on how to use Mammoth, the website will continue to thrive and grow.

## Tracking our development process

*May 29, 2020.* The first steps of our development process, where I am just initializing the workspace that Node gives me. This is not operable.

*May 30 2020.* The next big step of our development process, where I have just made a /docx page to convert the documents. I have copied the Mammoth browser-demo page, and I am in the process of stripping it down to the only important parts. 

*May 31 2020.* I am still in the process of debugging Mammoth

### Dependencies

<ul>
<li>Express</li>
<li>EJS(Embedded Javascript)</li>
<li>Nodemon</li>
<li>Mammoth</li>
</ul>

## Other Information

### What I recommend

>I personally recommend that you stick to Markdown, because Markdown is easy to read, and doesn't require any third-party installations. A PDF would be a good business alternative, and so would HTML. EPUB translation might happen in the future, but I cannot make any promises yet.

### Who this is for
 This is for the kind of people who want to take a raw Word document, but don't want to have to manually format it themselves. They can email their client to see what formats they want. I will give you a JS prompt to enter in format details. my app will take those details (We are also not saving formats into databases for security reasons) and apply them to your document.

If you have any problems about using no databases, put it in the <a href="https://github.com/yappermags/work_app/issues">issues page.</a>

### Versions

*May 29, 2020*. **Alpha Version** 0.1
*May 30 2020*. **Alpha Version** 0.1.1
*May 31 2020*. **Alpha Version** 0.1.2