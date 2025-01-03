export const certifications = {
  corporate: [
    {
      id: 'iso-9001',
      name: 'ISO 9001',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/ISO_9001-2015.svg/1190px-ISO_9001-2015.svg.png?20200218083857',
      description: 'Quality Management Systems',
      descriptionEs: 'Sistemas de Gestión de Calidad'
    },
    {
      id: 'iso-27001',
      name: 'ISO 27001',
      logo: 'https://dwglogo.com/wp-content/uploads/2018/03/iso_27001_02.png',
      description: 'Information Security Management',
      descriptionEs: 'Gestión de Seguridad de la Información'
    },
    {
      id: 'iso-37001',
      name: 'ISO 37001',
      logo: 'https://asrconsultoria.com.br/wp-content/uploads/2019/08/logo-ISO-37001.png',
      description: 'Anti-bribery Management Systems',
      descriptionEs: 'Sistemas de Gestión Antisoborno'
    },
    {
      id: 'iso-20000-1',
      name: 'ISO 20000-1',
      logo: 'https://unichrone.com/blog/wp-content/uploads/iso-20000.png',
      description: 'IT Service Management',
      descriptionEs: 'Gestión de Servicios de TI'
    }
  ],
  professional: [
    {
      id: 'itil-v4',
      name: 'ITIL V4',
      logo: 'https://www.bluemorpholearning.com/wp-content/uploads/2024/02/36.png',
      description: 'IT Service Management Framework',
      descriptionEs: 'Marco de Gestión de Servicios de TI'
    },
    {
      id: 'scrum-master',
      name: 'Scrum Master',
      logo: 'https://images.credly.com/images/c2ddc533-ba6c-464d-a69d-f9f28177176b/image.png',
      description: 'Agile Project Management',
      descriptionEs: 'Gestión Ágil de Proyectos'
    },
    {
      id: 'pmp',
      name: 'PMP',
      logo: 'https://officeproinc.com/wp-content/uploads/2024/03/pmp-600px.png',
      description: 'Project Management Professional',
      descriptionEs: 'Profesional en Dirección de Proyectos'
    },
    {
      id: 'cobit-5',
      name: 'COBIT 5',
      logo: 'https://cloudtechfortune.com/wp-content/uploads/2021/06/cobit.png',
      description: 'IT Governance Framework',
      descriptionEs: 'Marco de Gobierno de TI'
    },
    {
      id: 'dcp',
      name: 'Data Centre Professional',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZKGyzrFqjK3nnGlG1oMv0b2PX1Yo4pqfPUg&s',
      description: 'Data Center Management',
      descriptionEs: 'Gestión de Centro de Datos'
    },
    {
      id: 'dcf',
      name: 'Data Centre Facilities',
      logo: 'data:image/png;base64,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',
      description: 'Data Center Infrastructure',
      descriptionEs: 'Infraestructura de Centro de Datos'
    }
  ]
};
