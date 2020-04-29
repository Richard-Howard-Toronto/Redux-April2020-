import { useState, useEffect} from 'react';

function useApiData(quoteUrl) {

    const [url, setUrl] = useState(quoteUrl);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState();

    //fetch data

    useEffect(() => {
    
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(url);
      console.log(response)
      setData(await response.json());
      
      setIsLoading(false);
    };
    if (url) {
    fetchData();
        }
  }, [url]);


    return[data,isLoading,setUrl];
}

export default useApiData;
