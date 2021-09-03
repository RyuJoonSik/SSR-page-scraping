import React, { useContext } from 'react';
import './ExcelButton.scss';
import { Context } from '../Store/Store';

function ExcelButton() {
  const { onExportExcel } = useContext(Context);

  return (
    <button onClick={onExportExcel} className="excel-export">
      Excel export
    </button>
  );
}

export default ExcelButton;
