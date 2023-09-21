import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/button/button";
import { SearchBar } from "../components/searchBar/searchBar";
import { Checkbox } from "../components/checkbox/checkbox";
import { Scrollbars } from "react-custom-scrollbars";
import Loader from "../components/loader/loader";

const ModalView = ({
  title,
  searchText,
  setSearchText,
  handleSearch,
  contactsIDs,
  contactList,
  selectedContact,
  isModalA,
  handleSearchQuery,
  handleScroll,
  handleOnlyEvenIDs,
  isEven,
  isLoading,
  currentPage,
}) => {
  return (
    <div
      className="modal-lg modal-dialog"
      style={{
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        zIndex: 9999,
      }}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h5>{title}</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <Link to="/">
              <span aria-hidden="true">&times;</span>
            </Link>
          </button>
        </div>

        <div className="modal-body">
          <div>
            <Link to="/modalA">
              <Button
                text="All Contacts"
                style={{
                  marginRight: "20px",
                  backgroundColor: "#46139f",
                  border: "none",
                }}
              />
            </Link>
            <Link to="/modalB">
              <Button
                text="US Contacts"
                style={{
                  marginRight: "20px",
                  backgroundColor: "#ff7f50",
                  border: "none",
                }}
              />
            </Link>
            <Link to="/">
              <Button
                text="Close"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "1px solid #46139f",
                }}
              />
            </Link>
          </div>
          <SearchBar
            searchText={searchText}
            handleSearch={handleSearch}
            handleSearchQuery={handleSearchQuery}
          />
          <div>
            <Scrollbars
              autoHide
              onScrollFrame={handleScroll}
              style={{ height: 400 }}
            >
              <table className="table mt-5" style={{ tableLayout: "auto" }}>
                <thead>
                  <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Contact No.</th>
                  </tr>
                </thead>

                <tbody>
                  {!isLoading &&
                    contactsIDs?.map((contactId, index) => {
                      let contactDetail = contactList[contactId];
                      return (
                        <tr
                          style={{ cursor: "pointer" }}
                          onClick={() => selectedContact(contactDetail)}
                          key={index}
                        >
                          <td className="wrap-text">
                            {contactDetail?.first_name}
                          </td>
                          <td
                            style={{
                              maxWidth: "200px",
                              wordBreak: "break-word",
                            }}
                          >
                            {contactDetail?.last_name}
                          </td>
                          <td className="wrap-text">
                            {contactDetail?.phone_number}
                          </td>
                        </tr>
                      );
                    })}
                  {isLoading && (
                    <tr className="text-center">
                      {" "}
                      <td colSpan={3}>
                        <Loader />
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </Scrollbars>
          </div>
        </div>
        <div className="modal-footer d-flex justify-content-start">
          {isModalA && (
            <Checkbox handleOnlyEvenIDs={handleOnlyEvenIDs} isEven={isEven} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalView;
