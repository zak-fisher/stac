import * as React from "react";
import { useRecoilState } from "recoil";

// IMPORTANT!
// Import sibling packages from node_modules vs relative paths
// Otherwise they will get bundled together here, which we don't want
import stacCounterState from "@fubo/stac__state__stac-counter-state";

const STACCounter = () => {
  const [ count, setCount ] = useRecoilState(stacCounterState);
  return (
    <>
      <p>STAC Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <br/>
      <button onClick={() => setCount(count - 1)}>Decrement Count</button>
    </>
  )
}

export default STACCounter;
