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
    
    console.log(this.props)
    return (
      <div>  
        <ButtonDropdown className="float-left" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle>
            <div className="triline"></div>
            <div className="triline"></div>
            <div className="triline"></div>
          </DropdownToggle>
          <DropdownMenu className="CollapsableNav center-this">
            <DropdownItem header>Logout</DropdownItem>
            <form>
            <DropdownItem type="submit" className="center-this hide" onClick={this.props.logout} >Logout</DropdownItem>
            </form>
            <DropdownItem divider />
            <DropdownItem></DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
    );
  }
  
}