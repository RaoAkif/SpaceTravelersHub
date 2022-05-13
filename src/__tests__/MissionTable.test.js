import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Table from '../pages/Missions/MissionTable';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Table />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
