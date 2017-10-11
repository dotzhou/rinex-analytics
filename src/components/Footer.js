import React from 'react'
import {Link} from 'office-ui-fabric-react/lib/Link'
import '../_styles/Footer.css'

const Footer = () => (
  <div className="footer-container">
    {'©  Geodesy App  2017 '}
    <Link href="https://developer.microsoft.com/en-us/fabric">Get in touch!</Link>
    {' -- Made with '}
    <span className="text-red">♥</span>
    {' by '}
    <Link href="https://github.com/dotzhou/rinex-analytics">Geodesy{' <@geodesy.ga.gov.au>'}</Link>    
  </div>
)

export default Footer
