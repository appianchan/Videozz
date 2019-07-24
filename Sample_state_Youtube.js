{
    entities: {
        videos: {
            1: {
                id: 1,
                    Title: "Why Cat's are the best",
                    Description: "Cat's are cute and cuddly"
                    authorId: 2,
      },
            2: {
                id: 2,
                    Title: "Why Dog's are the best",
                        Description: "Dog's are loyal companions",
                        authorId: 6,
      },
            3: {
                id: 3,
                    Title: "Jokes on you, fishes are the best",
                        Description: "GLUB GLUB",
                        authorId: 20,
      }
        },
        users: {
            2: {
                id: 2,
                    username: "hellowkitty9000",
                    CreatedVideoIds: [10, 30],    

      },
            3: {
                id: 3,
                    username: "thehulk2000",
                    CreatedVideoIds: [29],
                    imgUrl: "https://i.kym-cdn.com/entries/icons/original/000/000/166/keyboar.jpg"
            }
        },
        VideoLikes: {
            100: {
                likerId: 15,
                    videoId: 1,
      },
            200: {
                likerId: 10,
                    videoId: 5,
      },
            300: {
                likerId: 20,
                    videoId: 3,
      },
        }
        VideoComments: {
            100: {
                CommentorId: 15,
                    videoId: 1,
      },
            200: {
                CommentorId: 10,
                    videoId: 5,
      },
            300: {
                CommentorId: 20,
                    videoId: 3,
      },
        }
        VideoRepliesToComments: {
            100: {
                ReplyerId: 15,
                CommentId: 5,
                videoId: 1,
      },
            200: {
                ReplyerId: 13,
                CommentId: 10,
                    videoId: 5,
      },
            300: {
                ReplyerId: 30,
                CommentId: 30,
                    videoId: 3,
      },
        }

    },
    ui: { //confused on what to put here
        loading: true / false,
        loadingVideoError: true/false,
    },
    errors: {
        login: ["Incorrect username/password combination"],
            CreatingVideoForm: ["Video title cannot be blank"],
            CreatingCommentForm: ["Your comment cannot be blank"],
            CreatingReplyForm: ["Your reply cannot be blank"]
  },
    session: { currentUserId: 29 }
}