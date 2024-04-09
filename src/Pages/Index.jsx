import Creations from "../Components/Creations/Creations";

const Index = ({ creations, setCreations, user }) => {
  return (
    <div>
      <Creations
        creations={creations}
        setCreations={setCreations}
        user={user}
      />
    </div>
  );
};

export default Index;
