import { registerService, loginService } from "../Services/auth.service.js";

export const handleRegister = async (req, res) => {
  const response = await registerService(req.body);
  res.status(response.status).json({ message: response.message });
};

export const handleLogin = async (req, res) => {
  const response = await loginService(req.body);
  console.log(response);
  // res.send("working")
  res.json(response)
};
