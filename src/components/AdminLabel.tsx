interface AdLabelProps {
  htmlFor: string;
  text: string;
}

function AdminLabel({ htmlFor, text }: AdLabelProps) {
  return (
    <label htmlFor={htmlFor} className="btn modal-button m-4">
      {text}
    </label>
  );
}

export default AdminLabel;
