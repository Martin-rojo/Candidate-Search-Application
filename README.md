# GitHub Candidate Search Application

A web application that allows users to search through GitHub profiles to find potential candidates. Built with React, TypeScript, and Vite, this application uses the GitHub API to fetch and display user profiles.

## Features

- Random GitHub user profile discovery
- Save potential candidates for later review
- View detailed user information including:
  - Profile picture
  - Name and username
  - Location
  - Email
  - Company
  - Bio
- Persistent storage of saved candidates
- Responsive design
- Simple accept/reject interface

## Technologies Used

- React
- TypeScript
- Vite
- React Router DOM
- GitHub API
- Local Storage

## Prerequisites

Before you begin, ensure you have:
- Node.js installed
- GitHub Personal Access Token
- npm or yarn package manager

## Installation

1. Clone the repository:


##Install dependencies:

BASH

2. npm install

3. Create a .env file in the root directory:

ENV:

VITE_GITHUB_TOKEN=your_github_token_here

4. Start the development server:

BASH:

npm run dev

Usage

## Home Page
-View one GitHub profile at a time
-Click the green (+) button to save a candidate
-Click the red (-) button to skip to the next candidate
-Counter shows remaining candidates in the current set
-Potential Candidates Page
-View all saved candidates
-Remove candidates from the saved list
-Access saved candidates' GitHub profiles
-Environment Variables
-VITE_GITHUB_TOKEN: Your GitHub Personal Access Token

## Deployment

This application is deployed on Render. To deploy:


Connect your GitHub repository to Render

Configure the build settings:

-Build Command: npm install && npm run build
-Start Command: npm run preview
-Add environment variables in Render dashboard:
-VITE_GITHUB_TOKEN
-PORT

##Contributing

1. Fork the repository
2. Create your feature branch (git checkout -b yourbranch/BranchSuggestion)
3. Commit your changes (git commit -m 'add my suggestion here')
4.Push to the branch (git push origin yourbranch/BranchSuggestion)


##License

This project is licensed under the MIT License - see the LICENSE file for details

##Acknowledgments

GitHub API for providing user data

React and Vite communities for excellent documentation


Contact

Martin Rojo  | Martin.rojo101@gmail.com 
Project Link: | https://github.com/Martin-rojo/Candidate-Search-Application
Deployment Link: | https://candidate-search-application-op8c.onrender.com/


