# CollegiateCovid.com

### Health Track Submission
## Inspiration
The coronavirus pandemic in higher education has resulted in a wide variety of complex COVID-19 dashboards. The sheer number of different displays and webpages make it hard to compare different colleges and how well they are dealing with the coronavirus. We wanted to create an application that automatically retrieves up to date policies and statistics for covid at American universities. With this data we can create a website that allows users to view the standardized data for many universities.  

## What it does
Our project consists of a website, a database, and a web scraping python algorithm. The website’s landing page gives a general overview of how coronavirus is faring across all of higher education with many links to resources and other important media. There is also a search bar functionality where users can search for a specific university. When searching, it will send the user to another college specific page where the college’s COVID-19 information is displayed. We focused on two main parts for information: 

- Statistics: Number of Tests, Total Positive Cases, 7 day avg. positivity %, students in isolation
- Policies: Frequency of Testing, Who is Tested, Virtual vs In-Person Classes, Symptom Monitoring

## How we built it
We split the project up into two main parts: backend and frontend. The backend purposes were to create an application to gather the COVID data from colleges and also grab universities' COVID policies and put the data into a database. We used python’s BeautifulSoup library to create algorithms which scraped data from corresponding covid dashboards. Then we sent the data to be stored in Firebase. The frontend was building the UI and the website itself so users can see and interact with the application. We used React on top of html,css,js in order to design our website. 

## Challenges we ran into
We were not completely familiar with the tools we were using such as React and Firebase so we needed to learn those technologies for our project. Also we had trouble scraping data from dashboards that were just embeddings of data analytics tools such as Tableau and Power BI. This limited our college list greatly. Furthermore, it was frustrating to develop a unique scraping algorithm for each college dashboard since the website layouts are not all the same.

## Accomplishments that we're proud of
With ¾ of our team members being first time hackers, we are proud to have created the website and have functionality to it! 

## What we learned
We learned how to use: React, Firebase, and the BeautifulSoup Python Library along with a lot of web design.

## What's next for CollegiateCovid Tracker
We want to expand our list of colleges in the search option to many more universities. The limiting reason we could not was due to the hefty time consumption it took for each dashboard. We are also looking to implement ML techniques in order to gather policy data off of college websites automatically using text recognition. This would make it much easier for entering data in the database. Another idea is to add a way to compare colleges side-by-side using standardized metrics in the future.

