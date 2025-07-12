import axiosInstance from "../utils/axiosInstance";
export const signupUser=async(userData)=>{
    try{
        const response=await axiosInstance.post('/auth/signup',userData);
        return response.data;
    }catch(error){
        throw error.response?.data?.message || 'SignUp failed';
    }
}

export const loginUser=async(credentials)=>{
    try{
        const response=await axiosInstance.post('/auth/login',credentials);
        return response.data;
    }catch(error){
        throw error.response?.data?.message || 'Login Failed';
    }
}
export const getCurrentUser = async (token) => {
  try {
    const response = await axiosInstance.get('/auth/user', {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Unable to fetch user';
  }
};

export const getCurrentAdmin = async () => {
  try {
    const response = await axiosInstance.get('/auth/getadmin', {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to fetch admin details';
  }
};

export const logoutUser = async () => {
  try {
    const response = await axiosInstance.get('/auth/logout', null, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Logout failed';
  }
};