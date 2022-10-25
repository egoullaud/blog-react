# Introduction

Blog app made with React using Next.js, GraphQL with a headless cms. This project is an intorudction into Next.js and GraphQL. The app allows for the user to view blog post previews, and view each post. The blog posts are genterated with the use of a cms like Hygraph. 

View project on CodeSandbox at https://tjph2k-3000.preview.csb.app/

## Technologies used

* Next.js
* React & JSX
* CSS
* GraphQL 
* CMS 

## Getting Started
### Build your blog content with a CMS
First off, head over to a cms like Hygraph at https://hygraph.com/ to create a free account and start a blog project. This is where you build the blog post content that will act as an API that will populate blog posts on the site.
Things to do here:
* Create schema(models) like Asset(photos), Author, and Post. 
* Within each schema add fields like title, slug, content, date, photo 
* add references to Author so that you can connect authors to posts and posts to authors
When you've finished adding content to your blog posts, head to your Settings and under the Access bar select API access. You will need the "Content API" link for your code. 


### Set up your code workspace
You will need Next.js for this project. You can install it like so:

```bash
//install Next.js
npx create-next-app@latest project_name
# or
yarn create-next-app project_name
```
Then,

```bash
//direct to project folder, open project, run live server
cd project_name
code .  
npm run dev
```
Install the following packages and run live server:

```bash
npm install graphql graphql-request
npm run dev
```
 I recommend spending a few minutes to clean up the codebase. Clearing out unneccesary comments and filler code before you begin building. I also started with organizing my components by listing out which pages I would need and what data would be required for each page and building out from there.
 
## Reflection

I built this project over 5 days to introduce myself to Next.js, GraphQL, and using a CMS like Hygraph because I have a client who was interested in a blog website, and I wanted to be able to offer a site that they could maintain themselves once built. It is a super simplified blog site, that served to teach me the insand outs of Next.js, GraphQL, and how to use a CMS to create content. 

This project introduced a TON of new information, like a whole new framework and I had never used GraphQL, or a CMS to build a site. I researched different ways to build the site and ultimately decided to use a tutorial on Youtube by developedbyed to learn how to use Next.js, GraphQL, and using a CMS.

Some obstacles were the code would break unexpectedly, so I had to troubleshoot my issues with StackOverflow and other resources. I learned a lot of additional information about Next.js and GraphQL through these inquiries. I also found the blog site on the tutorial was not responsive, so I tweaked the CSS quite a bit to allow for mobile-first responsiveness. 










