import Attachment from './Attachment';

const AttachmentsList = ({ attachments }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <h3>
        <b>Attachments List:</b>
      </h3>
      {attachments.map((item) => (
        <div key={item.id}>
          <Attachment attachmentId={item.id}></Attachment>
        </div>
      ))}
    </div>
  );
};

export default AttachmentsList;
