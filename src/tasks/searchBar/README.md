This React component implements an autocomplete search bar that fetches recipe data from the DummyJSON API. It includes caching and debouncing for improved performance and user experience.

## Features

- **AutoComplete:** Displays a list of recipe names as the user types.
- **Debouncing:** Prevents excessive API calls by delaying the fetch until the user stops typing for a short period (300ms).
- **Caching:** Stores fetched results in memory to avoid redundant API requests for repeated searches.
- **Display Control:** Shows/hides the results dropdown based on input focus and blur.
