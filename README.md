## <p align="center" style="text-decoration: none !important;padding:0;margin:0;">Anemi Bryetenbach <br> 231178 <br> DV 200 Term 1</p>

## <p align="center" style="text-decoration: none !important;padding:0;margin:0;">Interactive Dashboard</p>

## Table of Contents

* [About the Project](#about-the-project)
  * [Project description](#project-description)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [How to install](#how-to-install)
* [Features and Functionality](#features-and-functionality)
* [Concept Process](#concept-process)
   * [Ideation](#ideation)
   * [Wireframes](#wireframes)
* [Development Process](#development-process)
    * [Highlights](#highlights)
    * [Challenges](#challenges)
* [Future Implementation](#future-implementation)
* [Final Outcome](#final-outcome)
    * [Video Demonstration](#demonstration-video)
* [Conclusion](#conclusion)
* [Acknowledgements](#acknowledgements)

## About the project:

### Project description:
Character Impact is a sophisticated web application designed to provide in-depth insights into characters from the game Genshin Impact through a user-friendly interface.

Upon accessing the home screen, users can select a character to view detailed information. This screen also features two interactive graphs that display relevant character data, alongside an informative "About Us" section to introduce users to the purpose and creators of the application.

The comparison page offers users the ability to select and compare two characters side by side. This comparison includes their vision (element), weapon type, and star rating, enabling users to make informed decisions based on their preferences and gameplay strategies.

The timeline page presents a comprehensive view of all character data in a well-organized chart format. Users can explore information such as character gender, vision, weapon type, star rating, and acquisition method (whether they are obtained through quests, wishes, or are of unknown origin).

Overall, Character Impact seamlessly integrates with the Genshin Impact API to deliver a valuable resource for players, combining detailed character analysis with an engaging and interactive user experience.

### Built with:
This project is built with React and Node.js, as well as Javascript and Chart2.js.

## Getting Started:

### Prerequisites:

* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en)
* [NPM](https://www.npmjs.com/)

### How to install:

* React Bootstrap <br> `npm install react-bootstrap bootstrap`
* React Router DOM <br> `npm i react-router-dom`
* Axios <br> `npm i axios`
* React Chartjs 2 <br> `npm i react-chartjs-2 chart.js`
* Chart.js <br> `npm i chart.js`
* Bootstrap <br> `npm i bootstrap`

## Features and Functionality:

1. Home Screen:
Character Selection: Users can browse and select a character from the Genshin Impact roster to view detailed information.
Data Visualization: Two interactive graphs display key data points related to characters, enhancing user understanding through visual representation.
About Us Section: Provides background information on the application and its creators, fostering user engagement and trust.

3. Comparison Page:
Character Comparison: Users can select two characters to compare their attributes side by side.
Attribute Comparison: Key attributes such as vision (element), weapon type, and star rating are displayed in a comparative format, aiding users in making strategic decisions.

3. Timeline Page:
Comprehensive Character Data: All characters are displayed in a detailed chart, allowing users to view and analyze data at a glance.
Categorization: Characters are categorized by gender, vision, weapon type, star rating, and acquisition method (quest, wish, or unknown).
Filter and Sort Options: Users can filter and sort characters based on various attributes to find specific information quickly.

## Concept Process:

### Ideation:

The concept for Character Impact stemmed from the need for a comprehensive and user-friendly tool that provides Genshin Impact players with detailed insights into their favorite characters. Genshin Impact, with its vast array of characters, each possessing unique abilities, weapons, and elemental powers, presents a complex landscape for players to navigate. Recognizing this, we aimed to create an application that would simplify and enhance the player's experience by offering detailed character comparisons and data visualizations.

### Wireframes:
![Free_iMac_Mockup_1](https://github.com/AnemiB/Year2Term1/assets/125360666/914200dd-a4b7-4b57-a107-2afb5e22a95a)
![Free_iMac_Mockup_4](https://github.com/AnemiB/Year2Term1/assets/125360666/bf6e8859-7767-4727-8bde-68bd4cdf5b9e)


## Development Process

### Highlights

Character Impact offers comprehensive insights into all Genshin Impact characters, providing users with detailed profiles that include stats, abilities, and background lore. Upon accessing the interactive home screen, users can effortlessly select characters to view their detailed information. The home screen also features two interactive graphs for visualizing character data, along with an "About Us" section that introduces the application and its creators.

One of the standout features of Character Impact is the powerful comparison tool, which allows users to compare two characters side by side. This comparison highlights key attributes such as vision (element), weapon type, and star rating, enabling users to make informed decisions regarding character selection and team composition. Additionally, the application includes extensive data visualization options. Users can view all character data in a comprehensive chart format, with the ability to filter and sort characters by gender, vision, weapon type, star rating, and acquisition method (quest, wish, or unknown).

The user experience is designed to be intuitive and enjoyable, with a user-friendly interface that ensures easy navigation and interaction. Character Impact performs seamlessly across various devices, including desktops, tablets, and mobile devices. Real-time updates using the Genshin Impact API ensure that the latest character data is always available, keeping users informed with up-to-date information.

### Challenges

Developing Character Impact presented several technical and design challenges that required innovative solutions and persistent effort. One of the primary challenges was effectively displaying charts that visualized complex character data. Ensuring that these charts were both informative and user-friendly involved significant time and iteration. I had to choose the right libraries and frameworks, integrate them seamlessly with the application, and optimize the performance to handle large datasets without compromising the user experience.
Another significant challenge was implementing a function in JavaScript similar to the COUNTIF function found in spreadsheet software. This function needed to count the occurrences of specific criteria within the data, such as the number of characters with a particular vision or weapon type. Writing this custom function required a deep understanding of JavaScript and careful handling of asynchronous data retrieval to ensure accuracy and efficiency.
Additionally, maintaining real-time updates through the Genshin Impact API posed its own set of difficulties. I needed to ensure that data synchronization was reliable and that any changes or new additions from the game were reflected promptly in our application. This required robust error handling and frequent testing to address any inconsistencies or delays.

## Future Implementation

Looking ahead, Character Impact aims to continuously evolve and enhance its functionality to meet the growing needs of the Genshin Impact community. One of my primary goals is to expand the character database to include upcoming characters and their respective details immediately upon their release. This will ensure that users have access to the most current information without delay, maintaining the app's relevance and utility.

I also plan to integrate advanced analytics features, allowing users to perform deeper statistical analysis on character attributes and performance. This will include metrics such as damage output comparisons, synergy scores between characters, and optimal team compositions based on various gameplay scenarios. These advanced features will cater to both casual players looking for basic insights and hardcore gamers seeking detailed analysis for competitive play.

To further enhance user engagement, I envision implementing a community-driven content section. This feature will enable users to share their custom builds, strategies, and tips directly within the app. By fostering a collaborative environment, I aim to build a vibrant community where players can learn from each other and contribute to the collective knowledge base.

Additionally, I plan to introduce personalized user accounts, allowing users to save their favorite comparisons, chart views, and character profiles. This feature will provide a more tailored experience, making it easier for users to access their most frequently used data and track their progress over time. Enhanced social features, such as sharing comparisons and insights on social media, are also on the horizon, promoting greater interaction and visibility within the Genshin Impact community.

In terms of technical advancements, I am exploring the use of machine learning algorithms to provide predictive insights and recommendations based on user behavior and preferences. This could include suggesting optimal characters for specific tasks or predicting character performance in future game updates. By leveraging cutting-edge technology, I aim to keep Character Impact at the forefront of innovation in gaming tools.

Ultimately, my future implementation strategy is centered on maintaining the app’s position as an indispensable resource for Genshin Impact players. Through continuous improvement and the addition of innovative features, I am committed to enhancing the user experience and providing valuable insights that help players maximize their enjoyment and success in the game.

## Final Outcome

### Demonstration Video

https://drive.google.com/file/d/1xkB62HqhkqcJyLbanRMF_S3dTUd2fBUW/view?usp=sharing

## Conclusion
Developing Character Impact as a solo project has been a fulfilling journey, driven by my passion for providing Genshin Impact players with a comprehensive tool to enhance their gaming experience. From its inception, the goal was to create a platform that not only consolidates character data but also empowers users with tools for informed decision-making and strategic gameplay.

As I look back on the development process, I am proud of the milestones achieved, from designing intuitive user interfaces to integrating real-time data updates through the Genshin Impact API. The feedback and engagement from the community have been invaluable, guiding the evolution of the app and inspiring future enhancements.

Looking forward, my commitment remains steadfast in continually improving Character Impact. I envision expanding the database, enhancing analytical capabilities, and fostering a vibrant community hub where players can collaborate and share insights. Personalized user accounts and advanced social features are among the next steps to create a more personalized and interactive experience.

Character Impact is not just a project but a testament to my dedication to innovation and user-centric design in gaming applications. I am excited about the future possibilities and the opportunity to further elevate the app’s utility and impact within the Genshin Impact community. Together, we will continue to explore new horizons and push boundaries, ensuring that Character Impact remains a trusted companion for players worldwide.

## Authors
Anemi Breytenbach

## Acknowledgements
* [Genshin Impact](https://genshin.hoyoverse.com/en/)
* Genshin API
