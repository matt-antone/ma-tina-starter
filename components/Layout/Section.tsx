export const Section = ({ children, noPadding = false, className = "", id = "" }) => {
  return (
    <section
      id={id}
      className={`${className}`}
    >
      {children}
    </section>
  );
};

export default Section
