const Form = () => {
  const formAction = (formData) => {
    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    console.log(userData);
  };

  return (
    <form action={formAction}>
      <label htmlFor="name">Name:</label>
      <input
        className="border-2 border-black rounded ml-8"
        type="text"
        id="name"
        name="name"
      />{" "}
      <br />
      <label htmlFor="email">Email:</label>
      <input
        className="border-2 border-black rounded ml-9"
        type="email"
        id="email"
        name="email"
      />{" "}
      <br />
      <label htmlFor="password">Password:</label>
      <input
        className="border-2 border-black rounded ml-2"
        type="password"
        id="password"
        name="password"
      />
      <br />
      <button type="submit" className="bg-black text-white px-4 py-2 mt-3">
        Submit
      </button>
    </form>
  );
};

export default Form;