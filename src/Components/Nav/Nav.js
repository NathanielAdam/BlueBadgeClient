import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import LoginModal from './User/Login'
export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle>
          <div className="triline"></div>
          <div className="triline"></div>
          <div className="triline"></div>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <LoginModal/>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem className="login Button">Login</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}