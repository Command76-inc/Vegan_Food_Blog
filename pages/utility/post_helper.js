export const sanitizeContent = (content) => {
  const regexp = /<.*?>/gi;
  const removedTags = content.replace(regexp, " ");
  const replaceAmps = removedTags.replace(/&LT;.*?&GT;/gi, "");
  return replaceAmps.replace(/(nbsp;|&nbsp;|&amp;)/gi, "");
};
