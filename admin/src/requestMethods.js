import axios from "axios";


const BASE_URL = "http://localhost:5000/api/";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWZiZGY3ZDQ2ZGJlMGMxYWNlNGQ2ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDE5NTMyMiwiZXhwIjoxNjYwNDU0NTIyfQ.wxD9ojd09Iv2u3nn2TbWmMHgmvcOC-ng1vcljR9_A2U"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});