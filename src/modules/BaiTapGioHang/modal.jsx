import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const { title, content, open, onClose, onOK } = this.props;

    console.log(this.props);
    if (!open) return null;

    return (
      <div
        className="modal fade show"
        style={{
          display: "block",
          opacity: 1,
          backgroundColor: "rgba(128, 128, 128, 0.9)",
        }}
      >
        <div className="modal-dialog">
          <div className="modal-content" style={{top:'250px'}}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              />
            </div>
            <div className="modal-body">{content}</div>
            <div className="modal-footer">
              <button
                onClick={onClose}
                type="button"
                className="btn btn-secondary"
              >
                Close
              </button>
              <button onClick={onOK} type="button" className="btn btn-primary">
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
