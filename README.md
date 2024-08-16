# GitHub Repository Search App

This application is a web-based tool designed to search for GitHub repositories
using the GitHub GraphQL API. It provides a table view of search results with
the ability to paginate and sort the data by different fields. Additionally,
users can view detailed information about selected repositories.

## Features

- **Search Repositories:** Search GitHub repositories by keyword.
- **Paginated Results:** View search results with pagination controls.
- **Sorting:** Sort search results by name, stars, forks, or the last update
  date in ascending or descending order.
- **Repository Details:** View additional details for a selected repository,
  including its name, description, and license information.
- **Localization:** Supports English and Russian languages.

## Technologies Used

- **TypeScript:** The application is fully typed using TypeScript, ensuring type
  safety and clarity.
- **React:** The UI is built using React.
- **Redux Toolkit:** State management and data fetching are handled using Redux
  Toolkit.
- **GitHub GraphQL API:** The application uses the GitHub GraphQL API for
  fetching repository data.
- **Material-UI:** MUI is used for the application's component library and
  styling.
- **Sass & CSS Modules:** The application is styled using Sass, with styles
  scoped to components using CSS Modules.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/seygorin/northis-test-task.git
   cd northis-test-task
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add your GitHub token:

   ```env
   VITE_GITHUB_TOKEN=your-github-token
   ```

4. **Start the application:**

   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`.

## Usage

- **Search:** Enter a keyword in the search bar to find repositories.
- **Sort:** Use the table headers to sort the results by stars, forks, or last
  updated.
- **Paginate:** Use the pagination controls to navigate through the search
  results.
- **View Details:** Click on a repository row to view its details.

## Folder Structure

- `public/locales`: Translations.
- `src/`: Main source code folder.
  - `components/`: Reusable React components.
  - `hooks/`: Custom React hooks, including the pagination hook.
  - `store/`: Redux store setup, including slices and thunks.
  - `styles/`: Sass files with CSS Modules.
  - `types/`: TypeScript types and interfaces.
  - `service/`: API client setup using Apollo Client.
