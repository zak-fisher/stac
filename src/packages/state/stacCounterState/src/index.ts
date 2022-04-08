import { atom } from 'recoil';

const stacCounterState = atom({
  key: 'stacCounterState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

export default stacCounterState;
