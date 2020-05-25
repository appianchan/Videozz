# Videozz

Videozz is a video presentation application similar to the application youtube! Users can login and logout from the page to leave likes and comments whenever they want to. Each video has a title and a description that will explain what each video is about. Go watch some videos on https://videozz.herokuapp.com/#/!

Videozz is built with React/Redux on the frontend and Ruby on Rails in the backend. All videos are stored on AWS and are retrieved when the user requests it. 

<img src="./screenshots/Screen Shot 2020-05-25 at 11.17.30 AM.png">

# FEATURES

**Login/Signup**

- Passwords are secured using BCrypt to generate a passord_digest. A user session_token is stored in the database to keep track of each user session. When a user successfully logs in, a session token is generated, stored in the database, and stored on the client-side as a browser cookie.

- There is also a demologin for the user to automatically login with a premade account

<img src="./screenshots/Screen Shot 2020-05-25 at 11.20.04 AM.png">

**SearchBar**

- Using the searchbar will allow the bar to search through all titles from all videos and present the relevent videos to the user. All other videos will be given on the bottom of the relevent videos

<img src="./screenshots/Screen Shot 2020-05-25 at 11.21.04 AM.png">





