# Bus-Mall

## Problem Domain
You've been hired by a startup called BusMall, whose product is similar to the SkyMall catalog found in the seatback pockets on airplanes: a catalog of assorted high-markup products provided to a captive audience seeking a mental escape from the drudgery of travel. The difference with BusMall is that instead of their catalog being placed in airplanes, they are placed on local busses while commuting through traffic.

Since catalogs are expensive to print and distribute, and the products cost money to make and warehouse, and BusMall is a lean startup that needs to carefully watch its expenditures, BusMall wants to feature only the items in its catalog that are the most likely to sell.

This means that BusMall wants to do market analysis on proposed products to test their potential customer interest... before actually putting them into the catalog and getting the manufacturing wheels in motion.

To make this market analysis maximally effective, BusMall wants you to build an app that displays potential products to individuals in focus groups (three products at a time, side-by-side-by-side) so you'll need to manage the size and the aspect ratio of the images.

The app's purpose is to have the group members choose which product, of the three displayed images, that they would be most likely to purchase, and then store, calculate, and visually display the resulting data.

To keep the product selection process as untainted as possible, you have been instructed to not allow any results to be shown to users until there have been a total of 25 selections made.

The marketing team is not only interested in the total number of clicks, but also the percentage of times that an item was clicked when it was shown. So, you'll also need to keep track of how many times each image is displayed and do the calculations.

You are also responsible for the look and feel of the app, so don't forget a custom font, color palette, layout with semantic HTML, and so on.

## Lab11 
### Instructions
As a user, I would like to display three unique products by chance so that the viewers can pick a favorite.

Create a constructor function that creates an object associated with each product, and has the following properties:

Name of the product
File path of image
Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.

Attach an event listener to the section of the HTML page where the images are going to be displayed.

Once the users 'clicks' a product, generate three new products for the user to pick from.

As a user, I would like to track the selections made by viewers so that I can determine which products to keep for the catalog.

In the constructor function define a property to hold the number of times a product has been clicked.

After every selection by the viewer, update the newly added property to reflect if it was clicked.

As a user, I would like to control the number of rounds a user is presented with so that I can control the voting session duration.

By default, the user should be presented with 25 rounds of voting before ending the session.
Keep the number of rounds in a variable to allow the number to be easily changed for debugging and testing purposes.
As a user, I would like to view a report of results after all rounds of voting have concluded so that I can evaluate which products were the most popular.

Create a property attached to the constructor function itself that keeps track of all the products that are currently being considered.

After voting rounds have been completed, remove the event listeners on the product.

Display the list of all the products followed by the votes received and number of times seen for each. Example: Banana Slicer had 3 votes and was shown 5 times

>Created the repo in Github and the standard files needed for this project.

>I created a constructor with the name and path parameters. I created a new object for each image.   

# Challanges
- So far, it has been challenging to not make the images repeat themselves. 


# Author 
- Chuck Li Villalobos

# License
- This project is licensed under the MIT License. 