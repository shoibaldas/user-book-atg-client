import React, { useEffect, useState } from "react";
import axios from "axios";
import SidebarData from "./SidebarData";
import Loading from "../../../components/Loading/Loading";
import { CgIcecream, CgUserList } from "react-icons/cg";
import SearchBar from "../../../components/SearchBar/SearchBar";
import { GoSearch } from "react-icons/go";

const SidebarMenu = () => {
  const [loading, setLoading] = useState(true);
  const [userList, setUserList] = useState([]);
  const [searchResult, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    axios
      .get("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then(function (response) {
        setUserList(response.data);
        setLoading(false);
      });
  }, []);
 

  const handleSearchChange = (e) => {
    if (e === "") {
      setSearching(false);
    } else {
      setSearching(true);
    }

    if(userList){
      const resultsArray = userList.filter((user) => 
      user.profile.firstName.toLowerCase().includes(e.toLowerCase())
    );

    setSearchResults(resultsArray);
    console.log(searchResult)
    }
    
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div
      className="bg-dark p-3"
      style={{ height: "100vh", overflow: "auto", margin: "auto" }}
    >
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div className="d-flex align-items-center">
          <CgUserList
            className="text-primary"
            style={{ fontSize: "24px" }}
          ></CgUserList>

          <div className="mx-2">
            <h5
              className="text-light"
              style={{ fontSize: "1rem", margin: "0" }}
            >
              User List
            </h5>
          </div>
        </div>
        <div>
          <div className="d-flex" style={{}}>
            <input
              onChange={(e)=> handleSearchChange(e.target.value)}
              type="text"
              name="searchInput"
              placeholder="Search"
              className="rounded"
            />
            <button
              type="submit"
              className="btn px-3 rounded-right"
              style={{ backgroundColor: "#018847" }}
            >
              <GoSearch
                className="text-light"
                style={{ fontSize: "1rem" }}
              ></GoSearch>
            </button>
          </div>
        </div>
      </div>

      {searching ? (
        <div className="p-2">
          {searchResult?.map((user) => (
            <SidebarData key={user.id} user={user}></SidebarData>
          ))}
        </div>
      ) : (
        <div className="p-2">
          {userList?.map((user) => (
            <SidebarData key={user.id} user={user}></SidebarData>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarMenu;