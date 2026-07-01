import { Form, useActionData } from "react-router-dom";

export default function Settings() {
  const result = useActionData();

  return (
    <div>
      <h2>Settings</h2>

      {result && <p>Saved: {result.username}</p>}

      <Form method="post">
        <input name="username" placeholder="Your name" />
        <button type="submit">Save</button>
      </Form>
    </div>
  );
}
