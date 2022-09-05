const NUMBER_REGEX = /[0-9]/g;
const DASH_REGEX = /[-]/g;
const NAME_REGEX = /^[가-힣]{2,4}$/;
const PHONE_REGEX = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
const ADDRESS_REGEX =
  /^((?!상가)[가-힣])+(\d{1,5}|(\d{1,5}[가-힣,]+\d{1,5})?)(읍|면|동|가)$/;

export const validationName = (name) => {
  if (name.length === 0) return 'idle';
  if (NAME_REGEX.test(name)) return 'vaild';

  return 'invaild';
};
export const validationPhone = (phone) => {
  if (phone.length === 0) return 'idle';
  if (PHONE_REGEX.test(phone)) return 'vaild';

  return 'invaild';
};
export const validationPhoneEnter = (phone) => {
  return !(NUMBER_REGEX.test(phone) && !DASH_REGEX.test(phone));
};
export const validationAddress = (address) => {
  if (address.length === 0) return 'idle';
  if (ADDRESS_REGEX.test(address)) return 'vaild';

  return 'invaild';
};
