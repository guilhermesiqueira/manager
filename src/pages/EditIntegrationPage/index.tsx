import { useParams } from "react-router";

function EditIntegrationPage() {
  const { id } = useParams();

  return (
    <h1>Edit integration {id}</h1>
  );
}

export default EditIntegrationPage;