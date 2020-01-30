const convertText = (text: string, textCase: string): string => {
  let result = '';
  if (typeof text === 'string') {
    switch (textCase) {
      case 'lower-case':
        result = text
          .replace(/_/g, ' ')
          .replace(/-/g, ' ')
          .toLowerCase();
        break;
      case 'upper-case':
        result = text
          .replace(/_/g, ' ')
          .replace(/-/g, ' ')
          .toUpperCase();
        break;
      case 'title-case':
        result = text
          .replace(/_/g, ' ')
          .replace(/-/g, ' ')
          .replace(
            /\w\S*/g,
            (word) => `${word.charAt(0).toUpperCase()}${word.substr(1).toLowerCase()}`,
          );
        break;
      case 'snake-case':
        result = text.toLowerCase().replace(/\s+/g, '_');
        break;
      case 'dash-case':
        result = text.toLowerCase().replace(/\s+/g, '-');
        break;
      default:
        result = text;
        break;
    }
  }
  return result;
};

export default convertText;
