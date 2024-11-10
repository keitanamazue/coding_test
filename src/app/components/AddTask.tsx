"use client";

import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  text: string;
};

// const schema = z.object({
//   text: z.string().min(1),
// });

export default function AddTask() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onBlur",
    reValidateMode: "onChange",
    // resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // console.log({ data });
    // await addTodo({ id: uuidv4(), text: data.text });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4 space-y-3">
      <input
        {...register("text")}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
        type="text"
        placeholder="New task..."
      />
      {errors.text && <p>{errors.text.message}</p>}

      <button className="w-full px-4 py-2 text-white bg-blue-500 rounded transform transition-transform duration-200 hover:bg-blue-400 hover:scale-95">
        Add task
      </button>
    </form>
  );
}
