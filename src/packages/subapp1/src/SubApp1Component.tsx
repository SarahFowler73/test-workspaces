import { addNumbers } from "@test-workspaces/utils/src/myUtil";

const SubApp1Entry = () => {
  return <div>I'm Subapp 1 2+3={addNumbers(2, 3)}</div>;
};

export default SubApp1Entry;
