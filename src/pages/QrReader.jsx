import React, { useState } from "react";
import QrCodeReader from "react-qrcode-reader";

const QrReader = () => {
  const [val, setVal] = useState("");
  return (
    <div>
      <>
        <QrCodeReader delay={100} width={600} height={500} action={setVal} />
        <p>{val}</p>
      </>
    </div>
  );
};

export default QrReader;