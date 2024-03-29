import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rocket from '../components/Rocket/Rocket';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Rocket />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
