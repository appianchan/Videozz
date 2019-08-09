# README

Videozz is a video presentation application similar to the application youtube. 

# FEATURES

- allows for login/signin


# PROJECT DESIGN

- Passwords are secured using BCrypt to generate a passord_digest. A user session_token is stored in the database to keep track of each user session. When a user successfully logs in, a session token is generated, stored in the database, and stored on the client-side as a browser cookie.

#FUTURE DIRECTIONS OF THE PROJECT
1. Video index page
- will show a feed of videos in the front page and when logged in
2. Video show page
- Will be able to show individual videos with comments, view count, and other videos I can access on the side
3. Profile page
- be able to see personal information and edit them as needed. 
