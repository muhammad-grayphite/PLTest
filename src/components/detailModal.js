import React from "react";

const DetailModal = ({ setShowDetail, selectedContactDetail }) => {
  return (
    <>
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-dialog" style={{ minWidth: "500px" }}>
          <div className="modal-content">
            <div className="modal-header">
              <h5>{"Contact Details"}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span
                  onClick={() => {
                    setShowDetail(false);
                  }}
                  aria-hidden="true"
                >
                  &times;
                </span>
              </button>
            </div>

            <div className="modal-body p-0">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Contact No.</th>
                    <th scope="col">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    <tr>
                      <td>{selectedContactDetail?.first_name}</td>
                      <td>{selectedContactDetail?.last_name}</td>
                      <td>{selectedContactDetail?.phone_number}</td>
                      <td>{selectedContactDetail?.email}</td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailModal;
