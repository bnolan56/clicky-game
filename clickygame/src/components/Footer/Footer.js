import React from 'react';

const styles = {
  footer: {
    background: '#007bff',
    color: "#fff",
    textAlign: 'center'
  }
}

const Footer = props => {
  return (
    <div style={styles.footer} className="footer font-small pt-4 mt-4">
      <div className="row">
        <div className="col-md-6">
          <h5 className="title">Footer Content</h5>
          <p>Here is overwatch footer content.</p>
        </div>

        <div className="col-md-6">
          <h5 className="title">Links</h5>
          <ul>
            <li className="list-unstyled"><a href="#!">Link 1</a></li>
            <li className="list-unstyled"><a href="#!">Link 2</a></li>
            <li className="list-unstyled"><a href="#!">Link 3</a></li>
            <li className="list-unstyled"><a href="#!">Link 4</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        <div className="container-fluid">
          &copy; {(new Date().getFullYear())} Copyright: <a href="#"> overwatchclickygame.com </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
