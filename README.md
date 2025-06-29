# FINDJOB - React Native Mobile Application

FindJob is a modern mobile application built with React Native and Expo that helps users search, browse, and apply for job opportunities. The app provides a sleek, user-friendly interface to explore job listings from various industries, with features like job search, filtering by job type, detailed job views, and more.


## Features

- Home Screen with popular and nearby job suggestions
- Job Search functionality with keyword filtering
- Job Type Filtering (Full-time, Part-time, Contractor)
- Detailed Job Views with company information, job requirements,and responsibilities
- Dynamic Navigation between screens
- Pull-to-Refresh for updating job listings
- Pagination for browsing through multiple pages of search results
- Responsive UI that works across different device sizes
- Error Handling for network issues or API limitations

## Technology Stack


- React Native: Core framework for building the mobile application
- Expo: Development platform for streamlining React Native development
- Expo Router: For navigation between screens with dynamic routing
- JavaScript/JSX: Programming language and syntax for component creation
- Axios: For making HTTP requests to the job search API
- React Hooks: For state management (useState, useEffect, useCallback)
- Custom Hooks: Created reusable hooks like useFetch for data fetching

## Implementation Details

1) Custom Data Fetching:

Implemented a reusable useFetch hook that handles API requests, loading states, and error handling
Added caching and refreshing capabilities

2) Dynamic Routing:

Used Expo Router for navigation with dynamic routes based on job IDs
Implemented back navigation and sharing capabilities

3) Job Search & Filtering:

Created a search mechanism that fetches results based on user input
Added filtering options for different job types
Implemented pagination for browsing through search results

4) Error Handling:

Added comprehensive error handling for API failures
Implemented user-friendly error messages
Added fallbacks for missing or incomplete data


## API Integration

The application uses the JSearch API from RapidAPI to fetch real job listings.

## Future Enhancements
- User would be able to like and to save a job offer
- Advanced filtering options
- User could actually share the offer with the help of the share button
- Location-based job suggestions