export  const DEPARTMENTS=["CS","ENGLISH","MATH"]

export  const DEPARTMENT_OPTIONS=DEPARTMENTS.map((dept)=>({
    value: dept,
    label: dept,
}))



// export const CLOUDINARY_UPLOAD_URL = import.meta.env."VITE_CLOUDINARY_UPLOAD_URL";
// export const CLOUDINARY_CLOUD_NAME = getEnvVar("VITE_CLOUDINARY_CLOUD_NAME");
export const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

// export const BASE_URL =  import.meta.env.VITE_API_URL;
// export const ACCESS_TOKEN_KEY = import.meta.env.VITE_ACCESS_TOKEN_KEY
// export const REFRESH_TOKEN_KEY = import.meta.env.VITE_REFRESH_TOKEN_KEY

// export const REFRESH_TOKEN_URL = `${BASE_URL}/refresh-token`;

// export const CLOUDINARY_UPLOAD_PRESET = getEnvVar("VITE_CLOUDINARY_