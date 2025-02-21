import { axiosClassic } from '../../../shared/api/axios';
import { API_URL } from '../../../constants';

export const fetchComponents = async () => {
  return await axiosClassic.get(`${API_URL}/component`);
};

export const fetchComponentById = async (id: string) => {
  return await axiosClassic.get(`${API_URL}/component/${id}`);
};

export const patchComponent = async (id: string, data: any) => {
  return await axiosClassic.patch(`${API_URL}/component/${id}`, data);
}

export const deleteComponent = async (id: string) => {
  return await axiosClassic.delete(`${API_URL}/component/${id}`);
}