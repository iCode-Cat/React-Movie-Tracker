import React from "react";
import { connect } from 'react-redux';
import {setTest} from '../../../Redux/Test/test-action'

import "./Header.scss";

const Header = ({hidden,setTest}) => {
  console.log(setTest);
  return (
    <header className="header-container">
      <div className="nav-logo">
        <h1 onClick={setTest}>WATCHER</h1>
      </div>

      <div className="nav-profile">
        <div className="username">admin</div>
        <div className="profile-img">
          <img src="" alt="profile" />
        </div>
      </div>
    </header>
  );
};


const mapDispatchToProps = dispatch =>({

  setTest:() => dispatch(setTest())

})

const mapStateToProps = ({test:{hidden}}) => ({

  hidden
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)
