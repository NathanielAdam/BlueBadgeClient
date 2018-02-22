import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
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
        <DropdownMenu className="CollapsableNav center-this">
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem className="center-this hide">Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem></DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
  
}