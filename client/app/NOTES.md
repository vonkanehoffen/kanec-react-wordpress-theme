# WP React Theme notes

## Links
https://lamosty.com/2015/09/07/react-single-page-wordpress-rest-api-theme-tutorial/ (not finished)

https://wptavern.com/ustwo-an-open-source-example-of-a-react-powered-wordpress-site
    
 - https://ustwo.com/ (nice!)
 - https://github.com/ustwo/ustwo.com-frontend (source code for the above)
 
## Ideas

Use slug prop for getting / routing links. Namespace blog posts /blog/{slug} not date.
You can API call:

http://kanec.co.uk/wp-json/wp/v2/posts?slug=game-thrones-vfx-reel

# Scenarios:

Entry on homepage: Init store with posts/
Entry on sub page: Init store with posts?slug=:slug
Navigation to home from sub: Check if latest posts in store. If not, load.
Navigation to sub from home: Display sub (it'll be there)

so

HomeContainer:
    Is store empty?
        Y: Get latest posts and populate
        N: Is GotLatest set? 
            Y: Do nothing
            N: Get latest and populate
    Load more posts button:
        Get next page
SinglePostContainer:
    Is post in store?
        Y: Do nothing
        N: Get it and replace store (it's obviously a new visitor)



Component plan:

```
Main Layout
	Navigation
		(Home link)
		SearchForm
	Footer
		(social links & contact)
	/
		HomeContainer
			HomeSplash
			PostsList
			LoadMorePosts button
	/blog/:slug
		SinglePostContainer
			FeaturedImage
			SinglePost
			PostsList (related posts, by tag?)
	/search/:s
		SearchResultsContainer
			PostsList
```
Store:
```
currentPost: <slug> (or false for home),
postStatus: {
    'what-ever': REQUESTING,
    'another-one': LOADED
},
posts: [
    {
        slug: what-ever
        title: { rendered: "What Ever" }
        content: { rendered: "sdfsfsdfsdf" }
    },
    {
        slug: another-one
        title: { rendered: "Another One" }
        content: { rendered: "sdfsfsdfsdf" }
    },
]
```
...or combine status with main posts[] like:
```
currentPost: <slug> (or false for home),
posts: [
    {
        status: REQUESTING || LOADED || ERROR
        slug: what-ever, (map all these from WP API response)
        title: What Ever,
        content: content
    }, ...
```

ActionCreators
 - Async
   - getLatestPosts()
   - getSinglePost()
   
 
Reducer Actions
 - FETCH_POSTS_REQUEST
 - FETCH_POSTS_SUCCESS (data)
 - FETCH_POSTS_FAILURE