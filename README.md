# iPhone shop :iphone:

## Overview
This app was created for the Chingu Voyage 24 solo-project. It allows to put items in shopping cart and accepts payments.
It based on React and netlify-lambda.

[Live Demo](https://elated-brown-df466b.netlify.app/)

##Features
* Renders list of products 
* Click on a product will put it inside a shopping cart(CheckoutForm component)
* CheckoutForm component will calculate the total sum of products inside a cart
* StripeProvider and Stripe Elements components are used to handle transactions 

## Running this project locally 
1. Clone this project locally 
2. Run ``` yarn install ``` in your bash / command line
3. Run ``` yarn start ```  in your bash / command line
4. Run ``` yarn start:lambda ``` in your bash / command line
This will open a local server running at http://localhost:9000 serving your Lambda functions.

## Dev Dependencies 
* dotenv
* netlify-lambda
* stripe




