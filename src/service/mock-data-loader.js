const JSON_FILE_PATH =  '../json/';

const MockDataLoader = {

    loadData: async function (fileName) {
        try {
            // Define a delay function using Promises
            const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

            // Delay execution by 10 seconds
            await delay(5000);

            // Fetch the JSON file content
            const response = await fetch(`${JSON_FILE_PATH}${fileName}`); // Assuming fileName is a URL or relative path
            if (!response.ok) {
                throw new Error(`Failed to fetch ${fileName}: ${response.status}`);
            }

            // Parse JSON
            let res = {};
            res.data = await response.json();

            // Return the parsed JSON data
            return res;
        } catch (error) {
            console.error('Error loading data:', error);
            throw error; // Propagate the error back to the caller if needed
        }
    }
}

export default MockDataLoader;
