"use client";

import { SessionInterface } from "@/common.types";
import Image from "next/image";
import { ChangeEvent } from "react";
import FormField from "./FormField";

type Props = {
  type: string;
  session: SessionInterface;
};

const handleFormSubmit = (e: React.FormEvent) => {};
const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {};

const handleStateChange = (fieldName: string, value: string) => {};
const form = {
  image: "",
};

const ProjectForm = ({ type, session }: Props) => {
  return (
    <form onSubmit={handleFormSubmit} className="flexStart form">
      <div className="flexStart form_image-container">
        <label htmlFor="poster" className="flexCenter form_image-label">
          {!form.image && "Choose a poster for your project"}
        </label>
        <input
          id="image"
          type="file"
          accept="image/*"
          required={type === "create"}
          className="form_image-input"
          onChange={handleChangeImage}
        />
        {form.image && (
          <Image
            src={form?.image}
            className="sm:p-10 object-contain z-20"
            alt="Project Poster"
            fill
          />
        )}
      </div>
      <FormField
        title="Title"
        state={form.title}
        placeHolder="Flexible"
        setState={(value) => handleStateChange("title", value)}
      />
      <FormField
        title="Description"
        state={form.description}
        placeHolder="Showcase and discover remarkable developer projects"
        setState={(value) => handleStateChange("description", value)}
      />
      <FormField
        type="url"
        title="Website URL"
        state={form.liveSiteUrl}
        placeHolder="https://3000"
        setState={(value) => handleStateChange("liveSiteUrl", value)}
      />
      <FormField
        type="url"
        title="Github URL"
        state={form.githubUrl}
        placeHolder="https://github.com/samarhussain"
        setState={(value) => handleStateChange("githubUrl", value)}
      />
      {/* CustomInput Category */}

      <div className="flexStart w-full">
        <button>Create</button>
      </div>
    </form>
  );
};

export default ProjectForm;
