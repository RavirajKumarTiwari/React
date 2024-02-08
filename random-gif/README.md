# Random Gif Generator

This project showcases the implementation of a custom React hook for fetching and displaying random gifs.

## **Custom Hook: `useGif.js`**

The heart of this project lies in the **`useGif.js`** custom hook located at **`random-gif/src/useGif.js`**. It seamlessly manages the retrieval of gif data from the GIPHY API, whether randomly or based on tags. This hook efficiently returns the gif image URL, loading state, and the fetchData function.

### **Key Components:**

- **useState and useEffect**: Leveraging React's **`useState`** and **`useEffect`**, the hook adeptly handles local component state management.
- **Axios for API Requests**: **`axios`** is employed to execute API requests due to its simplicity and feature-rich functionality.
- **Security Measures**: The GIPHY API key is securely stored in an environment variable.

### **Functionality:**

- **Initialization**: The hook initializes empty gif and loading states with **`useState`**.
- **Data Fetching**: The **`fetchData`** function orchestrates API requests using **`axios`** and seamlessly updates the states upon response.
- **Lifecycle Management**: **`useEffect`** triggers **`fetchData`** on component mount, ensuring the retrieval of a random gif.

## **Integration with App Component**

The **`App`** component seamlessly integrates and employs the custom hook. It adeptly manages the display of gifs or a loading spinner based on the loading state. Furthermore, it facilitates the retrieval of a new random gif upon button click by invoking the **`fetchData`** function.

## **Benefits of Using Custom Hooks**

This project exemplifies the power of custom hooks in facilitating code reuse and separation of concerns. By encapsulating common data fetching logic within **`useGif`**, components can effortlessly share and manage gif-related functionality. Furthermore, adhering to the Single Responsibility Principle, the project separates data retrieval from display logic, promoting cleaner and more maintainable code.

## **Why Axios Over Fetch?**

The choice of **`axios`** over the native **`fetch`** API stems from several compelling advantages:

- *`npm i axios` to install axios & `import axios from "axios"` to import *

1. **Simplified API:** **`axios`** offers a more intuitive and streamlined approach to making HTTP requests, significantly reducing the verbosity associated with the traditional **`fetch`** syntax.
2. **Automated Data Handling:** **`axios`** seamlessly handles data transformation, automatically converting request data into JSON and parsing response JSON into JavaScript objects. This alleviates the need for manual parsing, thereby enhancing code clarity and efficiency.
3. **Enhanced Feature Set:** **`axios`** boasts an extensive array of features not inherently available in the native **`fetch`** API. These include automatic JSON data transformations, client-side response caching, robust error handling capabilities, among others. This comprehensive feature set ensures enhanced flexibility and functionality, catering to diverse project requirements.

By leveraging **`axios`** within this project, we ensure optimal performance, enhanced security, and streamlined development, thereby fostering a seamless and efficient user experience.