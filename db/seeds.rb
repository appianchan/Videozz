# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Video.destroy_all

User.create!(username: "ilovevideos", password: "abcdefg")
x = User.first
User.create!(username: "hunter12", password: "abcdefg")
u = User.last
User.create!(username: "hunter3", password: "abcdefg")
z = User.last
User.create!(username: "hunter4", password: "abcdefg")
y = User.last
User.create!(username: "hunter5", password: "abcdefg")
t = User.last
User.create!(username: "hunter6", password: "abcdefg")
v = User.last
User.create!(username: "hunter7", password: "abcdefg")
p = User.last
User.create!(username: "hunter8", password: "abcdefg")
o = User.last


Video.create!(title: "First Video", description: "let's show this video", user_id: u.id, view_count: 3, creator: "Baby-Yoda", date_created: "Mar 2, 2019")

v = Video.first
file = open('https://videozz-test-bucket.s3-us-west-1.amazonaws.com/test_video.mov')
v.video_attatchment.attach(io: file, filename: "test_video.mov")

Video.create!(title: "Second Video", description: "This is the awesomest video ever", user_id: z.id, view_count: 5, creator: "Nyan-cat", date_created: "Nov 15, 2018")
c = Video.last
file = open('https://videozz-test-bucket.s3-us-west-1.amazonaws.com/vid_2.mov')
c.video_attatchment.attach(io: file, filename: "test_video_2.mov")

Video.create!(title: "Third Video", description: "This video is better than the last", user_id: y.id, view_count: 10, creator: "Harambe", date_created: "May 29, 2017")
d = Video.last
file = open('https://videozz-test-bucket.s3-us-west-1.amazonaws.com/vid_3.mov')
d.video_attatchment.attach(io: file, filename: "test_video_3.mov")

Video.create!(title: "Star", description: "This star was handmade with origami paper", user_id: x.id, view_count: 100, creator: "Baby-Yoda", date_created: "Jan 1, 2016")
a = Video.last
file = open('https://videozz-test-bucket.s3-us-west-1.amazonaws.com/star.mov')
a.video_attatchment.attach(io: file, filename: "test_video_4.mov")

Video.create!(title: "Stick Moving", description: "I made this stick move across the screen", user_id: t.id, view_count: 598, creator: "Dramatic-Squirrel", date_created: "Dec 11, 2017")
b = Video.last
file = open('https://videozz-test-bucket.s3-us-west-1.amazonaws.com/stick_motion.mov')
b.video_attatchment.attach(io: file, filename: "test_video_5.mov")

Video.create!(title: "Head Bobbing", description: "Listening to music is the best", user_id: v.id, view_count: 769, creator: "Pikachu the second", date_created: "Mar 30, 2015")
e = Video.last
file = open('https://videozz-test-bucket.s3-us-west-1.amazonaws.com/Head_bobbing.mov')
e.video_attatchment.attach(io: file, filename: "test_video_6.mov")

Video.create!(title: "Thumbs up", description: "This is how a thumbs up should look like", user_id: p.id, view_count: 67, creator: "Jeanne the great", date_created: "Aug 21, 2000")
f = Video.last
file = open('https://videozz-test-bucket.s3-us-west-1.amazonaws.com/thumbs_up.mov')
f.video_attatchment.attach(io: file, filename: "test_video_7.mov")

Video.create!(title: "Sticky Note flipping", description: "If I had pictues on the sticky notes I could've made this a cool video", user_id: o.id, view_count: 879, creator: "Dark Plageus the Wise", date_created: "Jul 1, 2013")
g = Video.last
file = open('https://videozz-test-bucket.s3-us-west-1.amazonaws.com/Sticky-note.mov')
g.video_attatchment.attach(io: file, filename: "test_video_8.mov")