import { useState } from "react";

const ChildComponent2 = ({userName, changeName}) => {
    return (
        <div>
            <h5>ChildComponent2</h5>
            name: {userName}
        </div>
    )
}

const ChildComponent = ({userName, changeName}) => {
  return (
    <div>
      <h5>ChildComponent</h5>
      <ChildComponent2 userName={userName} changeName={changeName}/>
    </div>
  );
};

const ParentPage = () => {
  const [name, setName] = useState("Bayel");
  return (
    <div>
      ParentComponent
      Name: {name}
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <ChildComponent userName={name} changeName={setName}/>
    </div>
  );
};
export default ParentPage;
