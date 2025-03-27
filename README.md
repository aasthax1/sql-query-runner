# SQL Runner Web Application

## Overview  
The **SQL Runner Web Application** is a web-based tool that allows users to input SQL queries and view mock results.

The application includes:  
- A text area/code editor for entering SQL queries.  
- A display section to show the results.  
- A toggle mechanism (dropdown) to switch between predefined queries and their respective results.  
- A clean and intuitive user interface.  

## Tech Stack  
The project is built using:  
- **JavaScript Framework:** React (with Vite for optimized builds)  
- **State Management:** React's useState & useEffect  
- **Styling:** CSS  
- **Deployment:** Netlify  
- **Version Control:** GitHub   

## Features  
- **Predefined Queries:** Users can select from multiple predefined SQL queries.  
- **Mock Data Display:** The app shows results corresponding to the selected query.  
- **Dynamic UI:** Smooth toggling between different queries and their mock results.  

## Page Load Time  
The total page load time of the application is **~2.5 seconds**.  

### How It Was Measured  
The page load time was measured using **Chrome DevTools (Performance tab)**:  

1. **Open Chrome DevTools**  
   - Right-click on the page → Click **Inspect** → Navigate to the **Performance** tab.  

2. **Start Performance Recording**  
   - Click on the **Record** button and refresh the page to capture the loading process.  

3. **Analyze Key Metrics**  
   - **First Contentful Paint (FCP):** Time when the first visible content appeared (~1.2s).  
   - **Largest Contentful Paint (LCP):** Time when the main content was fully loaded (~1.9s).  
   - **Total Load Time:** The overall time taken from request initiation to idle state (**~2.5s**).  

## Optimizations  
To improve performance and load time, the following optimizations were applied:  
- **Vite as the build tool** - It provides **faster hot reloading** and **optimized production builds**.
- **Lazy Loading:** Code splitting was used to ensure that only required components load initially.  
- **Minified Assets:** CSS and JavaScript files were minified to reduce file sizes.  
- **Efficient Rendering:** React’s state management optimizations were implemented to reduce unnecessary re-renders.

