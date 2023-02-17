const yup = require('yup');

module.exports.HERO_SCHEMA = yup.object().shape({
  nickname: yup.string().required('Nickname is required!').min(1),
  fullName: yup.string().required('Full Name is required!').min(1),
  description: yup.string().required('Description your hero is required!').min(1),
  slogan: yup.string().required('Slogan your hero is required!').min(1)
});
