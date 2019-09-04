# APImess

### Idea

> App to contact Multiple-api and build something out of it!

1. News API (https://newsapi.org/)


2. Wikipedia API
3. Image Search API (https://developers.google.com/custom-search/v1/overview)
4. Weather API (openweathermap.org)
5. Youtube API
6. Google Maps API (https://developer.here.com)
7. Nasa API
8. Geolocation API
9. Pokemon API
10. Github API
11. Air Poluttion API

More!!..
- https://api.data.gov/docs/ed/

### Challenge 
1. Hiding My api keys for all of them 
    > using dotenv npm package and using a proxy server(requesting API server from a Server) 

2. Can u use charts to show visually appealing thinks 
    > chart.js
3. showing maps using:
    > leaflets.js and openstreetmaps


### Learn 
REST - Representational state transfer

## Working & Steps Followed

#### News API

- About https://newsapi.org/  =>  returns JSON metadata 
    - 1. keyword Search : Search All articles about Bitcoin from the last month, sorted by recent first(GET : https://newsapi.org/v2/everything?q=bitcoin&from=2019-08-04&sortBy=publishedAt&apiKey=API_KEY )

    - You can search for articles with any combination of the following criteria:

    Keyword or phrase. Eg: find all articles containing the word 'Microsoft'.
    Date published. Eg: find all articles published yesterday.
    Source name. Eg: find all articles by 'TechCrunch'.
    Source domain name. Eg: find all articles published on nytimes.com.
    Language. Eg: find all articles written in English.
    You can sort the results in the following orders:

    Date published
    Relevancy to search keyword
    Popularity of source
    
    - News API has 2 main endpoints:
        - /v2/top-headlines
        - /v2/everything





### Deployment 
- will see..