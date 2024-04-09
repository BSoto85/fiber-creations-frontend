import Creations from "../Components/Creations/Creations";

const Index = ({ creations, setCreations }) => {
  return (
    <div>
      <Creations creations={creations} setCreations={setCreations} />
    </div>
  );
};

export default Index;
