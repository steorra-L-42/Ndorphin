import { request } from "./axiosConfig";
import npointApi from "./npoint";

const boardApi = {
  create: (formData: FormData) => {
    const data = {
      pointRuleId: 1,
    };
    npointApi.create(data);

    return request.post(`/api/v1/boards`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  list: (boardType: string, page?: number) => {
    return request.get(`/api/v1/boards?type=${boardType}&page=${page}&size=12`);
  },

  oklist: (boardType: string, page?: number) => {
    return request.get(`/api/v1/boards?type=${boardType}&page=${page}&size=10`);
  },

  relaylist: (boardType: string, isDone?: boolean, page?: number) => {
    return request.get(`/api/v1/boards?type=${boardType}&filter2=recent&isDone=${isDone}&page=${page}`);
  },

  read: (boardId: string) => {
    return request.get(`/api/v1/boards/${boardId}`);
  },

  update: (formData: FormData, boardId: string) => {
    return request.put(`/api/v1/boards/${boardId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  delete: (boardId: string) => {
    return request.delete(`/api/v1/boards/${boardId}`);
  },

  search: (boardType: string, keyword: string, filter1: string, filter2: string, page?:number, isDone?: boolean) => {
    return request.get(`/api/v1/boards?type=${boardType}&filter1=${filter1}&filter2=${filter2}&search=${keyword}&page=${page}&isDone=${isDone}`);
  },

  oksearch: (boardType: string, keyword: string) => {
    return request.get(`/api/v1/boards?type=${boardType}&search=${keyword}`);
  },

  reaction: (boardId: string, reactionType: string) => {
    const data = {
      pointRuleId: 5,
    };
    npointApi.create(data);
    
    return request.post(
      `api/v1/boards/${boardId}/reactions`,
      {
        reactionType: reactionType,
      },
      { headers: { "Content-Type": "application/json" } }
    );
  },

  reactionUpdate: (boardId: string, reactionType: string) => {
    return request.put(
      `api/v1/boards/${boardId}/reactions`,
      {
        reactionType: reactionType,
      },
      { headers: { "Content-Type": "application/json" } }
    );
  },

  reactionDelete: (reactionId: string) => {
    return request.delete(`api/v1/boards/${reactionId}/reactions`);
  },
};

export default boardApi;
