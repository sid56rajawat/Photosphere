# This file will help you understand the project better

## 1. File structure

[refer](https://www.youtube.com/watch?v=UUga4-z7b6s&t=274s&ab_channel=WebDevSimplified)

1. public - contains static files such as index. html, javascript library files, images, and other assets, etc. which you don't want to be processed by webpack. Files in this folder are copied and pasted as they are directly into the build folder.

2. src - contains all js, CSS, images, components & other assets
   1. assets - images, svg, global css (not js)
   2. components - react components
      1. form - form components
      2. ui - ui components
   3. context - methods to pass props from parent to child component(s)
   4. data - json data or constants
   5. hooks - react hooks
   6. pages - has folder for each page(might have shared or unique components) in our application
      1. register
      2. login
   7. utils - utility / helper functions eg: date formatting

Note: each folder might have `__test__` folder depending on whether it needs tesing

test - by shivam
