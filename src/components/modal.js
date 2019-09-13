import React from "react"
import closeIcon from "./../images/close.svg"


class Modal extends React.PureComponent {

  render() {

    return (
      <div className={"modal fade " + (this.props.show ? 'show' : '')}
        onClick={this.props.close}>
        <div className="modal-wrapper">
            <div className="modal-header">
              <img src={closeIcon} height="35" onClick={this.props.close} alt="Sluit venster" />
            </div>
            <div className="modal-body">
              {this.props.children}
            </div>
        </div>
      </div>
    )
  }
}

export default Modal