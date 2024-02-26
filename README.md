# Password Generator

## Password Generator
this website is a password generator. It uses Javascript to prompt the user for information with prompt and confirm actions. I used Javascript because it is the standard technology to use for a web application more complicated than normal HTML is prepared to do without involving database calls.

## Installation
This application runs in your browser and does not require installation.

Here is a screenshot and a link to the running website
[Password Generator](https://danpatoneil.github.io/Password-Generator/)
![a screenshot of the website. It shows the password generator page, which has a text box for the password and a button to generate the password.](screenshot.png)

## Use
This project will allow users to generate secure passwords by selecting an entered number of characters from several lists of characters that the user agrees to.

## Future iterations
The major flaw of this application is that it uses Javascript only to get user input. These options would be best addressed through a form like a list of check boxes or text entry that only allows numbers, rather than being forced to check that the input is a number using Javascript. The prompt interface is the best purely Javascript tool for this job but it would be highly preferrable if we could use HTML and CSS to change the password generator screen to have a regular form or even a custom text entry for which special characters the user wants in their password.
For the passwords generated themselves, a "weakness" of sorts is that the system makes letters twice as likely to be pulled as any other individual system. In theory a user could double input any choices they want weighted more heavily in the "any other characters" box but it would not be particularly programmatically hard to alter the code such that the letters are not double weighted by default.

MIT License

Copyright (c) 2024 Daniel O'Niel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.