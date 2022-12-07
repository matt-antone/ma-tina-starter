export const hasContent = (tinaContent) => {
  return tinaContent?.children[0]?.children[0]?.text?.length ? true : false 
}
export default {
  hasContent,
}