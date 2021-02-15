# Password Generator
Using javascript to create a password generator

---
## Author

Shawn Fox


| [GitHub](https://github.com/SFoxGit) | [Email](sfoxss4@gmail.com) |

---
## Project Links:

- Deployed site: [GitHub Pages]()
- GitHub: [SFoxGit]()

---
## Table of Contents

- [Description](##Description)

- [Requirements](##Requirements)

- [Progress](##Progress)

- [Contributions](##Contributing)

- [Credits](##Credits)

---
## Description

Password generator using javascript that can create different levels of security based on user preference. 

---
## Requirements

    GIVEN I need a new, secure password
    WHEN I click the button to generate a password
    THEN I am presented with a series of prompts for password criteria
    WHEN prompted for password criteria
    THEN I select which criteria to include in the password
    WHEN prompted for the length of the password
    THEN I choose a length of at least 8 characters and no more than 128 characters
    WHEN prompted for character types to include in the password
    THEN I choose lowercase, uppercase, numeric, and/or special characters
    WHEN I answer each prompt
    THEN my input should be validated and at least one character type should be selected
    WHEN all prompts are answered
    THEN a password is generated that matches the selected criteria
    WHEN the password is generated
    THEN the password is either displayed in an alert or written to the page


---
### Must include:

    Application user experience is intuitive and easy to navigate.
    Application user interface style is clean and polished.
    Application resembles the mock-up functionality provided in the homework instructions.
    
![Mock-up](assets/images/mockup.png)

---
## Progress

Stage One: 

    Understanding the instructions. 
    I've read over them many times now, there are some very specific requirements that target what we learned this week. First step variables, I think we'll mostly use strings and then split to arrays and booleans for prompts. Use .length and math.random, they probably want us to use toUpperCase instead of creating two strings of uper and lower to display we know how. I don't believe we need to make changes to the html or css to make it properly function but time will tell. I may have over looked validation, good thing I just read it again, should be if false false false reprompt I think.

Stage Two:

    Creating variables and prompts. 
    I'm not sure if I actually need the booleans for the prompts, I think I got over zealous with the vars. I'll change them multiple times fret not.
    I'm now opting to make a new array of Y and N instead of doing booleans after looking back at how I did this in the class activity of rock paper scissors. however, I'm pretty sure booleans could have worked just fine.
    After writing the prompts, I wanted to test them.

![First Test](assets/images/test1.jpg)

    Which on the js line 72 is the generatePassword function which doesn't exist yet. Will try commenting it out.
    Commenting out removed the error, but I didn't have an eventListener to start the functions haha. Easy fix and the prompts work!


    

---
## Contributing


---
## Credits


