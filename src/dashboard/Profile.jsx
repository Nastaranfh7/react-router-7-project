import { Form, useLoaderData, useActionData } from "react-router-dom";

export default function Profile() {
  const data = useLoaderData();       // داده اولیه از Loader
  const result = useActionData();     // نتیجه فرم از Action

  return (
    <div>
      <h2>Profile Page</h2>

      {/* پیام موفقیت بعد از ارسال فرم */}
      {result && <p>Updated: {result.username} - {result.email}</p>}

      {/* فرم */}
      <Form method="post">
        <input
          name="username"
          defaultValue={data.username}
          placeholder="Your name"
        />

        <input
          name="email"
          defaultValue={data.email}
          placeholder="Your email"
        />

        <button type="submit">Update</button>
      </Form>
    </div>
  );
}
