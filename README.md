# Fiber Creations

## Introduction

Welcome to **Fiber Creations**, your go-to destination for all things fiber art! Whether you're an avid creator, enthusiast, or simply appreciate the beauty of fiber crafts, our platform is designed with you in mind. Powered by the PERN stack, Fiber Creations offers a seamless experience for users to showcase their masterpieces and explore a diverse array of fiber artistry.

With Fiber Creations, you can effortlessly share your latest projects, from intricate crochet designs to stunning tapestries and everything in between. Our intuitive interface empowers users to upload photos, provide descriptions, and engage with a vibrant community of fellow fiber artists.

But Fiber Creations is more than just a gallery. It's also a marketplace where you can browse and discover unique pieces available for purchase. Add your favorite finds to your cart.

Whether you're here to showcase your talents, find inspiration for your next project, or add a touch of fiber artistry to your space, Fiber Creations invites you to explore, create, and connect with fellow lovers of fiber arts. Join our community today and let your creativity unravel!

## Initial Setup

### Setting up the front end:

1. **Fork the Repo**: Create a copy of this project's repository in your GitHub account.
1. **Clone the Fork**: Download your forked repository to your computer.
1. **Navigate to Directory**: Use command line to `cd` into the project folder.
1. **Install Dependencies**: Run `npm install` to set up project dependencies.
1. **Start Development Server**: Use `npm run dev` to launch the development environment.

### Setting up the back end:

1. **Fork the Repo**: Create a copy of the [Fiber Creations Backend](https://github.com/BSoto85/fiber-creations-backend) in your GitHub account.
1. **Clone the Fork**: Download your forked repository to your computer.
1. **Navigate to Directory**: Use command line to `cd` into the project folder.
1. **Install Dependencies**: Run `npm install` to set up project dependencies.
1. **Initiate and Seed the Data**: Use `npm run db:init` and then `npm run db:seed` to initiate and seed the data.
1. **Start Development Server**: Use `npm run dev` to launch the server.

## Persona

Sarah Thompson is a 32 year old passionate crochet enthusiast who has been honing her craft for the past five years. She learned to crochet from her grandmother and has since developed her skills through online tutorials and experimenting with various patterns. Crocheting has become her go-to hobby, providing her with a creative outlet and a way to unwind after a busy day at work.

Sarah is always on the lookout for new crochet patterns and designs to try. She enjoys browsing through different projects to spark her creativity and keep her motivated, as well as posting pictures of her projects to inspire others.

While Sarah loves making her own crochet items, she occasionally likes to purchase unique pieces from other artisans. She prefers a seamless shopping experience where she can easily browse through items and make purchases without hassle.

## User Stories and Features

- As a lover of yarn arts, I want a place where I can look at beautiful creations and find inspiration.
- As a lover of fiber arts, I’d like the option of buying one of the creations.
- As a user, I want to add my creations for everyone to see.
- As a user, I want the ability to update information about creations I’ve added.
- As a user, I’d like to delete creations I’ve added if needed.

## Functionality

- The `Landing Page` greets you with a kitten playing with a ball of yarn and a brief description of what Fiber Creations is about.
- The navigation bar is present at the top of every view, with links to add art, learn about the developer, login to a user account, or visit the user cart.
- Clicking the kitty gif or the `Fiber Creations` logo in the nav bar leads to the index view, where a user can see all of the fiber art posts.
- To add art, a user must be logged in. Clicking the `Add Art` link will take the user to a form where details can be filled out about the creation, including uploading an image.
- Clicking the `Details` button on any creation will show more details for that creation and have the option of adding the item to the user's cart if it is for sale.
- The Details view also has `Edit` and `Delete` buttons, which are only available to the user if they created that post. If the item is for sale and the user is logged in, an `Add to Cart` button is also displayed.
- Clicking on the `Edit` button will take the user to a prefilled form with the information for that item. A user can update any of the details for their item, including the image. Submitting the form will take the user back to the detailed view.
- To view the cart, a user can click on the cart logo in the nav bar. This will take the user to their cart, where cart items are displayed and the total price of items in the cart is calculated. Here, the user has the option of removing any unwanted items by clicking the `Remove` button.
- To learn more about the developer of **Fiber Creations**, users can click on the `About Dev` link in the nav bar.

## Wireframes

[Fiber Creations Wireframes](https://www.figma.com/file/RICV5C7LKpZSTLWaI3p4ZS/Fiber-Creations?type=design&node-id=0%3A1&mode=design&t=ILQriEKbZp5XVEZk-1)

## ERD

[Fiber Creations ERD](https://dbdiagram.io/d/Fiber-Creations-6610700403593b6b61505624)

## Extras

- A designed 404 page, which was the inspiration for the colors scheme in the app.
- Programmatic upload and storing of images using Cloudinary.
- Cart functionality was added to add and remove items from a user's cart.
- An _About the Developer_ view was added.
- Cloudinary was used to store images, videos, and music for our app.
- A search bar was added to the index page where you can search by creation type or material. The search bar is not case sensitive.

## Link

[Fiber Creations](https://fibercreations.netlify.app/)
