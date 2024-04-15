import { Button, Stack } from "react-bootstrap";

const BoolQuestion = ({
  question,
  onYes,
  onNo,
  yesText="Iya",
  noText="Tidak"
}) => {
  return (
    <div>
      <h3>{question}</h3>
      <Stack direction="horizontal">
        <Button variant="primary" onClick={onYes}>{yesText}</Button>
        <Button variant="primary-outline" onClick={onNo}>{noText}</Button>
      </Stack>
    </div>
  );
}

export default BoolQuestion;
