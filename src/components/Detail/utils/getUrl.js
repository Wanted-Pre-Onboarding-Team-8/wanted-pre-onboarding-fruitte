export const getUrl = (text) => {
  if (!document.queryCommandSupported('copy')) {
    return {
      title: '알림',
      content: '복사하기가 지원되지 않는 브라우저입니다.',
    };
  }
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.top = '0';
  textarea.style.left = '0';
  textarea.style.position = 'fixed';

  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  return {
    title: '알림',
    content: '주소가 클립보드에 복사되었습니다.',
  };
};
