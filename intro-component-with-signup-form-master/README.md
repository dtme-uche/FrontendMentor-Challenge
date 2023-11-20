# Frontend Mentor - Intro component with sign up form solution

This is a solution I made to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). 



## Overview
After a whole lot of effort put in to actualize this project i'm glad i'm able to complete it.. The Project realy pushed me and over the course of making it i learnt a lot.


### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./images/gg.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript


### What I learned

One major area i improved in is the Javascript section. I've always had issued writting working javascript codes.. But after a long try i got it. I also learnt how to validate multiple input fields and html elements at a go. 

See code snippet below:


```js
 if (!email.match(validRegex)) {
      document.getElementById("email").style.borderColor = "#ff7a7a";
      document.getElementById("email").style.borderWidth = "2px";
      email1.style.display = 'block';
      email1.innerHTML = "Looks like this is not an email";
    } else {
      email1.style.display = 'none';
      document.getElementById("email").style.borderColor = "#b9b6d3";
      document.getElementById("email").style.borderWidth = "1px";
    }
```


### Useful resources

- [Example resource 1](https://stackoverflow.com/questions/58255301/how-to-implement-single-validate-method-for-multiple-input-fields) - This helped me to learn how to validate multiple input fields. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.javatpoint.com/javascript-form-validation) - This is an amazing article which helped me finally understand form validation using Javascript. I'd recommend it to anyone still learning this concept.

## Author
- Frontend Mentor - [@dtme-uche](https://www.frontendmentor.io/profile/dtme-uche)
- Twitter - [@dtme_uche](https://www.twitter.com/dtme_uche)