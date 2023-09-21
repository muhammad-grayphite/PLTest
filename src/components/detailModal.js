import React from "react";

export const DetailModal = ({ setShowDetail, selectedContactDetail }) => {
  return (
    <>
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-dialog" style={{ minWidth: "500px" }}>
          <div className="modal-content">
            <div class="modal-header">
              <h5>{"Modal C"}</h5>
              <button
                type="button"
                class="close"
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

            <div class="modal-body p-0">
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
