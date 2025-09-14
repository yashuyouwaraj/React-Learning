import FormButton from "./FormButton";

const FormStatus = () => {
  const myAction = async (formData: any) => {
    await new Promise<void>((resolve) => setTimeout(resolve, 2000));
    const newPost = {
      title: formData.get("name"),
      email: formData.get("email"),
    };
    console.log(newPost);
  };
  return (
    <form className="mt-5 ml-5 bg-amber-200 w-1/3 p-4 rounded-2xl " action={myAction}>
      <div className="flex gap-2 mb-4">
        <label htmlFor="name">Name:</label>
        <input
          className="border-2"
          type="text"
          id="name"
          name="name"
          required
        />
      </div>
      <div className="flex gap-3">
        <label htmlFor="email">Email:</label>
        <input
          className="border-2"
          type="email"
          id="email"
          name="email"
          required
        />
      </div>
      <FormButton />
    </form>
  );
};

export default FormStatus;
