import { connect } from 'react-redux'
import * as NavbarComponent from './duck';

const Navbar = connect()(NavbarComponent.ViewComponent)

export default Navbar