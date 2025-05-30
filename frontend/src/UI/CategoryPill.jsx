const CategoryPill = ({
  category,
  selected,
  onToggle,
  isSelectable = false,
  styleConfig = {},
}) => {
  const colorMap = {
    Work: "#007BFF",
    Personal: "#28A745",
    Urgent: "#DC3545",
    Ideas: "#FFC107",
    Health: "#6F42C1",
  };

  const defaultColor = "#ccc";
  const assignedColor = colorMap[category.title] || defaultColor;

  const bgColor = assignedColor;
  const textColor = "#fff";
  const opacity = isSelectable ? (selected ? 1 : 0.4) : 1;

  const handleClick = () => {
    if (isSelectable && onToggle) {
      onToggle(category.id);
    }
  };

  const defaultStyles = {
    display: "inline-block",
    padding: "0.3rem 0.6rem",
    borderRadius: "15px",
    backgroundColor: bgColor,
    color: textColor,
    margin: "0.25rem",
    cursor: isSelectable ? "pointer" : "default",
    fontWeight: "bold",
    opacity,
    transition: "all 0.2s",
    border:
      selected && isSelectable ? "2px solid #333" : "2px solid transparent",
    fontSize: "1rem",
  };

  const combinedStyles = {
    ...defaultStyles,
    ...styleConfig,
  };

  return (
    <span onClick={handleClick} style={combinedStyles}>
      {category.title}
    </span>
  );
};

export default CategoryPill;
