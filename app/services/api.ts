import axios from "axios";

const api = axios.create({
    baseURL: 'https://dummyjson.com/post',
    timeout: 10000,
    headers: {
        'Authorization': 'Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3MTc5NTY2MzAsImV4cCI6MTcxNzk2MDIzMH0.meM7caA7GSDyg1MXO3NNYtJEvHZDwvnVdkI3WclXjdM',
    },
});

export default api;

