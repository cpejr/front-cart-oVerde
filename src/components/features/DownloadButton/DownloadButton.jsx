import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {Certificated, DownloadBut} from './Styles'

const GeneratePDF = () => {

  const printDocument = () => {
    const input = document.getElementById('certificated');
    input.style.display = 'grid';
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save("tree_certificate.pdf");
      });
      input.style.display = 'none';
  };

  return (
    <div>
      <Certificated id="certificated">
        <h2>Nome da árvore</h2>
        <p>Descrição.</p>
      </Certificated>
      <DownloadBut onClick={printDocument}>Baixar PDF</DownloadBut>
    </div>
  );
}

export default GeneratePDF;
