import styled from "styled-components";
const Father = styled.div`
  display: flex;
`;
const Boxone = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;
const Boxtwo = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;
const Text = styled.span`
  color: white;
`;
function App() {
  return (
    <Father>
      <Boxone>
        <Text>HEllo</Text>
      </Boxone>
      <Boxtwo />
    </Father>
  );
}

export default App;
