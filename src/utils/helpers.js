import axios from 'axios';
import Swal from 'sweetalert2';

// const baseURL = 'http://localhost:3000/api';
const baseURL = 'https://forum-express-api.herokuapp.com/api';

export const apiHelper = axios.create({
  baseURL,
});

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  timer: 3000,
  showConfirmButton: false,
});
