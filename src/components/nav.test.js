import Nav from './Nav';
import { shallow } from 'enzyme'

test('renders learn react link', () => {
    const wrapper = shallow(<Nav.WrappedComponent />)

    expect(wrapper.find('.nav')).toHaveLength(1);
});