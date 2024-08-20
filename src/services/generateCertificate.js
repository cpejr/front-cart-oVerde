import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function generateCertificate() {
    
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

}