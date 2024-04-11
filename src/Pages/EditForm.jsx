import CreationEditForm from "../Components/Creations/CreationEditForm";

const EditForm = ({ user, creations, setCreations }) => {
  return (
    <div>
      <CreationEditForm
        user={user}
        creations={creations}
        setCreations={setCreations}
      />
    </div>
  );
};

export default EditForm;
