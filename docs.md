+ POST 
response: 
    201: success
    204:error

url: /user 
    data:	
        name (req) 
	    username (req) 
	    email (req) 
	    password (req) 
	    photo (req) 
	    bio (opt)
        isFrozen: (opt, default:false),
        createdAt: (opt, default:date now), 
        updatedAt: (opt, default:date now)

url: /post
    data: 
        user_id (req) 
        text (req)
        img: (opt, default: null),
        createdAt: (opt, default: date now), 
        updatedAt: (opt, default: date now)

url: /course
    data: 
        user_id (req) 
        text (req) 
        img: (opt, default: null)
        createdAt: (opt, default: date now) 
        updatedAt: (opt, default: date now)
        prev (req) 
        next (req)

url: /message
    data: 
        user_id (req)
        to: (req)
        message: (req)
        createdAt: (opt, default: date now)

url: /follow
    data: 
        user_id (req) 
        following (req)
        createdAt: (opt, default: date now)

url: /comment
    data: 
        user_id (req)
        post_id (req)
        text (req)
        createdAt: (opt, default: date now) 
        updatedAt: (opt, default: date now)

url: /like
    data: 
        user_id (req) 
        post_id (req)
        createdAt: (opt, default: date now) 

+ GET
response: 
    200: success
    204: not found
    400: error

url: /user
    data: 
        _id (req)

url: /post
    data:
        _id 
        user_id

url: /course
    data: 
        _id
        user_id

url: /message
    data: 
        _id 
        user_id 

url: /follow
    data: 
        _id
        user_id

url: /comment
    data: 
        _id
        post_id 

url: /like
    data: 
        _id 
        post_id

+ PATCH
response: 
    200: success
    204: not found
    400: error

url: /user/:id
    data: 
        name 
        username 
        password 
        photo 
        bio 
        isFrozen 
        updatedAt (req)

url: /post/:id
    data: 
        text 
        img
        updatedAt (req)

url: /course/:id
    data: 
        text 
        img 
        updatedAt (req)
        prev 
        next

url: /comment/:id
    data: 
        text 
        updatedAt: (req)

+ DEL
response : 
    200: success
    204: not found
    400: error

url: /user
    data: 
        _id (req)

url: /post
    data: 
        _id (req)

url: /course
    data: 
        _id (req)

url: /message
    data:
        _id (req)

url: /follow
    data:
        _id (req)

url: /comment
    data: 
        _id (req)

url: /like
    data: 
        _id (req)
