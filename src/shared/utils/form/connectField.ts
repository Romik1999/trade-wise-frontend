export const connectField = (form, name) => {
  return {
    name,
    control: form.control,
  };
};

export const createSubConnector = (connector, name) => {
  return {
    name: `${connector.name}.${name}`,
    control: connector.control,
  };
};
