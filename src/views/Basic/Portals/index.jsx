import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './style.less';

const docBody = document.body;
class Modal extends Component {
  constructor(props) {
    super(props)
    this.node = document.createElement('div')
  }
  
  componentDidMount() { 
    document.body.appendChild(this.node);
   }
  render() {
    return createPortal(
      <div className="custom-modal-wrap">
        {this.props.children}
      </div>, //塞进传送门的JSX
      this.node //传送门的另一端DOM node
    );
  }

  componentWillUnmount() {
    document.body.removeChild(this.node)
  }
}

class PortalsDemo extends Component {
  state = {
    showModal: false
  }
  openModal = () => {
    this.setState({
      showModal: true
    })
  }
  closeModal = () => {
    this.setState({
      showModal: false
    })
  }
  render() {
    const { showModal } = this.state;
    return (
      <>
        <button onClick={this.openModal}>点击显示弹窗</button>
        {showModal ? <Modal>
          <div className="modal">
            <div className="modal-header">
              <h4>弹窗标题</h4>
              <button onClick={this.closeModal}>关闭弹窗</button>
            </div>
            <div className="modal-body">
              弹窗主体
            </div>
          </div>
        </Modal> : null}

      </>
    )
  }
}

export default PortalsDemo