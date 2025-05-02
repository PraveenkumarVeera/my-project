import { useState } from "react";
import { fetchUser } from "../API_Layer/userApi";
import { useQuery } from '@tanstack/react-query';

const useFetchUsers = () => {
    const [users, setUsers] = useState([]);

    const initFetchUsers = async () => {
      try {
        const response = await fetchUser();
      setUsers(response.data);
      } catch (error) {
        console.error("API call failed:", error);
      }
      
    };

    return useQuery({
      queryKey: ['users'],
      queryFn: fetchUser,
      select: (data) => data.data, // extract `data` if needed
    });
    
    // return {
    //   users,
    //   initFetchUsers,
    // };
  };

  export default useFetchUsers;