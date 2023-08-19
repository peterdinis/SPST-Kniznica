import Header from "../shared/Header";
import * as api from "../../api/queries/categoryQueries";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import FallbackRender from "../shared/errors/FallbackRender";
import FallbackLoader from "../shared/FallbackLoader";
import { placeholderCategory } from "@/data/placeholderCategory";
import useTeacher from "@/hooks/useTeacher";
import useAdmin from "@/hooks/useAdmin";
import { WarningIcon } from "@chakra-ui/icons";
import { ApiModal } from "../shared/modals";
import { Input, Tag, Text } from "@chakra-ui/react";
import * as mut from "@/api/mutations/categoryMutation";
import { useForm } from "react-hook-form";
import {
  allFieldsErrors,
  deleteError,
  deleteSuccess,
  updateSuccess,
} from "../shared/toasts/categoryToast";
import { IUpdateCategory } from "@/interfaces/ICategory";

const CategoryInfo: React.FC = () => {
  const router = useRouter();
  const { query, isReady } = useRouter();

  if (!isReady) {
    return <FallbackLoader />;
  }

  const { data, isError, isLoading } = useQuery(
    ["categoryDetail", query.id as unknown as number],
    () => api.getOneCategory(Number(query.id) as unknown as string),
    {
      placeholderData: placeholderCategory,
    }
  );

  if (isError) {
    return <FallbackRender error="Nastala chyba" />;
  }

  if (isLoading) {
    return <FallbackLoader />;
  }

  const navigateToCategories = () => {
    router.push("/category/all");
  };

  const { teacher } = useTeacher();
  const { admin } = useAdmin();

  const { register, handleSubmit, setError, reset } = useForm();

  const updateCategorySubmit = async (id: number, newData: IUpdateCategory) => {
    try {
      const updatedCategory = await mut.updateCategory(id, newData);
      updateSuccess();
      window.location.replace("/category/all");
      return updatedCategory;
    } catch (error) {
      console.error("Error updating category:", error);
      throw error;
    }
  };

  const deleteCategorySubmit = async (id: number) => {
    try {
      await mut.deleteCategory(id);
      deleteSuccess();
      reset();
      window.location.replace("/category/all");
    } catch (error) {
      deleteError();
      setError("id", {
        type: "manual",
        message: "An error occurred while deleting the category.",
      });
    }
  };

  return (
    <>
      <Header name="Detail Kategórie" />
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="mt-4 border-gray-200">
          <dl>
            {(teacher || admin) && (
              <>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Id kategórie
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {data.id}{" "}
                  </dd>
                </div>
              </>
            )}
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Meno kategórie
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {data.name}{" "}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Popis kategórie
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {data.description}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Knihy ktoré majú túto kategóriu
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {!data.books || data.books.length === 0 ? (
                  <>
                    <dd className="mt-3 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      Kategória nie je priradená pri žiadnej knihe{" "}
                      <WarningIcon />
                    </dd>
                  </>
                ) : (
                  <div>
                    {data.books.map((item: { name: string }) => {
                      return (
                        <Tag
                          key={item.name}
                          variant="solid"
                          colorScheme="teal"
                          mr={4}
                        >
                          {item.name}
                        </Tag>
                      );
                    })}
                  </div>
                )}
              </dd>
            </div>
          </dl>
          <button
            onClick={navigateToCategories}
            className="mt-6 bg-blue-200 rounded-lg p-2 font-extrabold"
          >
            Späť na kategórie
          </button>
        </div>
      </div>
      {(teacher || admin) && (
        <>
          <button className="float-right">
            <ApiModal
              modalButtonText={"Uprav kategóriu"}
              modalHeaderText={"Uprav kategóriu"}
              modalCloseText={"Zatvor"}
            >
              <form
                onSubmit={handleSubmit(async (formData) => {
                  try {
                    const updatedData = {
                      name: formData.name,
                      description: formData.description,
                    };

                    if (
                      updatedData.name === "" ||
                      updatedData.description === ""
                    ) {
                      allFieldsErrors();
                      return;
                    }

                    await updateCategorySubmit(
                      Number(formData.id),
                      updatedData
                    );

                    reset();
                  } catch (error) {
                    setError("id", {
                      type: "manual",
                      message: "An error occurred while updating the category.",
                    });
                  }
                })}
              >
                <Input {...register("id")} type="hidden" value={data.id} />
                <Input {...register("name")} placeholder="Meno kategórie" />
                <br />
                <Input
                  mt={6}
                  {...register("description")}
                  placeholder="Popis kategórie"
                />
                <button
                  type="submit"
                  className="bg-red-800 text-white rounded-lg p-2 mt-5"
                >
                  Uprav kategóriu
                </button>
                <Text mt={5} color="red.400" fontWeight={"bold"}>
                  Nemusia byť vyplnené všetky údaje
                </Text>
              </form>
            </ApiModal>
          </button>
          <button className="mr-4 float-right">
            <ApiModal
              modalButtonText={"Zmazať kategóriu"}
              modalHeaderText={"Zmazať kategóriu"}
              modalCloseText={"Zatvor"}
            >
              <form
                onSubmit={handleSubmit((formData) =>
                  deleteCategorySubmit(formData.id)
                )}
              >
                <Input
                  {...register("id", {
                    valueAsNumber: true,
                    required: "Category ID is required",
                  })}
                  placeholder="Id Kategórie"
                />
                <button
                  type="submit"
                  className="bg-red-800 text-white rounded-lg p-2 mt-5"
                >
                  Zmaž kategóriu
                </button>
              </form>
            </ApiModal>
          </button>
        </>
      )}
    </>
  );
};

export default CategoryInfo;
