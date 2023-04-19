function ColorField(props: {
  id: number;
  color: string;
  setColor: (id: number) => void;
}) {
  const styles = { backgroundColor: props.color };

  return (
    <div
      className="color-field"
      style={styles}
      onClick={() => props.setColor(props.id)}
    ></div>
  );
}

export default ColorField;
