# Data Structures and Algorithms

## Create a copy of this repository

1. Create a new repository in your GitHub account called `data-structures-and-algorithms`
1. Clone the empty repository to your machine
1. Choose the "Download" option under "Clone or Download" for this repository
1. Copy that .zip file inside of the local `data-structures-and-algorithms` repo created in step 2
1. Unzip the file there
1. Remove the .zip file
1. Run the command `npm install` from the repository root directory
1. Do an `ACP` of the `data-structures-and-algorithms` repository

## Repository Quick Tour and Usage

### 301 Code Challenges

Under the `data-structures-and-algorithms` repository, at the top level is a folder called `code-challenges`

Each day, you'll add one new file to this folder to do your work for the day's assigned code challenge

### 401 Data Structures, Code Challenges

- Each Data Structure should be implemented separately in a language specific manner, in a properly named folder.
  - i.e. `linked-lists`
- For daily challenges:
  - Each implementation should have a challenges folder, named `challenges`
  - Within the challenges folder, a subfolder bearing the name of the challenge
    - i.e. `remove-duplicates`
  - Within the proper subfolder:
    - A README.md that will house your challenge summary, whiteboard photos
    - Your implementation and tests for the code challenge
    - Perform your work in accordance with your 401 language's instructions

The final structure should resemble this:

```bash
  data-structures-and-algorithms
  |
  ├── code-challenges
  │  └── challenge-01.test.js
  │  └── challenge-02.test.js
  │  └── ...
  |├── challenges
  │  └── challengeName
  │       └── challengename.js
  │  └── challengeName
  │       └── challengename.js
  │  └── ...
  ├── [language]
  │   └── [data-structure-name]
  │       └── challenges
  │   └── [data-structure-name]
  │       └── challenges
  │   └── [data-structure-name]
  │       └── challenges
  │   └── ...
  |
  ├── node_modules
  |
  ├── .github
  │   └── workflows
  │       └── javascript-tests.yml
  │
  ├── .eslintrc.json
  ├── .gitignore
  ├── package-lock.json
  ├── package.json
  └── README.md
```
### Table of content of 301 challenges:

challenge name | it's name and link
------------ | -------------
Code Challenge: 01 | [forEach](https://github.com/Aya-Akrabawi/data-structures-and-algorithms/tree/master/code-challenges/for-each)
Code Challenge: 02 | [Pass by value, pass by reference](https://github.com/Aya-Akrabawi/data-structures-and-algorithms/tree/master/code-challenges/value-vs-reference)
Code Challenge: 03 | [Sort](https://github.com/Aya-Akrabawi/data-structures-and-algorithms/tree/master/code-challenges/Sort)
Code Challenge: 04 | [Regular expressions, part 1](https://github.com/Aya-Akrabawi/data-structures-and-algorithms/tree/master/code-challenges/Regular%20expressions%2C%20part%201)
Code Challenge: 05 | [Split, join, slice, splice](https://github.com/Aya-Akrabawi/data-structures-and-algorithms/tree/master/code-challenges/Array-StringMethods)
Code Challenge: 06 | [Object.keys, Object.values, Object.entries](https://github.com/Aya-Akrabawi/data-structures-and-algorithms/tree/master/code-challenges/ObjectKeysValuesEntries)
Code Challenge: 07 | [Map](https://github.com/Aya-Akrabawi/data-structures-and-algorithms/tree/master/code-challenges/Map)
Code Challenge: 08 | [Filter](https://github.com/Aya-Akrabawi/data-structures-and-algorithms/tree/master/code-challenges/Filter)
Code Challenge: 09 | [Reduce](https://github.com/Aya-Akrabawi/data-structures-and-algorithms/tree/master/code-challenges/Reduce)
Code Challenge: 10 | [Chaining methods](https://github.com/Aya-Akrabawi/data-structures-and-algorithms/tree/master/code-challenges/Chaining)
Code Challenge: 12 | [Two-dimensional arrays](https://github.com/Aya-Akrabawi/data-structures-and-algorithms/tree/master/code-challenges/Two-dimArray)
Code Challenge: 13 | [Includes, every, substring, charAt](https://github.com/Aya-Akrabawi/data-structures-and-algorithms/tree/master/code-challenges/IncludesEverySubstringCharAtt)
Code Challenge: 14 | [Combination of all methods](https://github.com/Aya-Akrabawi/data-structures-and-algorithms/tree/master/code-challenges/all-methods)


### Table of content of 401 challenges:

challenge class number |  link
------------ | -------------
Code Challenge: Class 01 | [forEach](https://github.com/Aya-Akrabawi/data-structures-and-algorithms/tree/master/code-challenges/for-each)

 Class 01 | [Reversing Arrays]()

 Class 02 | [Shifting Array]()

 Class 03 | [Binary Search]()

 Class 04 | [Linked List]()

 Class 05 | [Linked List Zipped]()

 Class 06 | [Stacks and Queues]()

 Class 07 | [Queue with Stacks]()

 Class 08 | [Fifo Animal Shelter]()

 Class 09 | [Brackets Balancing Algorithm]()

 Class 10 | [Tree DS Methods]()