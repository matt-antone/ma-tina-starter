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
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea"
      }
    },
  ],
}