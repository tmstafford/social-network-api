# Social Network API

## Description
Social Network API is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Data is the foundation of social network applications, so this one uses a NoSQL database, MongoDB, due to its speed with large amounts of data and flexibility with unstructured data. This application was built with the Mongoose ODM, Express.js for routing, and uses Moment.js for date formatting. 

When the server is started, the Mongoose models are synced to the MongoDB database and users can test all API routes through Insomnia Core. 

**Watch the [full video walkthrough](https://drive.google.com/file/d/1gQ5wKiwv0dElEVDOgk0EH4jILoh0pR7W/view) of the social network API.**

Create, Read, Update, Delete actions for 'Users': <br>
![CRUDusers](https://user-images.githubusercontent.com/70179648/107980054-3e361f80-6f85-11eb-88de-82e4648aabbd.gif) <br>
<br>
Create, Read, Update, Delete actions for 'Thoughts': <br>
![CRUDthoughts](https://user-images.githubusercontent.com/70179648/107980231-82292480-6f85-11eb-8acb-16d3e8fdeb5f.gif) <br>
<br>
Create and Delete a Reaction to a Thought: <br>
![reactions](https://user-images.githubusercontent.com/70179648/107980288-9836e500-6f85-11eb-9943-bf44e51a6619.gif) <br>
<br>
Delete a Thought, and Add and remove Friends from a Users friends list: <br>
![deletethoughtfriends](https://user-images.githubusercontent.com/70179648/107980346-b4d31d00-6f85-11eb-9f5a-050cfb988d75.gif) <br>

## Installation
Clone this repository to your machine. Navigate to the root folder of the application. From the command line, run
    
    $ npm install
To install all dependencies needed for this application. Run `$ mongod` to ensure the MongoDB server is prepared on your local machine. 

## Usage
From the root of the project folder, from the command line run:
    
    $ node server.js
You should see `Connected on localhost:3001` logged in the terminal, meaning the server is connected and running. Navigate to Insomnia Core to test all API routes. <br> 
<br>
![start](https://user-images.githubusercontent.com/70179648/107981106-18aa1580-6f87-11eb-8e17-01e5ac8c08f1.gif) <br>

**Watch the [full video walkthrough](https://drive.google.com/file/d/1gQ5wKiwv0dElEVDOgk0EH4jILoh0pR7W/view) to see all API routes being tested.** 

## Contributing
- Made by Tatum Stafford for the UTAustin Coding BootCamp 2021. <br>
- [GitHub Profile](https://github.com/tmstafford)
