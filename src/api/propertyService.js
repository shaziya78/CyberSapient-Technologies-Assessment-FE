import axiosInstance from "../utils/axiosInstance";

export const createProperty = async (propertyData) => {
  try {
    const response = await axiosInstance.post(
      "/properties/create",
      propertyData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Property creation failed";
  }
};

export const getAllProperties = async () => {
  try {
    const response = await axiosInstance.get("/properties/get");
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to fetch properties";
  }
};

export const getPropertyById = async (id) => {
try{
    const response = await axiosInstance.get(`/properties/${id}/property`);
  return response.data;
}catch(error){
  throw error.response?.data?.message || "Failed to fetch details properties";
}

};

export const updateProperty = async (id, updatedData) => {
  const response = await axiosInstance.put(
    `/properties/${id}/property-update`,
    updatedData,
    {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};
export const deleteProperty = async (id) => {
  try {
    const res = await axiosInstance.delete(`/properties/${id}/property-delete`);
    return res.data;
  } catch (err) {
    throw err.response?.data?.message || "Delete failed";
  }
};
export const toggleBookmark = async (propertyId) => {
  try {
    const res = await axiosInstance.post(`/bookmark/${propertyId}`, null, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    throw error?.response?.data?.message || "Failed to toggle bookmark";
  }
};
export const checkBookmark = async (propertyId) => {
  try {
    const res = await axiosInstance.post(
      `/bookmark/check/${propertyId}`,
      null,
      { withCredentials: true }
    );
    return res.data; // { bookmarked: true/false }
  } catch (error) {
    throw error?.response?.data?.message || "Failed to check bookmark";
  }
};
