import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function generateCertificate() {
    const input = document.getElementById('certificated');

    // Temporarily make the certificate visible to capture the entire content
    input.style.display = 'block';

    html2canvas(input, { scale: 2 }) // Increase the scale for better resolution
        .then((canvas) => {
            // Get the dimensions of the canvas
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 210; // A4 width in mm
            const pageHeight = 295; // A4 height in mm
            const imgHeight = canvas.height * imgWidth / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            const pdf = new jsPDF('p', 'mm', 'a4');

            // Add pages to the PDF as needed
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save("tree_certificate.pdf");
        })
        .finally(() => {
            // Hide the certificate after generating the PDF
            input.style.display = 'none';
        });
}
