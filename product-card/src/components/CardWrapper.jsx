const CardWrapper = ({ children }) => {
  return (
    <div
      style={{
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        borderRadius: "10px",
        padding: "12px",
      }}
    >
      {children}
    </div>
  );
};

export default CardWrapper;
