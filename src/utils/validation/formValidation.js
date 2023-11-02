export const isNotEmpty = (value) =>  value.length > 0;

export const isEmail = (value) => value.includes('@') && value.length > 0

export const isPassValid = (value) => value.length > 6;
