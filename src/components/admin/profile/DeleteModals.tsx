import { SmallModal } from "@/components/shared/modals";
import { Input, Button, Text } from "@chakra-ui/react";
import * as mutT from "@/api/mutations/teacherMutations";
import * as mutS from "@/api/mutations/studentMutations";
import { useForm } from "react-hook-form";
import { useState } from "react";

const DeleteModals: React.FC = () => {
  const { handleSubmit, register } = useForm();
  const [deletedStudentId, setDeletedStudentId] = useState<number | null>(null);
  const [deletedTeacherId, setDeletedTeacherId] = useState<number | null>(null);

  const deleteStudentHandler = () => {
    if (deletedStudentId !== null) {
      mutS.deleteStudent(deletedStudentId);
      setDeletedStudentId(null);
    }
  };

  const deleteTeacherHandler = () => {
    if (deletedTeacherId !== null) {
      mutT.deleteTeacher(deletedTeacherId);
      setDeletedTeacherId(null);
    }
  };
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="px-4 py-2 ">Zmazať účet študentovi</div>
        <div className="px-4 py-2 text-red-500">
          <SmallModal
            modalButtonText={"Zmazať účet študentovi"}
            modalHeaderText={"Zmazať účet študentovi"}
            modalCloseText={"Zatvor"}
          >
            <form onSubmit={handleSubmit(deleteStudentHandler)}>
              <Input
                type="number"
                placeholder="Študent ID"
                {...register("studentId", { required: true })}
                onChange={(e) => setDeletedStudentId(parseInt(e.target.value))}
              />
              <Button
                mt={4}
                color="whiteAlpha.800"
                backgroundColor="red.700"
                type="submit"
              >
                Zmaž
              </Button>
              <Text mt={8} color="red.700" fontWeight={"bold"}>
                Systém pred zmazaním účtu kontroluje či študent nemal požičané
                knihy ak má vráti ich
              </Text>
            </form>
          </SmallModal>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="px-4 py-2  ">Zmazať učet učiteľovi</div>
        <div className="px-4 py-2 text-red-500 ">
          <SmallModal
            modalButtonText={"Zmazať účet učiteľovi"}
            modalHeaderText={"Zmazať účet učiteľovi"}
            modalCloseText={"Zatvor"}
          >
            <form onSubmit={handleSubmit(deleteTeacherHandler)}>
              <Input
                {...register("teacherId", { required: true })}
                onChange={(e) => setDeletedTeacherId(parseInt(e.target.value))}
                type="number"
                placeholder="Učiteľ ID"
              />
              <Button mt={4} color="whiteAlpha.800" backgroundColor="red.700">
                Zmaž
              </Button>
              <Text mt={8} color="red.700" fontWeight={"bold"}>
                Systém pred zmazaním účtu kontroluje či učiteľ nemal požičané
                knihy ak má vráti ich
              </Text>
            </form>
          </SmallModal>
        </div>
      </div>
    </>
  );
};

export default DeleteModals;
