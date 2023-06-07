# roomiez_frontend

## What it does

Roomiez is an all-in-one task management platform with user-authentication and login functionality that allows users to join groups of other users and manage the collective’s outgoing tasks. A cumulative dashboard lists these tasks by person and deadline on the home page, and users can click on the task to view more details as well as notify the assignee to complete their task.

## How we Built It

Roomiez is a full-stack web application. In order to develop a dynamic and responsive service, we leveraged modern frameworks in both the back-end and front-end.

In terms of back-end development, we used the Spring MVC framework in Java. By doing so, we were able to handle multi-threaded network communication and Java Servlet implementation with a level of abstraction. We used an end-tier design approach with controller, service, and repository layers to interface with the respective API, business logic, and database layers of our program. We also used Maven to manage the libraries we used in the program.

For our front-end, we used React. This allowed us to reuse components of our code with ease and flexibility, as well as improve the speed and efficiency of our dynamic UI/UX.

Deployment of both the back-end and front-end was done in AWS Elastic Beanstalk and Cloud RDS, as well as S3.

## Try it Out
Check out our website here: http://roomiezfrontend.s3-website-us-east-1.amazonaws.com/
