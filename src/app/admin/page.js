"use client";

import React from "react";
import Layout from "../../components/layout/Layout";
import MainNavigation from "../../components/layout/MainNavigation";

export const metadata = {
  title: "Admin Login - Holy Trinity Catholic Church",
};

export default function AdminPage() {
  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
  };

  return (
    <Layout>
      <MainNavigation />
      <main className="container">
        <section className="section">
          <h1 className="section-title">Admin Login</h1>
          <div className="form-container">
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" required />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
              </div>

              <button type="submit" className="btn">
                Login
              </button>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
}
