export default {
  name: 'site',
  label: 'Site Info',
  fields: [
    {
      type: "string",
      name: "name",
      label: "Site Name"
    },
    {
      type: "image",
      name: "logo",
      label: "Logo",
    },
    {
      type: "boolean",
      name: "showName",
      label: "Show site name in header",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea"
      }
    },
  ],
}