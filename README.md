# Videozz

Videozz is a video presentation application similar to the application youtube! Users can login and logout from the page to leave likes and comments whenever they want to. Each video has a title and a description that will explain what each video is about. Go watch some videos on https://videozz.herokuapp.com/#/!

Videozz is built with React/Redux on the frontend and Ruby on Rails in the backend.

# FEATURES

**Login/Signup**

- Passwords are secured using BCrypt to generate a passord_digest. A user session_token is stored in the database to keep track of each user session. When a user successfully logs in, a session token is generated, stored in the database, and stored on the client-side as a browser cookie.

<img src="./screenshots/Screen Shot 2019-10-01 at 1.31.54 PM.png">

