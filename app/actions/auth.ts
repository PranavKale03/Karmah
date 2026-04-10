"use server";

import axios from "axios";
import { AuthResponse, User } from "@/lib/types";

const mapUser = (data: any): User => ({
  id: data._id || data.id,
  name: data.name,
  email: data.email,
});

export async function loginAsDemoUser(): Promise<AuthResponse> {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const API_KEY = process.env.DEMO_API_KEY;

  if (!API_URL || !API_KEY) {
    throw new Error("Server configuration missing.");
  }

  try {
    const res = await axios.post(`${API_URL}/auth/demo`, {}, {
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json'
      }
    });

    const payload = res.data.data;
    return {
      token: payload.token,
      user: mapUser(payload),
    };
  } catch (error: any) {
    console.error("Demo login action error:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Demo login failed on the server.");
  }
}
