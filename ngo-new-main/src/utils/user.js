import { getToken } from '../utils/auth';
import { jwtDecode } from 'jwt-decode';

export function getUserFromToken() {
  const token = getToken();
  if (!token) return null;
  try {
    return jwtDecode(token);
  } catch {
    return null;
  }
}
