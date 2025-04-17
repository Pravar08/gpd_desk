import api from './index';

export const fetchGPSLogs = async (limit = 300, page = 1) => {
  try {
    const response = await api.get(`/api/gps-logs?limit=${limit}&page=${page}`);
    console.log(`Fetched GPS Logs (Page ${page}):`, response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching GPS logs:', error);
    return [];
  }
};


export const fetchDeviceLatLong = async (limit = 300, page = 1) => {
  try {
    const response = await api.get(`/api/gps-logs?limit=${limit}&page=${page}`);
    console.log(`Fetched GPS Logs (Page ${page}):`, response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching GPS logs:', error);
    return [];
  }
};

export const addCustomer=async(payload)=>{
  try {
    const response = await api.post(`/api/customers/create`,payload);
    console.log(`Fetched GPS Logs (Page ${payload}):`, response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching GPS logs:', error);
    return [];
  }
}
export const fetchomer=async(payload)=>{
  try {
    const response = await api.post(`/api/customers/fetch`,{pagenumber:0,limit:20})
    // console.log(`Fetched GPS Logs (Page ${payload}):`, response.data);
    return response.data;
  } catch (error) {     
    console.error('Error fetcing GPS logs:', error);
    return [];
  }
}
// Example usage
