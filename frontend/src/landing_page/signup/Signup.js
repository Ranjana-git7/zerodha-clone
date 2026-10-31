import React, { useState } from "react";

function Signup() {
  const [form, setForm] = useState({ mobile: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setMessage("Sending...");
    try {
      const res = await fetch("http://localhost:3002/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setMessage(data.message);
    } catch (err) {
      setMessage("Cannot reach the server. Is the backend running?");
    }
  };

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Open a free demat and trading account online</h1>
        <p className="text-muted fs-5">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-12 col-md-5">
          <div className="card p-4 shadow-sm">
            <h4 className="mb-3">Sign up now</h4>
            <input
              type="text"
              name="mobile"
              className="form-control mb-3"
              placeholder="Mobile number"
              value={form.mobile}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              className="form-control mb-3"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              className="form-control mb-3"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Sign up
            </button>
            {message && <p className="mt-3 mb-0">{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;