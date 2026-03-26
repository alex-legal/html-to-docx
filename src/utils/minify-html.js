const minifyHTMLString = (htmlString) => {
  try {
    if (typeof htmlString === 'string' || htmlString instanceof String) {
      return (
        htmlString
          .replace(/\r\n/g, '\n')
          .replace(/\r/g, '\n')
          // Remove layout/indentation whitespace between tags only when it spans lines.
          .replace(/>\s*\n\s*</g, '><')
          .replace(/\n\s*</g, '<')
          .replace(/>\s*\n/g, '>')
          .replace(/\n/g, ' ')
          .replace(/\t/g, ' ')
          .replace(/> +$/g, '>')
      );
    }

    throw new Error('invalid html string');
  } catch (error) {
    return null;
  }
};

export default minifyHTMLString;
