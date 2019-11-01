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

User.create!(username: "hunter12", password: "abcdefg")
u = User.first
Video.create!(title: "First Video", description: "let's show this video", user_id: u.id, view_count: 3)

v = Video.first
file = open('https://videozz-test-bucket.s3-us-west-1.amazonaws.com/test_video.mov')
v.video_attatchment.attach(io: file, filename: "test_video.mov")

Video.create!(title: "Second Video", description: "This is the awesomest video ever", user_id: u.id, view_count: 5)
c = Video.last
file = open('https://videozz-test-bucket.s3-us-west-1.amazonaws.com/vid_2.mov')
c.video_attatchment.attach(io: file, filename: "test_video_2.mov")

Video.create!(title: "Third Video", description: "This video is better than the last", user_id: u.id, view_count: 10)
d = Video.last
file = open('https://videozz-test-bucket.s3-us-west-1.amazonaws.com/vid_3.mov')
d.video_attatchment.attach(io: file, filename: "test_video_3.mov")

