import React ,{ createContext, useContext, useState } from "react"

const Export = createContext();

export const DataExport = ({children}) => {
  
    const [click,setClick] = useState(false);
    const [username,setUsername] = useState();
    const [selecteddish, setSelecteddish] = useState([]);
    const [filterdata,setFilterdata] = useState([]);
    const [searchtext,setSearchtext] = useState('');
    // check filter data true or false
    const [isfiltertrue,setIsfiltertrue] = useState();
    // send order details
    const [orderdetails,setOrderdetails] = useState([]);
    const [cartdetails,setCartdetails] = useState([]);
    // cart list todo
    const [cartlist,setCartlist] = useState([]);
  return (
   <Export.Provider value={{click,setClick,username,setUsername,selecteddish, setSelecteddish,filterdata,setFilterdata,searchtext,setSearchtext,isfiltertrue,setIsfiltertrue,orderdetails,setOrderdetails,cartdetails,setCartdetails,cartlist,setCartlist}}>
    {children}
   </Export.Provider>
  )
}
export const UseData = () => {
    return useContext(Export);
  };

