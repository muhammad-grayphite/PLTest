import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ModalView from "../../components/modalView";
import DetailModal from "../../components/detailModal";
import apiService from "../../utils/apiServices";

const Contacts = ({ isModalA, title }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedContactDetail, setSelectedContactDetail] = useState(null);
  const [contactsIDs, setContactsIDs] = useState([]);
  const [contactList, setContactList] = useState({});
  const [searchText, setSearchText] = useState("");
  const [contactsIdsCopy, setContactIdsCopy] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [isEven, setIsEven] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setContactsIDs([]);
    setContactIdsCopy([]);
    setCurrentPage(1);
    loadContacts(1);
    setSearchText("");
    setIsEven(false);
  }, [location.pathname]);

  let params = {};
  const loadContacts = async (page) => {
    if (location.pathname === "/modalA") {
      params = {
        companyId: 560,
        page: page,
        noGroupDuplicates: 1,
      };
    } else {
      params = {
        companyId: 560,
        page: page,
        countryId: 226,
        noGroupDuplicates: 1,
      };
    }

    try {
      setIsLoading(true);
      let response = await apiService.getContacts({ params });
      if (isEven) {
        const filtered = response?.data?.contacts_ids?.filter(
          (item) => item % 2 === 0
        );
        setContactsIDs((prevData) => [...prevData, ...filtered]);
        setContactIdsCopy((prevData) => [...prevData, ...filtered]);
        setCurrentPage(page);
        setContactList((prevData) => ({
          ...prevData,
          ...response?.data?.contacts,
        }));
      } else {
        setContactList((prevData) => ({
          ...prevData,
          ...response?.data?.contacts,
        }));
        setContactsIDs((prevData) => [
          ...prevData,
          ...response?.data?.contacts_ids,
        ]);
        setContactIdsCopy((prevData) => [
          ...prevData,
          ...response?.data?.contacts_ids,
        ]);
        setCurrentPage(page);
      }
    } catch (error) {
      console.log("something went wrong", error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(e.target.value);
    }
  };

  const handleSearchQuery = (e) => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    setSearchText(e.target.value);
    const newSearchTimeout = setTimeout(() => {
      handleSearch(e.target.value);
    }, 2000);
    setSearchTimeout(newSearchTimeout);
  };

  const handleSearch = async (text) => {
    if (location.pathname === "/modalA") {
      params = {
        companyId: 171,
        query: text,
        page: currentPage,
      };
    } else {
      params = {
        companyId: 171,
        query: text,
        page: currentPage,
        countryId: 226,
      };
    }

    try {
      setIsLoading(true);
      let response = await apiService.getContacts({ params });
      if (isEven) {
        const filtered = response?.data?.contacts_ids?.filter(
          (item) => item % 2 === 0
        );
        setContactsIDs(filtered);
      } else {
        setContactsIDs(response?.data?.contacts_ids);
      }
    } catch (error) {
      console.log("something went wrong", error);
      setContactsIDs([]);
    } finally {
      setIsLoading(false);
    }
  };

  const selectedContact = (contactDetail) => {
    setShowDetail(true);
    setSelectedContactDetail(contactDetail);
  };
  const handleScroll = (values) => {
    const { scrollTop, scrollHeight, clientHeight } = values;
    if (scrollTop + clientHeight >= scrollHeight - 100 && !isLoading) {
      loadContacts(currentPage + 1);
    }
  };

  const handleOnlyEvenIDs = (e) => {
    setIsEven(e?.target?.checked);
    if (e?.target?.checked) {
      const filtered = contactsIdsCopy?.filter((item) => item % 2 === 0);
      setContactsIDs(filtered);
    } else {
      setContactsIDs(contactsIdsCopy);
    }
  };
  return (
    <>
      {!showDetail ? (
        <div>
          <ModalView
            title={title}
            setSearchText={setSearchText}
            handleSearch={handleKeyPress}
            handleSearchQuery={handleSearchQuery}
            selectedContact={selectedContact}
            handleScroll={handleScroll}
            searchText={searchText}
            contactsIDs={contactsIDs}
            contactList={contactList}
            isModalA={true}
            isEven={isEven}
            handleOnlyEvenIDs={handleOnlyEvenIDs}
            isLoading={isLoading}
            currentPage={currentPage}
          />
        </div>
      ) : (
        <DetailModal
          setShowDetail={setShowDetail}
          selectedContactDetail={selectedContactDetail}
        />
      )}

      <Link
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          zIndex: -1,
        }}
        to="/"
      ></Link>
    </>
  );
};

export default Contacts;
