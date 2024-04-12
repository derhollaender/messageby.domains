# messageby.domains

## Description
messageby.domains is an annoying and ridiculous messaging service. It devlivers a message word by word in the url as part of the domain

The message: "Hello, how are you doing today?" translates to

| URLs                            |
|---------------------------------|
| https://hello.messageby.domains |
|        ⇩  [redirect]            |
| https://how.messageby.domains   |
|        ⇩  [redirect]            |
| https://are.messageby.domains   |
|        ⇩  [redirect]            |
| https://you.messageby.domains   |
|        ⇩  [redirect]            |
| https://doing.messageby.domains |
|        ⇩  [redirect]            |
| https://today.messageby.domains |


## Built With
- Vercel
- Typescript
- Html
- Css

## Why?
I have created several small projects using Netlify, but I haven't had the opportunity to explore Vercel yet. Recently, I came across an article mentioning that Vercel supports wildcard certificates. Although the [static.fun demo](https://vercel.com/blog/wildcard-domains) provided by Vercel for this purpose is no longer functional, it sparked my curiosity about the possibilities of using wildcard domains on Vercel. This project serves as a working demonstration of wildcard domains on Vercel and was primarily created for entertainment purposes while getting acquainted with the platform.

## License
This project is licensed under the MIT License.