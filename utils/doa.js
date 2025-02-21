// utils/doa.js
export const fetchDoaList = async () => {
    try {
      const response = await fetch('https://api.myquran.com/v2/doa/sumber/harian'); // Correct API endpoint for Doa list
      if (!response.ok) {
        throw new Error('Failed to fetch doa list');
      }
  
      const data = await response.json();
      console.log('Fetched Doas:', data); // Log the fetched data to verify
  
      // Check if the data has the correct structure
      if (!data || !data.data || !Array.isArray(data.data)) {
        console.error('Invalid or empty data structure:', data);
        throw new Error('Invalid data structure received');
      }
  
      return data.data; // Assuming "data" contains the list of doas
    } catch (error) {
      console.error('Error fetching doa list:', error);
      throw new Error(error.message || 'An error occurred while fetching the doa list');
    }
  };
  