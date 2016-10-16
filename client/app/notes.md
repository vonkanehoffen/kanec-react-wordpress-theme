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

ActionCreators
 - Async
   - getLatestPosts()
   - getSinglePost()
   
 
Reducer Actions
 - FETCH_POSTS_REQUEST
 - FETCH_POSTS_SUCCESS (data)
 - FETCH_POSTS_FAILURE