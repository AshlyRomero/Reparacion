document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    const modal = document.getElementById('definition-modal');
    const modalText = document.getElementById('modal-text');
    const closeModal = document.getElementById('close-modal');
    const downloadBtn = document.getElementById('download-btn');

    const definitions = {
            'm2': 'Puertos para conectar unidades de almacenamiento M.2, como SSDs, que ofrecen altas velocidades de transferencia de datos.',
            'sata': 'Zócalos en la placa madre donde se instalan discos duros y unidades de estado sólido (SSD), permitiendo la transferencia de datos entre estos dispositivos y la placa madre.',
            'pci': 'Ranuras para tarjetas de expansión, como tarjetas gráficas, de sonido o de red. PCIe (PCI Express) ofrece alta velocidad de transferencia de datos.',
            'ram': 'Zócalos para instalar módulos de memoria RAM, que proporcionan espacio para el almacenamiento temporal de datos y programas en uso.',
            'bios': 'El firmware que se encarga de inicializar el hardware durante el arranque del sistema y proporciona una interfaz para la configuración del hardware.',
            'power': 'Puertos donde se conecta la fuente de alimentación del ordenador para suministrar energía a la placa madre y otros componentes.',
            'io': 'Puertos en la parte trasera de la placa madre que permiten la conexión de dispositivos externos como teclado, ratón, USB, y otros periféricos.',
            'cpu': 'El cerebro del ordenador, encargado de ejecutar instrucciones y procesar datos.',
            'cmos': 'Chip que almacena la configuración del BIOS y la hora del sistema, incluso cuando el ordenador está apagado.',
            'vrm': 'Circuitos que regulan el voltaje suministrado a la CPU y otros componentes, asegurando un funcionamiento estable.'
        };
        

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const btnClass = button.classList[1];
            modalText.innerHTML = `<h3>${btnClass.toUpperCase()}</h3><p>${definitions[btnClass] || 'Definición no disponible.'}</p>`;
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', e => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    downloadBtn.addEventListener('click', () => {
        html2canvas(modalText).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const a = document.createElement('a');
            a.href = imgData;
            a.download = 'definicion.png';
            a.click();
        });
    });
});
