import Modal from "@/components/Modal";
import ProjectForm from "@/components/ProjectForm";
import { getUserDetails } from "@/lib/session";
import { redirect } from "next/navigation";

const CreateProject = async () => {
  const session = await getUserDetails();

  if (!session?.user) redirect("/");
  return (
    <Modal>
      <h3 className="modal-head-text">Create a New Project</h3>
      <ProjectForm type="create" session={session} />
    </Modal>
  );
};

export default CreateProject;
