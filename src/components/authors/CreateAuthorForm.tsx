import Header from "../shared/Header";
import { toast } from "react-toastify";
import { useForm } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { useRouter } from "next/router";
import { useState } from "react";

type AuthorFormData = {
  name: string;
  lastName: string;
  birthYear: number;
  deathYear?: number;
  country: string;
  description: string;
  litPeriod: string;
  image: File | null;
};

// from react-dropzone.d.ts 
interface Accept {
  [key: string]: string[];
}


const notify = () => toast.success("Nový spisovateľ bol vytvorený");
const errorRegister = () => toast.error("Spisovateľ nebol vytvorený");

const CreateAuthorForm: React.FC = () => {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const { register, handleSubmit, setValue } = useForm<AuthorFormData>();

  const { getRootProps, getInputProps } = useDropzone({
    accept: '.jpg, .jpeg, .png' as unknown as Accept,
    onDrop: (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        setValue('image', acceptedFiles[0]);
        setSelectedImage(acceptedFiles[0]);
      }
    }
  });

  const onHandleSubmit = async (data: AuthorFormData) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('lastName', data.lastName);
    formData.append('birthYear', data.birthYear.toString());
    if (data.deathYear) {
      formData.append('deathYear', data.deathYear.toString());
    }
    formData.append('country', data.country);
    formData.append('description', data.description);
    formData.append('litPeriod', data.litPeriod);
    if (data.image) {
      formData.append('image', data.image);
    }

    try {
      const response = await axios.post('http://localhost:8111/authors', formData);
      console.log('New author created:', response.data);
      notify();
    } catch (error) {
      console.error('Error creating author:', error);
      errorRegister();
    }
  };


  return (
    <>
      <Header name="Pridanie nového autora" />
      <div className="max-w-2xl mx-auto mt-10">
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="relative z-0 mb-6 group">
            <input
              type="text"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("name", {
                required: true,
              })}
            />
            <label
              htmlFor="name"
              className="absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Meno autora
            </label>
          </div>
          <div className="relative z-0 mb-6 group">
            <input
              type="text"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("country", {
                required: true,
              })}
            />
            <label
              htmlFor="country"
              className="absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Krajina pôvodu
            </label>
          </div>
          <br />
          <div className="relative z-0 mb-6 group">
            <input
              type="text"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("lastName", {
                required: true,
              })}
            />
            <label
              htmlFor="description"
              className="absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Priezivsko autora
            </label>
          </div>
          <br />
          <div {...getRootProps()} className="relative z-0 mb-6 group">
            <input
              type="file"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...getInputProps()}
            />
            <label
              htmlFor="description"
              className="absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              <p>Obrázok</p>
            </label>
            {/* Display image preview */}
            {selectedImage && (
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Selected Image"
                className="mt-2 h-24 w-24 object-cover"
              />
            )}
          </div>
          <br />
          <div className="relative z-0 mb-6 group">
            <input
              type="date"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("birthYear", {
                required: true,
              })}
            />
            <label
              htmlFor="description"
              className="absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Dátum narodenia
            </label>
          </div>
          <br />
          <div className="relative z-0 mb-6 group">
            <input
              type="date"
              placeholder="Nemusí byť vyplnené ak autor/autorka je nažive"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("birthYear", {
                required: true,

              })}
            />
            <label
              htmlFor="description"
              className="absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Dátum úmrtia
            </label>
          </div>
          <br />
          <div className="relative z-0 mb-6 group">
            <textarea
              rows={3}
              cols={3}
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("description", {
                required: true,

              })}
            />
            <label
              htmlFor="description"
              className="absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Krátke info o spisovateľovi
            </label>
          </div>
          <br />
          <div className="relative z-0 mb-6 group">
            <input
              type="text"
              className="mt-4 block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("litPeriod", {
                required: true,

              })}
            />
            <label
              htmlFor="description"
              className="absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Literárne obdobie
            </label>
          </div>
          <br />
          <button type="submit" className="mt-6 bg-blue-200 rounded-lg p-2 font-extrabold">
            Pridať nového autora
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateAuthorForm;
