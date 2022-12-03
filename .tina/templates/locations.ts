export default {
  name: 'locations',
  label: 'Locations',
  fields: [
    {
      type: "object",
      name: "location",
      label: "Location",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item.city ? item.city : "New Location"}
        },
      },
      fields: [
        {
          type: "string",
          name: "street",
          label: "Street",
        },
        {
          type: "string",
          name: "suite",
          label: "Suite",
        },
        {
          type: "string",
          name: "city",
          label: "City",
        },
        {
          type: "string",
          name: "state",
          label: "State",
        },
        {
          type: "string",
          name: "zipcode",
          label: "Zip Code",
        },
      ]
    }
  ],
}