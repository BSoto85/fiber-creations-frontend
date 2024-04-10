import CreationNewForm from "../Components/Creations/CreationNewForm";

const NewForm = ({ user, creations, setCreations }) => {
  return (
    <div>
      <CreationNewForm
        user={user}
        creations={creations}
        setCreations={setCreations}
      />
    </div>
  );
};

export default NewForm;
