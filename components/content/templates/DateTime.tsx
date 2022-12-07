import React from 'react';
import type { Template } from 'tinacms'

export const dateTimeFields: Template= {
  name: "DateTime",
  label: "Date/Time",
  fields: [
    {
      name: "format",
      label: "Format",
      type: "string",
      options: [
        {
          label: "ISO",
          value: 'iso'
        },
        {
          label: "UTC",
          value: 'utc',
        },
        {
          label: "Local",
          value: 'local',
        },
      ],
    },
    {
      name: "authorName",
      label: "Author",
      type: "string",
    },
  ],
}

const DateTime = (props) => {
    const dt = React.useMemo(() => {
      return new Date();
    }, []);

    switch (props.format) {
      case "iso":
        return <span>{dt.toISOString()}</span>;
      case "utc":
        return <span>{dt.toUTCString()}</span>;
      case "local":
        return <span>{dt.toLocaleDateString()}</span>;
      default:
        return <span>{dt.toLocaleDateString()}</span>;
    }
};

export default DateTime;