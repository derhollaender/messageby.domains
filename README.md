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
- vercel
- typescript
- html
- css

## Why?
I've built some little projects with Netlify, but never had the time to have a look at Vercel. I came across an article that mentioned Vercel supports wildcard certificates, and I thought, "What can we do with a wildcard domain?" The idea was born. It was purely an entertaining project to get familiar with Vercel.

## License
This project is licensed under the MIT License.
