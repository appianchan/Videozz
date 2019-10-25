# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Video.destroy_all

User.create!(username: "hunter12", password: "abcdefg")
u = User.first
Video.create!(title: "First Video", description: "let's show this video", user_id: u.id, view_count: 3)

v = Video.first
v.video_attatchment.attach(io: File.open("/Users/anthonychan/Desktop/test_video.mov"), filename: "test_video.mov")
