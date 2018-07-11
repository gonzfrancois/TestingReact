import { connect } from 'react-redux'
import * as HomeComponent from './duck';

const Home = connect()(HomeComponent.ViewComponent)

export default Home