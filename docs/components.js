module.exports = {
    components:{
        schemas:{
            Post:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description:'post identification number',
                        example:'6201064b0028de7866e2b2c4'
                    },
                    title:{
                        type:'string',
                        description:'post title',
                        example:'Extreme Adventure: Challenges in the Wild'
                    },
                    body:{
                        type:'string',
                        description:'post body',
                        example:'Experience the thrill of rock climbing, whitewater rafting, and backcountry skiing. Conquer nature’s toughest terrains and push your limits.'
                    },
                    image_path:{
                        type:'string',
                        description:'image URL',
                        example:'1715867848232-background.jpg'
                    },
                    UserId:{
                        type:'objectId',
                        description:'user identification number',
                        example:'664367465446a8d1920969de'
                    },
                    status:{
                        type:'string',
                        description:'status of post',
                        example:'published'
                    },
                    TagIds: [{
                        type:'objectId',
                        description:'tags identification number',
                        example:'664367465446a8d1920969de'
                    }],
                    LikeIds: [{
                        type:'objectId',
                        description:'likes identification number',
                        example:'664367465446a8d1920969de'
                    }],
                    CommentIds: [{
                        type:'objectId',
                        description:'comments identification number',
                        example:'664367465446a8d1920969de'
                    }],
                }
            },
            PostInput:{
                type:'object',
                properties:{
                    title:{
                        type:'string',
                        description:'Post title',
                        example:'Extreme Adventure: Challenges in the Wild'
                    },
                    body:{
                        type:'string',
                        description:'post body',
                        example:'Experience the thrill of rock climbing, whitewater rafting, and backcountry skiing. Conquer nature’s toughest terrains and push your limits.'
                    },
                    image_path:{
                        type:'string',
                        description:'image URL',
                        example:'1715867848232-background.jpg'
                    },
                    UserId:{
                        type:'objectId',
                        description:'user identification number',
                        example:'664367465446a8d1920969de'
                    }
                }
            },
            _id:{
                type:'objectId',
                description:"An id of a task",
                example: "6201064b0028de7866e2b2c4"
            },
            Comment:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description:'Comment identification number',
                        example:'6201064b0028de7866e2b2c4'
                    },
                    body:{
                        type:'string',
                        description:'Comment body',
                        example:'I love it'
                    },
                    PostId:{
                        type:'objectId',
                        description:'Post identification number',
                        example:'664367465446a8d1920969de'
                    },
                    UserId:{
                        type:'objectId',
                        description:'user identification number',
                        example:'664367465446a8d1920969de'
                    },
                    LikeIds: [{
                        type:'objectId',
                        description:'likes identification number',
                        example:'664367465446a8d1920969de'
                    }],
                }
            },
            CommentInput:{
                type:'object',
                properties:{
                    body:{
                        type:'string',
                        description:'Comment body',
                        example:'I love it'
                    },
                    PostId:{
                        type:'objectId',
                        description:'Post identification number',
                        example:'664367465446a8d1920969de'
                    },
                    UserId:{
                        type:'objectId',
                        description:'user identification number',
                        example:'664367465446a8d1920969de'
                    },
                }
            },
        }
    }
}

