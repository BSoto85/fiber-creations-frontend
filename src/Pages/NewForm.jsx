import CreationNewForm from "../Components/Creations/CreationNewForm";

const NewForm = ({ user }) => {
  return (
    <div>
      <CreationNewForm user={user} />
    </div>
  );
};

export default NewForm;
