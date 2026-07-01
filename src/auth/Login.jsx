export default function Login() {
  return (
    <div>
      <h2>Login Page</h2>
      <p>Please login to continue.</p>

      <button
        onClick={() => {
          localStorage.setItem("loggedIn", "true");
          window.location.href = "/dashboard";
        }}
      >
        Login
      </button>
    </div>
  );
}
